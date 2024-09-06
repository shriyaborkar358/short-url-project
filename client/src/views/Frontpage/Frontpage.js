import Navbar from "../../components/Navbar/Navbar"
import "./Frontpage.css"
import { Link } from "react-router-dom"
import ImgWallet from "./wallet.png"

function Frontpage() {
  return (
    <div>
        <Navbar/>
        <div className="home-container d-flex justify-content-center mt-5">
                    <img src={ImgWallet} className=" wallet-img mt-1 m-3 h-96 "
                        style={{ filter: "drop-shadow(5px 5px 4px #a2d9fb)" }}
                    />
                <div className="home-info  m-4 text-light">
                    <h1 className='m-4 '>Welcome to the <span className="text-danger">Expense</span> <span className='text-primary '>Tracker !</span></h1>
                    <div className="home-text text-justify m-3 fs-5 ">
                        <p>A Expense tracker is a tool or application designed to help individuals manage and keep track of their financial transactions, expenses, and overall budget. </p>

                        <p>These trackers are typically digital platforms, either in the form of mobile apps or web applications, that provide users with a convenient way to monitor their spending, income, and savings.</p>

                        <p>A Expense tracker serves as a valuable tool for personal finance management, empowering individuals to make informed decisions about their money and work towards achieving their financial goals.</p>     
                    </div>

                    <Link to= '/login' className='btn m-4 px-4 btn-primary'>Start Here ➡️ </Link> 
                </div>

            </div>
    </div>
  )
}

export default Frontpage