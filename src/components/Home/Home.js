import React from 'react';
import './main.css'
import Textile from './Textile/Textile';
import ArrayColors from './ArrayColors/ArrayColors';
import UserMenu from '../UserMenu/UserMenu';
import Works from './Works/Works';
import Stocks from './Stocks/Stocks';
import Articles from './Articles/Articles';
import New from './New/New';

const Home = () => {
    return (
        <main className="main">
            <Textile />
            <ArrayColors />
            <UserMenu />
            <Works />
            <Stocks />
            <Articles />
            <New />
        </main>
    );
};

export default Home;