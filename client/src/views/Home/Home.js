import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import LinkCard from "../../components/LinkCard/LinkCard";

function Home() {
  // const [title, settitle] = useState("")
  // const [target, setTarget] = useState("")
  // const [slug, setSlug] = useState("")

  const [linkData, setLinkData] = useState({
    title: "",
    target: "",
    slug: "",
  });

  const [user, setUser] = useState("")
  const [links, setLinks] = useState([]);

  useEffect(()=>{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if(currentUser){
      setUser(currentUser)
    }

    if(!currentUser){
      window.location.href = '/login'
    }
  }, [])

  const loadLinks = async () =>{
    if(!user._id){
      return
    }
    toast.loading('Loading links...')

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/links?userId=${user._id}`)

    const allLinks = response.data.data
    toast.dismiss()

    setLinks(allLinks)
  }

  useEffect(()=>{
    loadLinks()
  }, [user])


  const shortenURL = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/link`,
      linkData
    );
    if (response.data.success) {
      toast.success("Link Shorten Successfully");
      setLinkData({
        title: "",
        target: "",
        slug: "",
      });
    } else {
      toast.error("response.data.message");
    }
  };

  return (
    <div>
      <h1 className="heading-heading  text-center">Create Long URL to Short </h1>
      <p className="para-heading text-center "> {user.fullName} Don't waste time typing long URL's</p>

      <div className="links-base-container mt-3">
        <form className="link-forms">
          <input
            type="text"
            placeholder="Title"
            className="link-input"
            value={linkData.title}
            onChange={(e) => {
              setLinkData({
                ...linkData,
                title: e.target.value,
              });
            }}
          />

          <input
            type="text"
            placeholder="Target URL"
            className="link-input"
            value={linkData.target}
            onChange={(e) => {
              setLinkData({
                ...linkData,
                target: e.target.value,
              });
            }}
          />

          <input
            type="text"
            placeholder="Slug"
            className="link-input"
            value={linkData.slug}
            onChange={(e) => {
              setLinkData({
                ...linkData,
                slug: e.target.value,
              });
            }}
          />

          <button className="link-btn" type="button" onClick={shortenURL}>
            Shorten
          </button>
        </form>

        <div className="links-container">
          <h2>All Links</h2>

          <div className="all-links-container">
            {links.map((link) => {
              const { _id, title, target, slug, views, createdAt } = link;

              return (
                <LinkCard
                  key={_id}
                  _id={_id}
                  title={title}
                  target={target}
                  slug={slug}
                  views={views}
                  createdAt={createdAt}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Home;
