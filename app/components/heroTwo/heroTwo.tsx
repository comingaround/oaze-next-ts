import styles from './heroTwo.module.css'
import Image from 'next/image'; 

export default function HeroTwo() {
    return(
        <>
            <div className={styles.HeroTwo}>
                <div>
                    <Image 
                        src='/heroTwo/hero_two3.png'
                        layout='fill'
                        alt='hero-two'
                    />
                    <section>
                        <h1>Sužadėtuvėms, <br /> vestuvėms</h1>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2468 12.6636L21.58 12.3186L21.2468 11.9734L12.5801 3L11.9134 3.69027L19.7753 11.8305H3V12.8067H19.7753L11.9134 20.9468L12.5801 21.6371L21.2468 12.6636Z" fill="white"/>
                            </svg>
                            <p>Žiūrėti asortimentą</p>
                        </a>
                    </section>
                </div>
                <div>
                    <Image
                        src='/heroTwo/hero_two4.png'
                        layout='fill'
                        alt='hero-two'
                     />
                     <section>
                        <h1>Papuošalai <br /> kasdienai</h1>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2468 12.6636L21.58 12.3186L21.2468 11.9734L12.5801 3L11.9134 3.69027L19.7753 11.8305H3V12.8067H19.7753L11.9134 20.9468L12.5801 21.6371L21.2468 12.6636Z" fill="white"/>
                            </svg>
                            <p>Žiūrėti asortimentą</p>
                        </a>
                     </section>
                </div>
            </div>
        </>
    );
}