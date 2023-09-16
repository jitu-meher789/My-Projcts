import React, { useEffect, useState } from "react";
import "../Reviews/Reviews.css";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Rating from "@mui/material/Rating";

import Navbar from "../../Navbar";

import Axios from 'axios';

const Reviews = () => {



    const [review, setReview] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3001/reviews").then((response) => {
            setReview(response.data);
        },)
    }, []);

    return (
        <>
            <Navbar />
            <div className="rev-main-cont">
                <div className="rev-topbar">In Reviews We Trust</div>
                <div className="rev-mainsection">

                    {/* <div className="rev-content">
                        <div className="rev-icon-star">
                            <AccountCircleIcon />
                            <Rating
                                name="read-only"
                                value={3}
                                readOnly
                                style={{ color: "green" }}
                            />
                        </div>
                        <div className="rev-cust-cont1">
                            <span>Maikon Lima</span>
                            <span>reviewed</span>
                            <span>Freecash.com</span>
                        </div>
                        <div className="rev-content1">
                            <p>
                                "Freecash really does provide opportunities for us to make extra
                                income. And you really get paid, i hope it stays that ways!"
                            </p>
                        </div>
                    </div> */}

                    {review.map((item) => {
                        return (
                            <div className="rev-content">
                                <div className="rev-icon-star">
                                    <AccountCircleIcon />
                                    <Rating
                                        name="read-only"
                                        value={item.Rating}
                                        readOnly
                                        style={{ color: "green" }}
                                    />
                                </div>
                                <div className="rev-cust-cont1">
                                    <span>{item.username}</span>
                                    <span>reviewed</span>
                                    <span>{item.courseName}</span>
                                </div>
                                <div className="rev-content1">
                                    <p>
                                        {item.courseDescription}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </>
    );
};

export default Reviews;
