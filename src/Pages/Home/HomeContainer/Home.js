import React from 'react';
import Header from '../../Shares/header/Header';
import Footer from '../../Shares/footer/Footer';
import Banner from '../Banner/Banner';
import Reviews from '../Review/Reviews';
import Services from '../Services/Services';
import Catagories from '../Catagories/Catagories';


const Home = () => {
    return (
        <div>
           <Header className="mt-0"></Header>
           <Banner></Banner>
           <Catagories></Catagories>
           <Services></Services>
           <Reviews></Reviews>
           <Footer></Footer>
        </div>
    );
};

export default Home;