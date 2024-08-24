import React from "react";
import "./LinkCard.css";

function LinkCard({ title, target, slug, views, createdAt }) {
  const shortUrl = `${process.env.REACT_APP_API_URL}/${slug}`;
  return (
    <div className="link-card">
      <h4 className="link-card-heading">{title || "No Title"}</h4>

      <p className="link-card-target">
        <a href={shortUrl} target="_blank" className="link-target">
          <spn className="link-key">Short URL :</spn> {shortUrl}
        </a>
      </p>

      <p className="link-card-target">
        <a href={target} target="_blank" className="link-target">
          <span className="link-key">Target URL :</span>{" "}
          {target.substring(0, 40)}
          {target.length > 40 ? "..." : null}
        </a>
      </p>

      <span className="link-card-views">{views}</span>

      <span className="link-card-people-views">
        {views > 0
          ? `${views} people visited this link`
          : `Share this link to people`}
      </span>

      <span className="link-card-date">
        {new Date(createdAt).toLocaleString()}
      </span>
    </div>
  );
}

export default LinkCard;
