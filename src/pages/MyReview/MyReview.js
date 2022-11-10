import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const MyReview = () => {
    const { user, setLoading, loading } = useContext(AuthContext);
    const savedReview = useLoaderData();

    const [displayReviews, setDisplayReviews] = useState(savedReview);


    const reviewEditHandle = event => {
        console.log(event.target.value)

    }
    const reviewDeleteHandle = event => {
        const id = event.target.value;
        const agree = window.confirm(`Are you sure to delete it.`);

        if (agree) {
            fetch(`http://localhost:5000/review/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        alert('deleted successfully.');
                        const remainingReviews = displayReviews.filter(rvw => rvw._id !== id);
                        setDisplayReviews(remainingReviews);
                    }
                }
                )
        }
    }

    return (
        <div className="w-80% md:w-70% mx-auto mb-24">

            <h1 className="text-3xl  my-12 font-bold text-orange text-center">My Reviews</h1>

            {
                displayReviews.length >= 1 ?
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
                                    displayReviews.map(myRevew =>
                                        <tr key= {myRevew._id}>
                                            <td>{myRevew.service_name}</td>
                                            <td>{myRevew.text}</td>
                                            
                                            <td>
                                                <button onClick={reviewEditHandle} value={myRevew._id} className="btn btn-primary">Edit</button>
                                                <button onClick={reviewDeleteHandle} value={myRevew._id} className="btn ml-2 btn-secondary">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div>
                        <h1 className="text-2xl  my-12 font-bold text-orange text-center">No Review Found...</h1>
                    </div>
            }
        </div>
    );
}

export default MyReview;
