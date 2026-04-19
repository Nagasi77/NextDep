import styles from "./navbar.module.css"
import { signIn, signOut, useSession } from "next-auth/react"

const Navbar = () => {
  const { data }: any = useSession()
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_brand}>MyApp</div>
      <div className={styles.navbar_right}>
        {data ? (
          <>
            <div className={styles.navbar_user}>
              <span>Welcome, {data.user.fullname}</span>
              {data.user.image && (
                <img
                  src={data.user.image}
                  alt={data.user.fullname}
                  className={styles.navbar_user_image}
                />
              )}
            </div>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <button onClick={() => signIn()}>Sign In</button>
        )}
      </div>
    </div>
  );
}

export default Navbar