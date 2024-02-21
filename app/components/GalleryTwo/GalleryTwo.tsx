import styles from './GalleryTwo.module.css'
import Image from 'next/image'

export default function GalleryTwo() {
    return(
        <div className={styles.GalleryTwo}>
            <div>
                <h1>Nauja Kolekcija</h1>
                <p>Kruopštus vietinės kilmės medžiagų pasirinkimas ir itin preciziškas mūsų amatininkų gamybos procesas. Gamindami dirbinius tik pagal užsakymą, užtikriname tvariausią gamybos praktiką. Siūlome kruopščiai pagamintus dirbinius.</p>
            </div>
            <div className={styles.GalleryImg}>
                <section>
                    <div>
                        <Image 
                            src='/GalleryTwo/gallery_two1.png'
                            layout='fill'
                            quality={100}
                            alt='g-2-1'
                        />
                    </div>
                    <div>
                        <h1>Perlo lašo auskarai</h1>
                        <h3>Nuo 1.800 €</h3>
                        <p>10K auksas, <br /> Kultivuoti gėlo vandens perlai</p>
                    </div>
                </section>
                <section>
                    <div>
                        <Image 
                            src='/GalleryTwo/gallery_two2.png'
                            quality={100}
                            layout='fill'
                            alt='g-2-2'
                        />
                    </div>
                    <div>
                        <h1>Perlo lašo auskarai</h1>
                        <h3>Nuo 1.800 €</h3>
                        <p>10K auksas, <br /> Kultivuoti gėlo vandens perlai</p>
                    </div>
                </section>
                <section>
                    <div>
                        <Image 
                            src='/GalleryTwo/gallery_two3.png'
                            quality={100}
                            layout='fill'
                            alt='g-2-3'
                        />
                    </div>
                    <div>
                        <h1>Perlo lašo auskarai</h1>
                        <h3>Nuo 1.800 €</h3>
                        <p>10K auksas, <br /> Kultivuoti gėlo vandens perlai</p>
                    </div>
                </section>
            </div>
        </div>
    );
}