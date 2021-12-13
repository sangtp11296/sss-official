import React, {useState, useEffect, useCallback} from 'react'
import styles from './Header.module.css'
import MainNavbar from './MainNavigation/MainNavbar'

export default function Header(props) {
    
    const[white, setWhite] = useState(false);
    const[hide, setHide] = useState(false);
    const[y,setY] = useState(window.scrollY);
    
    const scrollDetect = useCallback(
        (e) => {
            const window = e.currentTarget;
            // Này là làm trắng header khi kéo xuống
            if (window.scrollY >= 100){
                setWhite(true);
            } else {
                setWhite(false);
            }
            //Ẩn khi on top
            if (y === 0){
                setHide(true);
            }
            // Này là làm ẩn header khi kéo xuống khoảng giá trị 1200 và hiện lại khi kéo lên
            if (y > window.scrollY) {
                setHide(false);
            } else if (y < window.scrollY &&  window.scrollY > 1200) {
                setHide(true);
            }
            else if (y === window.scrollY){}
            setY(window.scrollY);
        },
        [y],
    );
    
    useEffect(() =>{
        setY(window.scrollY);
        window.addEventListener('scroll', scrollDetect);
        return () => {
            window.removeEventListener('scroll', scrollDetect);
        };
    }, [scrollDetect]);
    
    

    return (
        <header className={`${styles.transparentNavbar} ${white || props.whiteHeader ? styles.whiteNavbar : ''} ${hide ? styles.hide : ''}`}>
            <MainNavbar whiteHeader={white || props.whiteHeader ? "true":''}/>
        </header>
    )
}
