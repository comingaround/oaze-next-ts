import styles from './hero.module.css';
import Image from 'next/image';

export default function Hero() {
    return(
        <>
            <div className={styles.hero}>
                <div>
                    <h1>Auksinės akimirkos, <span>įamžintos</span> papuošaluose.</h1>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2468 12.6636L21.58 12.3186L21.2468 11.9734L12.5801 3L11.9134 3.69027L19.7753 11.8305H3V12.8067H19.7753L11.9134 20.9468L12.5801 21.6371L21.2468 12.6636Z" fill="#010100"/>
                        </svg>
                        <p>Žiūrėti asortimentą</p>
                    </a>
                </div>
                <div>
                    <div className={styles.heroImg}>
                        <Image 
                            src='/cover.png'
                            layout="fill"
                            objectFit="fill"
                            quality={100}
                            alt='cover'
                        />
                    </div>
                </div>
            </div>
            <div className={styles.heroAfter}>
                <p>
                Kruopštus vietinės kilmės medžiagų pasirinkimas ir itin preciziškas mūsų amatininkų gamybos procesas. Gamindami dirbinius tik pagal užsakymą, užtikriname tvariausią gamybos praktiką. Siūlome kruopščiai pagamintus dirbinius visiems prieinamomis kainomis.
                </p>
                <div>
                    <a href="">Daugiau apie mus</a>
                </div>
            </div>
        </>
    );
}