import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from './NavbarMenu.module.css'
import HamButton from './HamButton'
import {ReactComponent as Logo} from '../../../../images/brand/sss-logo-1080.svg'
import SmallLogo from '../../../../images/brand/sss-logo-512.png'
import Backdrop from '../../../Backdrop/Backdrop'
import { Context } from '../../../../context/Context'

function NavbarMenu(props) {
    const {user, dispatch} = useContext(Context)
    const [isOpenMenu, setOpenMenu] = useState(false);
    const openMenu = () => {
        setOpenMenu(!isOpenMenu);
    }
    const openNavMenu = (isOpenMenu ? styles.openNavbarMenu : '')

    const [isOpenSearch, setOpenSearch] = useState(false);
    const openSearchBar = () =>{
        setOpenSearch(!isOpenSearch);
    }
    let history = useHistory()
    const handleLogout = () => {
        dispatch({type:"LOGOUT"})
        history.push('/login')
    }

    return (

        <div className={styles.innercontainer}>
            <nav className={styles.mobileNavbar}>
                {/* <HamButton onOpenMenu={openMenu}/> */}
                <HamButton handleToggle={openMenu} state={isOpenMenu}/>
                <Link to="/">
                    <Logo className={styles.logo}/>
                </Link>
            </nav>
            <div className={`${styles.desktopNavbar} ${isOpenMenu?openNavMenu:''}`}>
                <Link to="/" className={styles.navbarBrand} >
                    <img alt="SangSharesSomething" style={{height:45}} src='/images/brand/sssomething-logo-1.png'></img>
                </Link>
                <ul className={styles.navbarMenu}>
                    <li className={`${styles.navbarMenuItem} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`}>
                        <Link to="/photography" className={styles.firstItem}>
                            <img alt='' className={styles.logo} src={SmallLogo}/>Photography</Link>
                        <ul className={styles.subMenu} role="menu">
                            <li>
                                <Link to="/explore">Explore</Link>
                            </li>
                            <li>
                                <Link to="/photographers">Photographers</Link>
                            </li>
                            <li>
                                <Link to="/challenge">Challenge</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`${styles.navbarMenuItem} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`}>
                        <Link to="/book">Book</Link>
                    </li>
                    <li className={`${styles.navbarMenuItem} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`}>
                        <Link to="/music">Music</Link>
                    </li>
                    <li className={`${styles.navbarMenuItem} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`}>
                        <Link to="/life">Life</Link>
                    </li>
                    <li className={`${styles.navbarMenuItem} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`}>
                        <Link to="/portfolio">Through My Lens</Link>
                    </li>
                </ul>
            </div>
            <div className={`${styles.social} ${isOpenSearch?styles.active:null}`}>
                <div className={`${styles.socialSearch} ${isOpenSearch?styles.active:null}`}>
                    <div className={`${styles.searchIcon} ${styles.socialLogo}`} onClick={openSearchBar}><i className="fas fa-search fa-2x"></i></div>
                    <div className={styles.searchInput} role="search">
                        <input type="search" className={`${styles.searchBar} ${isOpenSearch?styles.active:null} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`} name="q" placeholder="Search something"></input>
                    </div>
                    
                </div>
                <a href="https://www.facebook.com/sang.tp.11296" rel="noopener noreferrer" className={`${styles.fbLogo} ${styles.socialLogo} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`} target="_blank">
                    <i className="fab fa-facebook-square fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/nguoidiban.mua/" rel="noopener noreferrer" className={`${styles.igLogo} ${styles.socialLogo} ${props.whiteHeader === 'true' ? styles.whiteHeader:''}`} target="_blank">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
                <div className={styles.account}>
                    <Link className={`${styles.avatar} ${isOpenSearch?styles.active:null}`} to='/about'></Link>
                    {user ? <ul className={styles.popup}>
                                <li className={styles.write}><Link to='/write'>Write Post</Link></li>
                                <li className={styles.logOut} onClick={handleLogout}>Log Out</li>
                            </ul> : null
                    }
                </div>
                
            </div>
            {isOpenMenu && <Backdrop onClose={openMenu} />}
        </div>
    )
}

export default NavbarMenu
