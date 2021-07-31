import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <>
    <Head><title>My gallery</title></Head>
    <div className={styles.container}>
      <div className={styles.header}>
        <Image 
        className={styles.profile}
        src='/profilePhoto.png'
        width={156}
        height={156}
        alt={'profile'}
        />
        <span className={styles.heroText}>Rodney Cotton</span>
        <span className={styles.description}>Helsinki, Finland</span>
      </div>
      <div className={styles.stats}>
        <div className={styles.statsItem}>
          <span className={styles.statsMain}>100</span>
          <br />
          <span className={styles.statsDescription}>Posts</span>
        </div>
        <div className={styles.statsItem}>
          <span className={styles.statsMain}>2,242</span>
          <br />
          <span className={styles.statsDescription}>Followers</span>
        </div>
        <div className={styles.statsItem}>
          <span className={styles.statsMain}>1,432</span>
          <br />
          <span className={styles.statsDescription}>Following</span>
        </div>
      </div>
      <div className={styles.gridWrapper}>
      <div className={styles.image}>
      <Image
      className={styles.gridImage}
        src='/photo1.png'
        width={300}
        height={300}
        alt={'profile'}
        />
      </div>
      <div className={styles.img}><Image
      className={styles.gridImage}
        src='/photo2.png'
        width={630}
        height={300}
        alt={'profile'}
        /></div>
      <div className={styles.simg}><Image
      className={styles.gridImage}
        src='/photo3.png'
        width={630}
        height={300}
        alt={'profile'}
        /></div>
      <div className={styles.ig}><Image
      className={styles.gridImage}
        src='/photo_4.png'
        width={300}
        height={640}
        alt={'profile'}
        /></div>
      <div className={styles.dg}><Image
      className={styles.gridImage}
        src='/photo6.png'
        width={300}
        height={300}
        alt={'profile'}
        /></div>
      <div className={styles.mg}><Image
      className={styles.gridImage}
        src='/photo5.png'
        width={300}
        height={300}
        alt={'profile'}
        /></div>
      </div>
      <br />
      <br />
      <Footer>made by DDK</Footer>
    </div>
    </>
  )
}
