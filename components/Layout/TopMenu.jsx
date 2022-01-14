import Link from "next/link";

import styles from "../../styles/TopMenu.module.css";


const TopMenu = () => {
    return (
        <div className={styles.wrapper}>
            <Link href={'/'}><a className={styles.nav_link}><span>Home</span></a></Link>
            <Link href={'/events'}><a className={styles.nav_link}><span>Events</span></a></Link>
            <Link href={'/horse-clubs'}><a className={styles.nav_link}><span>Horse Clubs</span></a></Link>
        </div>
    )
}

export default TopMenu
