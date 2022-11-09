import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = (service) => {
    const srvce = service.service;
    console.log(srvce)

    return (
        <div className="card rounded card-compact w-280 bg-base-100 shadow-xl  mx-auto mt-6 ">
            <img src={srvce.img} className="h-48 rounded " height={250} alt="" />
            <div className="card-body">
                <h2 className="card-title">{srvce.name}</h2>
                <p className="text-left">{srvce.description.substring(0, 100)}</p>
                <p className="text-left"><b>Price : ${srvce.price}</b></p>
                <div className="card-actions justify-start">
                    <Link to='/' className="btn bg-orange mr-5 ">Details</Link>
                </div>
            </div>
        </div>
    );
}
export default ServiceCard;