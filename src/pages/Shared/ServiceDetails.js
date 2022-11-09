import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from "../../contexts/AuthProvider";
import ReviewShow from "../ReviewShow";


const ServiceDetails = () => {

    const { user } = useContext(AuthContext);

    const selectedService = useLoaderData()[0];
    const [allReview, setAllReview] = useState(selectedService.reviews);



    console.log(user);
    // console.log("Db Reviews",dbReviews);
    console.log(typeof (allReview));

    const handleAddReview = event => {
        event.preventDefault();
        const value = event.target.review.value;
        // const newReview = { ...userReview };
        // newReview[field] = value;
        // setUserReview(newReview);

        const sentReview = { text: `${value}` };


        //data post 
        fetch(`http://localhost:5000/services/review/${selectedService._id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sentReview),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Successfully Review Send.');
                    // console.log(sentReview);
                    // const newAllReview = { ...sentReview ,...allReview };

                    // setAllReview(newAllReview);
                    // console.log(allReview)
                    fetch(`http://localhost:5000/services/${selectedService._id}`)
                    .then(res=>res.json())
                    .then(data =>console.log("Data : ",data))


                    console.log(allReview)

                    event.target.reset();
                }
            })
    }

    return (
        <div className="w-full bg-darkBlue mt-10">
            <h1 className="text-3xl font-bold text-white pt-12 pb-4 text-center ">My Services</h1>
            <div className=" lg:w-80% pb-12 mx-auto ">

                <div className="card-body text-white">
                    <PhotoProvider>
                        <PhotoView src={selectedService.img} className="h-96 md:w-60% roundedmx-auto ">
                            <img src={selectedService.img} className="h-96 md:w-60% rounded mx-auto" alt="" />
                        </PhotoView>
                    </PhotoProvider>
                    <h2 className="card-title">{selectedService.name}</h2>
                    <p className="text-left">{selectedService.description}</p>
                    <p className="text-left"><b>Price : ${selectedService.price}</b></p>
                    <p className="text-left"><b>Rating : {selectedService.rating}</b></p>
                    <div className="card-actions justify-start">
                        {/* <Link to={`/services/${selectedService._id}`} className="btn bg-orange mr-5 ">Details</Link> */}
                    </div>
                </div>
            </div>

            <div className="w-80% md:w-70% bg-blueAss py-5 mx-auto ">
                <div className="w-80% mx-auto flex mb-5 ">
                    <>
                        {
                            user?.uid ?
                                <>
                                    <img className="rounded-full w-12 h-12" src={user.photoURL} />
                                    <form onSubmit={handleAddReview} className="flex w-full ml-2">
                                        <input type="text" name="review" className=" bg-white w-full rounded-tl-full rounded-bl-full pl-3" placeholder="Wright your review" />
                                        <button className="btn normal-case btn-primary bg-blue-600 rounded-tr-full rounded-br-full text-white">Review</button>
                                    </form>
                                </>
                                :
                                <form className="flex w-full ml-2">
                                    <input className=" text-black bg-amber-50 w-full rounded-full  pl-3 mr-3" placeholder="To review Please Login" readOnly />
                                    <Link to='/login' className="btn normal-case btn-primary bg-blue-600 rounded-full text-white">Login</Link>
                                </form>
                        }
                    </>

                </div>
                <div className="w-70% mx-auto">
                    {
                        allReview.map(rev => <ReviewShow key={rev.reviewer_email} rev={rev}></ReviewShow>)
                    }
                </div>
            </div>
        </div>

    );
}
export default ServiceDetails;
