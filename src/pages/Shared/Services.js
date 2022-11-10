import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://y-puce-two.vercel.app/services_3')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="w-full bg-darkBlue mt-10">
            <h1 className="text-3xl font-bold text-white pt-12 pb-4 text-center ">My Services</h1>
            <div className=" lg:w-80% pb-12 mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <Link to='/services' className="w-64 btn bg-orange mr-5 hover:text-black hover:bg-yellow  mb-12 ">See More</Link>
        </div>

    );
}
export default Services;
