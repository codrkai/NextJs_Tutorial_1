import Head from 'next/head';
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="description" content="This is the about us page for Codr Kai tutorials" />
                <meta name="keywords" content="nextjs, coding, programming" />
                <meta name="robots" content="index, follow" />
            </Head>

            <h1>About Us</h1>
            <p className={styles.myStyle}>This is the about us page.</p>
        </>
    )
}