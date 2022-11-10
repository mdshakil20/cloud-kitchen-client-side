import React from "react";
import useTitle from "../../hooks/useTitle";
import Rate from "../Rate/Rate";
import Choose from "../Shared/Choose";
import Services from "../Shared/Services";
import Banner from "./Banner/Banner";

const Home = () => {
    useTitle('Home')
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