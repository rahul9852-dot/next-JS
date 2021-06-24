import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from "next/link"
export default function Home() {
  return (
    <>
    <Head>
      <title>NinjaList | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
    <h1 className={styles.title}>Home page</h1>
    <p className={styles.text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
    <Link href="./ninjas">
        <a className={styles.btn}>see All ninjas Listing here.</a>
    </Link>
    <Footer/>
    </div>
    </>
  )
}
