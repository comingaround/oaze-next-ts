import styles from './HeroThree.module.css'
import Image from 'next/image';

export default function HeroThree() {
    return(
        <div className={styles.HeroThree}>
            <div>
                <Image 
                    src='/heroThree/hero_one1.png'
                    width={528}
                    height={704}
                    quality={100}
                    alt='hero_three1'
                />
            </div>
            <section>
                <div>
                    <Image 
                        src='/heroThree/hero_one2.png'
                        width={268}
                        height={335}
                        quality={100}
                        alt='hero_three2'
                    />
                </div>
                <div>
                    <p>Kruopštus vietinės kilmės medžiagų pasirinkimas ir itin preciziškas mūsų amatininkų gamybos procesas. Gamindami dirbinius tik pagal preciziškas mūsų amatininkų gamybos užsakymą, užtikriname tvariausią gamybos praktiką. Siūlome kruopščiai pagamintus dirbinius visiems prieinamomis kainomis.</p>
                    <a href="">MŪSŲ FILOSOFIJA</a>
                </div>
            </section>
        </div>
    );
}