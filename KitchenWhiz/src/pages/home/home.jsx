import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import style from './home.module.css';
import corner from '/corner.png';
import logo from '/logo.png';
import styleBar from '../../components/bar.module.css';

const Home = () => {
  const navigate = useNavigate();
    useEffect(() => {}, []);
    return ( 
        <div className={style.background}>
            <div className = {styleBar.top}>
            <div className={styleBar.bar}>
                <img src={logo} alt="Logo" className={styleBar.logo} onClick={() => navigate('/')} />
                <div className={styleBar.textbar}>Chào mừng, Uyên Thy</div>
                <div className={styleBar.avatarcontainer}>
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
            
            <input 
                type="text" 
                className={style.searchBar} 
                placeholder="Tìm kiếm món ăn, công thức..." 
                />
            </div>

        </div>
    );

};

export default Home;