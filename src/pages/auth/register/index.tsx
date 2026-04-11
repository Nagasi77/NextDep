import styles from "./Register.module.css";
import Link from "next/link";

const TampilanRegister = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Halaman Register</h1>
      <button>Daftar</button>
      <Link href="/auth/login">Sudah punya akun? Login</Link>
    </div>
  );
};
export default TampilanRegister;