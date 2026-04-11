import Head from 'next/head'
import styles from '../styles/home.module.css'


export default function Home() {
return (
<div className={styles.container}>
<Head>
<title>Zannur</title>
</Head>
<h1 className={styles.title}>Praktikum Next.js Pages Router</h1>
<p className={styles.desc}>Mahasiswa D4 Pengembangan Web</p>
</div>
)
}