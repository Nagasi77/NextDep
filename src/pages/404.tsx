import Image from "next/image"; 
import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <Image
        src="/page-not-found.png"
        width={400}
        height={200} alt={""}      />
      <h1>Halaman Tidak Ditemukan</h1>
    </div>
  );
};