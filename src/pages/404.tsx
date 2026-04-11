import styles from "../styles/404.module.scss"
import Link from "next/link"

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <img src="/page-not-found.jpg" alt="404" className={styles.error_image} />
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang Kamu cari tidak ada atau telah dipindahkan.</p>
      
      <Link href="/">
        <button className={styles.button}>Kembali ke Home</button>
      </Link>
    </div>
  )
}

export default Custom404