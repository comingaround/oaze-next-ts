import styles from "./Footer.module.css"
import Image from "next/image";
import EmailForm from "../EmailForm/emailForm";

export default function Footer() {
    
    return(
        <footer className={styles.Footer}>
            <div>
                <Image 
                    src='/footer-logo.png'
                    width={1400}
                    height={450}
                    layout="reponsive"
                    alt="logo-footer"
                />
            </div>
            <div>
                <div>
                    <h1>Išskirtiniai <span>pasiūlymai</span> ir naujienos</h1>
                    <EmailForm />
                </div>
                <div>
                    <ul>
                        <li>INSTAGRAM</li>
                        <li>FACEBOOK</li>
                    </ul>
                    <ul>
                        <li>+370 612 34 567</li>
                        <a href="https://www.google.com/maps/place/Lvivo+g.+7,+09313+Vilnius/@54.6950955,25.2829173,17z/data=!3m1!4b1!4m6!3m5!1s0x46dd940366249d29:0xa7e904d0946ec662!8m2!3d54.6950955!4d25.2829173!16s%2Fg%2F11j35545kq?entry=ttu">
                            <li>LVIVO G. 7-13, Vilnius</li>
                        </a>
                        <li>INFO@OAZE.LT</li>
                    </ul>
                    <p>© 2023, OAZĖ</p>
                </div>
            </div>
        </footer>
    );
}