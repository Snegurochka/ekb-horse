import styles from "./EventCard.module.css";
import Image from "next/image";
import Link from "next/link";

import Card from "../UI/Card/Card";


const EventCard = (props) => {
    const { title, imgUrl } = props;
    return (
        <Card>
            <div className={styles.item}>
            <Image
                alt={title}
                src={imgUrl}
                width={260}
                height={160}
            />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}><time>Date</time></div>
                </div>
                <div className={styles.address}>
                    <address>Address</address>
                </div>
            </div>
            <div>
                <Link href='/'>Explore Event</Link>
            </div>
            </div>
        </Card>
    )
}

export default EventCard
