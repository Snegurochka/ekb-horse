import styles from '../styles/Banner.module.css';

const Banner = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>Equestrian</span>
                <span className={styles.title2}>portal</span>
            </h1>
            <p className={styles.subTitle}>Stables and Horse Clubs in Yekaterinburg</p>
            <div className={styles.buttonWrapper}>
                <button className={styles.button} onClick={props.clickHandler}>
                    {props.btnText}
                </button>
            </div>
        </div>
    )
}

export default Banner
