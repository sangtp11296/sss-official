import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './About.module.css'
import emailjs from 'emailjs-com'

export default function About(props) {
    props.setWhiteHeaderCallback(true)
    const [sent, setSent] = useState();
    const sendEmail = (e) => {
        setSent(false)
        e.preventDefault();

        emailjs.sendForm('service_sqxtjyi', 'template_3nmt5jp', e.target, 'user_quS7xCuY5RVkInJoeKVE3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            setSent(true)
    }
    return (
        <div className={styles.about}>
            <div className={styles.navbar}>
                <Link to="/" className={styles.navbarBrand} >
                    <img alt="SangSharesSomething" style={{height:150}} src='/images/brand/sss-logo-1080.png'></img>
                </Link>
                <ul className={styles.navbarMenu}>
                    <li className={`${styles.navbarMenuItem}`}>
                        <Link to="/photography" className={styles.firstItem}>Photography</Link>
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
                    <li className={`${styles.navbarMenuItem}`}>
                        <Link to="/book">Book</Link>
                    </li>
                    <li className={`${styles.navbarMenuItem}`}>
                        <Link to="/music">Music</Link>
                    </li>
                    <li className={`${styles.navbarMenuItem}`}>
                        <Link to="/life">Life</Link>
                    </li>
                    <li className={`${styles.navbarMenuItem}`}>
                        <Link to="/portfolio">Through My Lens</Link>
                    </li>
                </ul>
                <div className={`${styles.social}`}>
                    <a href="https://www.facebook.com/sang.tp.11296" rel="noopener noreferrer" className={`${styles.fbLogo} ${styles.socialLogo}`} target="_blank">
                        <i className="fab fa-facebook-square fa-2x"></i>
                    </a>
                    <a href="https://www.instagram.com/nguoidiban.mua/" rel="noopener noreferrer" className={`${styles.igLogo} ${styles.socialLogo}`} target="_blank">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.photoCover}>
                    <img className={styles.photo} alt='' src='/images/avatar/sss-avatar.jpg' style={{width:500,height:'auto'}}/>
                </div>
                <div className={styles.infoWrapper}>
                    <div className={styles.infoBlock}>
                        <h5>About Me</h5>
                        <h2>HI, I’M GRAG BARETT</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</p>
                        <blockquote>Typography is the work of typesetters, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists.</blockquote>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta suntexpli cabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.</p>
                        <div className={`${styles.social}`}>
                            <a href="https://www.facebook.com/sang.tp.11296" rel="noopener noreferrer" className={`${styles.fbLogo} ${styles.socialLogo}`} target="_blank">
                                <i className="fab fa-facebook-square fa-2x"></i>
                            </a>
                            <a href="https://www.instagram.com/nguoidiban.mua/" rel="noopener noreferrer" className={`${styles.igLogo} ${styles.socialLogo}`} target="_blank">
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                        </div>
                    </div>
                    <div className={styles.infoBlock}>
                        <h5>Contact Me</h5>
                        <h2>Get in touch</h2>
                        <p>This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market. Sed ut perspiciatis unde omnis iste.</p>
                        <form className={styles.form} onSubmit={sendEmail}>
                            <input className={styles.textField} placeholder='Your Name...' name='senderName'></input>
                            <input className={styles.textField} placeholder='Your Mail...' name='senderEmail'></input>
                            <input className={styles.textField} placeholder='Subject...' name='subject'></input>
                            <textarea className={styles.textField} placeholder='Message...' name='message'></textarea>
                            <button className={styles.btn} type='submit'>Send</button>
                            {sent? <p>Email is sent successfully! Thank you!</p>:null}
                        </form>
                    </div>
                </div>
                
            </div>
            <div className={styles.footer}>
                <Link to='/'>
                    <img alt='' src='/images/brand/sssomething-logo-1.png' style={{height:50}}></img>
                </Link>
            </div>
        </div>
    )
}
