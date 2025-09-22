import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {style} from './home.module.css';

const Home = () => {
  const navigate = useNavigate();
    useEffect(() => {}, []);
    return ( 
        <div className={style}>
            <h1>Welcome to KitchenWhiz</h1>
            <button onClick={() => navigate('/about')}>Go to About Page</button>
        </div>
    );

};

export default Home;