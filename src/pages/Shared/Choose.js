import React from "react";
import { Link } from "react-router-dom";

const Choose = () => {
    return (
        <div>
            <h1 className="text-4xl text-orange mt-10  font-bold text-center">Why Choose Me</h1>
            <div className=" lg:w-80% pb-12 mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

                {/* first card  */}
                <div className="card card-compact w-280 shadow-xl text-white text-justify mx-auto mt-6 ">
                    <img src="https://i.ibb.co/m6HQwt2/Vector.png" className="mx-auto my-3" width={50} height={50} alt="" />
                    <h3 className="text-2xl text-center ">East to Order</h3>
                    <p className="my-4">Secure Payment Services is a safer, faster, more secure way to pay online with, your payments sent directly to the prison. </p>
                </div>
                {/* second card  */}
                <div className="card card-compact w-280 shadow-xl text-white text-justify mx-auto mt-6 ">
                    <img src="https://i.ibb.co/kB0Z6h5/carbon-delivery.png" className="mx-auto my-3" width={50} height={50} alt="" />
                    <h3 className="text-2xl text-center ">Fast Delivery</h3>
                    <p className="my-4">Secure Payment Services is a safer, faster, more secure way to pay online with, your payments sent directly to the prison. </p>
                </div>
                {/* third card  */}
                <div className="card card-compact w-280 shadow-xl text-white text-justify mx-auto mt-6 ">
                    <img src="https://i.ibb.co/n82QPrY/fluent-payment-48-filled.png" className="mx-auto my-3" width={50} height={50} alt="" />
                    <h3 className="text-2xl text-center ">Secure Payment</h3>
                    <p className="my-4">Secure Payment Services is a safer, faster, more secure way to pay online with, your payments sent directly to the prison. </p>
                </div>


            </div>



        </div>

    );
}
export default Choose;