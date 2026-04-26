import styles from "./navbar.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Script from "next/script";
import Image from "next/image";

const Navbar = () => {
  const { data }: any = useSession();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_brand} id="title"></div>
      <Script id="title-script" strategy="lazyOnload">
        {`document.getElementById('title').innerHTML = 'MyApp';`}
      </Script>

      <nav className={styles.navbar_nav} style={{ display: "flex", gap: "1rem" }}>
        <Link href="/" className={styles.navbar_nav_item}>Home</Link>
        <Link href="/produk" className={styles.navbar_nav_item}>Produk</Link>
        {data?.user?.role === "admin" && (
          <Link href="/admin" className={styles.navbar_nav_item}>Admin</Link>
        )}
      </nav>

      <div className={styles.navbar_right}>
        {data ? (
          <div className={styles.navbar_user}>
            <span>{data.user?.fullname}</span>
            {data?.user?.image && (
              <Image
                src={data.user.image}
                alt="Profile"
                width={40}
                height={40}
                className={styles.navbar_user_image}
              />
            )}
            <button className={styles.navbar_button_danger} onClick={() => signOut()}>
              Sign Out
            </button>
          </div>
        ) : (
          <button className={styles.navbar_button_primary} onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;