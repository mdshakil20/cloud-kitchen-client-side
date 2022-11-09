import React from "react";
import Rate from "../Rate/Rate";
import Choose from "../Shared/Choose";
import Services from "../Shared/Services";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Services></Services>
            <Choose></Choose>
            <Rate></Rate>
        </div>
    );
}
export default Home;