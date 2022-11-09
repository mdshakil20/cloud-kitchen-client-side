import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div className="w-full bg-darkBlue mt-10">
            <h1 className="text-3xl font-bold text-white pt-12 pb-4 text-center ">My Services</h1>
            <div className=" lg:w-80% pb-12 mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {/* first card  */}
                <div className="card card-compact w-280 bg-base-100 shadow-xl  mx-auto mt-6 ">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Service Name </h2>
                        <p className="text-left">If a dog chews shoes whose shoes does he choose?</p>
                        <p className="text-left">Price : $</p>
                        <div className="card-actions justify-start">
                            <Link to='/' className="btn bg-orange mr-5 ">Details</Link>
                        </div>
                    </div>
                </div>

                {/* second card  */}
                <div className="card card-compact w-280 bg-base-100 shadow-xl  mx-auto mt-6 ">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Service Name </h2>
                        <p className="text-left">If a dog chews shoes whose shoes does he choose?</p>
                        <p className="text-left">Price : $</p>
                        <div className="card-actions justify-start">
                            <Link to='/' className="btn bg-orange mr-5 ">Details</Link>
                        </div>
                    </div>
                </div>

                {/* third card  */}
                <div className="card card-compact w-280 bg-base-100 shadow-xl  mx-auto mt-6 ">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Service Name </h2>
                        <p className="text-left">If a dog chews shoes whose shoes does he choose?</p>
                        <p className="text-left">Price : $</p>
                        <div className="card-actions justify-start">
                            <Link to='/' className="btn bg-orange mr-5 ">Details</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/' className="w-64 btn bg-orange mr-5 hover:text-black hover:bg-yellow  mb-12 ">See More</Link>
        </div>

    );
}
export default Services;

// server:https://classroom.github.com/a/y-8jL3e7