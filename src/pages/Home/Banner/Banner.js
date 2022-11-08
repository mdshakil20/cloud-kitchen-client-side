import React from "react";

const Banner = () => {
    return (
        <div className="carousel w-full my-10">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="w-3/4 flex mx-auto" >
                    <div className="w-1/2 text-left self-center  ">
                        <h1 className="text-white text-xl">Are you hungry ?</h1>
                        <h1 className=" text-orange text-6xl font-bold">Don't Wait</h1>
                        <p className="text-white text-xl mb-3 mt-5">Let Start to order food now </p>
                        <button className="btn btn-outline rounded-full btn-warning">Order now</button>
                    </div>
                    <img src="https://i.postimg.cc/bw3V2rGG/unsplash-Zu-IDLSz3-XLg.png" width={400} height={380} className="mx-auto" />
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className="w-3/4 flex mx-auto" >
                    <div className="w-1/2 text-left self-center  ">
                        <h1 className="text-white text-xl">Need customize cake ?</h1>
                        <h1 className=" text-orange text-6xl font-bold">Don't Worry</h1>
                        <p className="text-white text-xl mb-3 mt-5">Let Start to order food now </p>
                        <button className="btn btn-outline rounded-full btn-warning">Order now</button>
                    </div>
                    <img src="https://i.postimg.cc/RV1D4X4L/unsplash-6-SHd7-Q-l1-UQ.png" width={400} height={380} className="mx-auto" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className="w-3/4 flex mx-auto" >
                    <div className="w-1/2 text-left self-center  ">
                        <h1 className="text-white text-xl">Are you hungry ?</h1>
                        <h1 className=" text-orange text-6xl font-bold">Don't Wait</h1>
                        <p className="text-white text-xl mb-3 mt-5">Let Start to order food now </p>
                        <button className="btn btn-outline rounded-full btn-warning">Order now</button>
                    </div>
                    <img src="https://i.postimg.cc/RZMbFK05/unsplash-H5g-NE2-RX8-Ac.png" width={400} height={380} className="mx-auto" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
}
export default Banner;