import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>This is home page...</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/income">Income</Link>
                    </li>
                    <li>
                        <Link to="/expenses">Expenses</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;