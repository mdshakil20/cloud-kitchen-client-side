import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "./ServiceCard";
const AllService = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useTitle('All Services');

    useEffect(() => {

        fetch('https://y-puce-two.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div className="w-full bg-darkBlue mt-10">
            {services.length === 0 ?
                <div className="w-full mx-auto my-24 bg-blueAss"><div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>
                 :
                <>
                    <h1 className="text-3xl font-bold text-white pt-12 pb-4 text-center ">My Services</h1>
                    <div className=" lg:w-80% pb-12 mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        {
                            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                        }
                    </div>
                </>
            }
        </div>

    );
}
export default AllService;
