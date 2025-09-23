import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import style from './home.module.css';
import corner from '/corner.png';
import logo from '/logo.png';

const Home = () => {
  const navigate = useNavigate();
    useEffect(() => {}, []);
    return ( 
        <div className={style.background}>
            <div className = {style.top}>
            <div className={style.bar}>
                <img src={logo} alt="Logo" className={style.logo} onClick={() => navigate('/')} />
                <div className={style.textbar}>Chào mừng, Uyên Thy</div>
                <div className={style.avatarcontainer}>
                    <img src={corner} alt="Avatar" className={style.avatar} />
                </div>
            </div>
            <img src={corner} alt="Corner Decoration" className={style.imgcorner} />
            <div className={style.imgcontainer}>
                <img src={corner} alt="Corner Decoration" className={style.image} />
            </div>
            <div className={style.randomMeals}>
                <div className={style.titleRandomMeals}>Trưa nay ăn gì?</div>
                <div className={style.descriptionRandomMeals}>is a popular Vietnamese noodle soup originating from the city of Huế in central Vietnam. This dish features a rich and aromatic broth made from beef bones and...</div>
            </div>
            </div>
        </div>
    );

};

export default Home;