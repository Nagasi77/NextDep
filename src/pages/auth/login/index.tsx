import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./login.module.css";

const HalamanLogin = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/produk");
  };

  return (
    <div className={styles.wrapper}>
      <h1 style={{ color: "Blue",borderRadius: "0px",padding: "0px",}}>Halaman Login</h1>
      <button onClick={handleLogin} className={styles.button}>
        Login
      </button>
      <br />
      <Link href="/auth/register">Ke Halaman Register</Link>
    </div>
  );
};

export default HalamanLogin;