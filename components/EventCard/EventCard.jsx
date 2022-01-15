import styles from "./EventCard.module.css";
import Image from "next/image";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import DateIcon from "../Layout/icons/date-icon";
import AddressIcon from "../Layout/icons/address-icon";
import ArrowRightIcon from "../Layout/icons/arrow-right-icon";


const EventCard = (props) => {
    const { title, imgUrl, id, date, description, address } = props;
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
                        <div className={styles.date}>
                            <DateIcon /><time>{date}</time>
                        </div>
                        <p>{description}</p>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon />
                        <address>{address}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={`/events/${id}`}><span>Explore Event</span>
                        <span className={styles.icon}><ArrowRightIcon /></span></Button>
                </div>
            </div>
        </Card>
    )
}

export default EventCard
