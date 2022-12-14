import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Products from '../components/Products'

export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
  const data = await res.json();

  if (data) {
    return {
      props: {data}
    }
  }
}

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Products productsData={data} />
      </main>
    </div>
  )
}
