import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
const AllService = () => {
    const [services, setServices] = useState([]);
    console.log(services);


    useEffect(() => {
        fetch('https://y-puce-two.vercel.app/services')
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
        </div>

    );
}
export default AllService;
