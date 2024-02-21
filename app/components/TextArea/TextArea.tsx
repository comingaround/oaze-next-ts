import styles from "./Text.Area.module.css"

export default function TextArea() {
    return(
        <div style={{position: 'relative'}}>
            <div className={styles.TextArea}>
                <p>Ne tik elegancija - mūsų jūvelyrikos dirbiniai įkūnija <span>ekologiškesnės</span> ir <span>tvaresnės</span> ateities pažadą.</p>
            </div>
        </div>
    );
}