import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    // console.log(myReviews)

    useEffect(() => {
        fetch(`http://localhost:5000/services/my-reviews/${user.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data));
    }, [])
    return (
        <div className="w-80% md:w-60% mx-auto mb-24">
            <h1 className="text-3xl  my-12 font-bold text-orange text-center">My Reviews</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>My Review</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReviews.map(myRevew =>
                                <tr>
                                    <td>{myRevew.name}</td>
                                    <td>{myRevew.reviews.map(r =>
                                        r.reviewer_email == user.email && <span>{r.text}</span>
                                    )}</td>
                                    <td>
                                        <button className="btn btn-circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default MyReview;
