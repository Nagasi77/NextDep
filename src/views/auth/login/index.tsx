import Link from "next/link";
import style from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";


const Tampilanlogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter()
  const callbackUrl: any = query.callbackUrl || "/"
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email atau password salah");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Terjadi kesalahan sistem");
    }
  };

  return (
    <div className={style.login}>
      <h1 className={style.login_title}>Halaman login</h1>
      <div className={style.login_form}>
        {error && <p className={style.login_error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={style.login_form_item}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required className={style.login_form_item_input} />
          </div>
          <div className={style.login_form_item}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required className={style.login_form_item_input} />
          </div>
          <button type="submit" disabled={isLoading} className={style.login_form_item_button}>
            {isLoading ? "Loading..." : "login"}
          </button>
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl, redirect: false })}
            className={style.login_form_item_button_google}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign in with Google"}
          </button>
          <button
            type="button"
            onClick={() => signIn("github", { callbackUrl, redirect: false })}
            className={style.login_form_item_button_github}
          >
            Sign in with GitHub
          </button>
        </form>
        <p>Belum punya akun? <Link href="/auth/register">Ke Halaman Register</Link></p>
      </div>
    </div>
  );

};


export default Tampilanlogin;