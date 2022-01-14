import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";

import styles from '../../styles/HorseClubs.module.css';
import { fetchHorseClubs } from '../../lib/horse-clubs';
//import horseClubs from '../../data/horse-clubs.json';


export default function HorseClub(props) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const { address, name, imgUrl } = props.horseClub;

    return (
        <div className={styles.container}>
            <Head>
                <title>Horse Club {name}</title>
                <meta name="description" content="{`Horse Club ${name}`}" />
            </Head>

            <main>
                <div className={styles.container}>
                    <div className={styles.col1}>
                        <div className={styles.backToHomeLink}>
                            <Link href="/">
                                <a>← Back to home</a>
                            </Link>
                        </div>
                        <div className={styles.nameWrapper}>
                            <h1 className={styles.name}>{name}</h1>
                        </div>
                        <Image
                            alt="banner image"
                            src={imgUrl}
                            width={600}
                            height={360}
                            className={styles.storeImg}
                            alt={name}
                        ></Image>
                    </div>
                    <div className={styles.col2}>
                        <div className={styles.iconWrapper}>
                            <Image
                                src="/static/icons/places.svg"
                                width="24"
                                height="24"
                                alt="places icon"
                            />
                            <p className={styles.text}>{address}</p>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export async function getStaticProps({ params }) {
    const horseClubs = await fetchHorseClubs();

    const horseClubInfo = horseClubs.find((club) => {
        return club.id.toString() === params.id; //dynamic id
    });
    return {
        props: {
            horseClub: horseClubInfo ? horseClubInfo : {},
        },
    };
}

export async function getStaticPaths() {
    const horseClubs = await fetchHorseClubs();

    const paths = horseClubs.map((club) => {
        return {
            params: {
                id: club.id.toString(),
            },
        };
    });
    return {
        paths,
        fallback: true,
    };
}
