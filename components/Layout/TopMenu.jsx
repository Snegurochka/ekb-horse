import Link from "next/link";

import styles from "./TopMenu.module.css";


const TopMenu = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.content}>
                <Link href={'/'}><a className={styles.nav_link}><span>Home</span></a></Link>
                <Link href={'/events'}><a className={styles.nav_link}><span>Events</span></a></Link>
                <Link href={'/horse-clubs'}><a className={styles.nav_link}><span>Horse Clubs</span></a></Link>
            </div>
        </header>
    )
}

export default TopMenu
