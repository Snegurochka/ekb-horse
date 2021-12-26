import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Card from '../components/Card';
import { fetchHorseClubs } from '../lib/horse-clubs';

import styles from '../styles/Home.module.css';


export default function Home(props) {

  const btnClickHandler = () => { };

  return (
    <div className={styles.container}>
      <Head>
        <title>Equestrian portal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner clickHandler={btnClickHandler} btnText="Horse Clubs nearby" />
        <div className={styles.heroImage}>
          <Image src="/static/hero-horse-home.png" width={400} height={463} />
        </div>

        {props.horseClubs.length > 0 && (
          <div className={styles.sectionWrapper}>
            <h2 className={styles.heading2}>Horse Clubs near me</h2>
            <div className={styles.cardLayout}>
              {props.horseClubs.map((club) => <Card
                key={club.id}
                name={club.name}
                imgUrl={club.imgUrl}
                href={`/horse-clubs/${club.id}`} />)}
            </div>
          </div>
        )}
      </main>

    </div>
  )
}

export async function getStaticProps(context) {
  const horseClubs = await fetchHorseClubs();

  return {
    props: {
      horseClubs,
    },
  };
}
