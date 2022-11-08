import React from "react";
import Choose from "../Shared/Choose";
import Services from "../Shared/Services";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Services></Services>
            <Choose></Choose>
        </div>
    );
}
export default Home;