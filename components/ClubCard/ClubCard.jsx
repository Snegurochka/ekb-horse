import Link from "next/link";
import Image from "next/image";

import styles from "./ClubCard.module.css";
import Card from "../UI/Card";

const ClubCard = (props) => {
    return (
        <Card>
            <Link href={props.href}>
                <a className={styles.cardLink}>
                        <div className={styles.cardImageWrapper}>
                            <Image
                                alt={props.name}
                                className={styles.cardImage}
                                src={props.imgUrl}
                                width={316}
                                height={180}
                            />
                        </div>
                        <div className={styles.container}>
                        <div className={styles.cardHeaderWrapper}>
                            <h2 className={styles.cardHeader}>{props.name}</h2>
                        </div>
                    </div>
                </a>
            </Link>
        </Card>

    )
}

export default ClubCard
