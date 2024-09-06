import Navbar from "../../components/Navbar/Navbar"
import "./Frontpage.css"
import { Link } from "react-router-dom"
import ImgWallet from "./wallet.png"

function Frontpage() {
  return (
    <div>
        <Navbar/>
        <div className="home-container d-flex justify-content-center mt-4">
                <div className="wallet-img-container">
                    <img src={ImgWallet} className=" wallet-img mt-1 m-5 h-96 ms-0 "
                        style={{ filter: "drop-shadow(9px 8px 4px #a2d9fb)" }}
                    />
                </div>
                <div className="home-info mt-5 text-light">
                    <h1 className='m-4 mx-5'>Welcome to the <span className="text-danger">Expense</span> <span className='text-primary '>Tracker !</span></h1>
                    <div className="home-text text-justify m-4 mx-5 fs-5 ">
                        <p>A Expense tracker is a tool or application designed to help individuals manage and keep track of their financial transactions, expenses, and overall budget. </p>

                        <p>These trackers are typically digital platforms, either in the form of mobile apps or web applications, that provide users with a convenient way to monitor their spending, income, and savings.</p>

                        <p>A Expense tracker serves as a valuable tool for personal finance management, empowering individuals to make informed decisions about their money and work towards achieving their financial goals.</p>     
                    </div>

                    <Link to= '/login' className='btn mx-5 btn-primary'>Start Here ➡️ </Link> 
                </div>

            </div>
    </div>
  )
}

export default Frontpage