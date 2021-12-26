import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";

import styles from '../../styles/HorseClubs.module.css';
import horseClubs from '../../data/horse-clubs.json';


export default function HorseClubs(props) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    const id = router.query.id;
    const { address, name, neighbourhood, imgUrl } = props.horseClub;

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
                            src={
                                imgUrl ||
                                "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                            }
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
