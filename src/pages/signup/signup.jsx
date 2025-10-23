import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import style from '../login/login.module.css';
import logo from '/logo.png';

const Signup = () => {
    const navigate = useNavigate();
    useEffect(() => {}, []);
    return ( 
        <div className={style.background}>
            <div className={style.left}>
                <img src={logo} alt="KitchenWhiz Logo" className={style.logo} />
                <div className={style.textpreview}>
                    <p>Không cần phải là MasterChef, chỉ cần KitchenWhiz.</p>
                    <p>Bạn chỉ việc chọn nguyên liệu, còn lại để KitchenWhiz lo.</p>
                    <p>Dù bạn ‘gà mờ’ trong bếp hay đam mê nấu nướng,</p>
                    <p>KitchenWhiz sẽ biến mỗi bữa ăn thành một ‘show diễn’ cực chill!</p>
                </div>
                <div className={style.buttonContainer}>
                    <button className={style.button} onClick={() => navigate('/login')}>Đăng nhập</button>
                    <button className={style.button}>Tìm hiểu</button>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.container}>
                    <div className={style.title}>ĐĂNG KÝ</div>
                   <input
                   type="text"
                   placeholder="Email"
                   className={style.inputField} /> 
                   <input
                   type="text"
                   placeholder="Username"
                   className={style.inputField} />
                   <input
                   type="password"
                   placeholder="Password"
                   className={style.inputField} />
                    <input
                   type="password"
                   placeholder="Confirm Password"
                   className={style.inputField} />

                   <div  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button className={style.button}>Đăng ký</button>
                   </div>
                   
                </div>
            </div>
         </div>
    );
};

export default Signup;