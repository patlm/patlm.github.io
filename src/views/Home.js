import React from 'react';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';

const Home = (props) => {
    return (
        <div>
            <Profile />
            <Navbar current="home"/>
        </div>
    );
}

export default Home;