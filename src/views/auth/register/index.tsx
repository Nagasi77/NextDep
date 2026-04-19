import Link from "next/link";
import style from "./register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const TampilanRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      email: formData.get("email") as string,
      fullname: formData.get("Fullname") as string,
      password: formData.get("Password") as string,
    };

    // Validasi Tugas Individu: Password minimal 6 karakter [cite: 2358]
    if (data.password.length < 6) {
      setError("Password minimal 6 karakter");
      setIsLoading(false);
      return;
    }

    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      form.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      const result = await response.json();
      setError(response.status === 400 ? "Email already exists" : result.message);
    }
  };

  return (
    <div className={style.register}>
      <h1 className={style.register_title}>Halaman Register</h1>
      <div className={style.register_form}>
        {error && <p className={style.register_error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={style.register_form_item}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required className={style.register_form_item_input} />
          </div>
          <div className={style.register_form_item}>
            <label htmlFor="Fullname">Fullname</label>
            <input type="text" id="Fullname" name="Fullname" required className={style.register_form_item_input} />
          </div>
          <div className={style.register_form_item}>
            <label htmlFor="Password">Password</label>
            <input type="password" id="Password" name="Password" required className={style.register_form_item_input} />
          </div>
          <button type="submit" disabled={isLoading} className={style.register_form_item_button}>
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
        <p>Sudah punya akun? <Link href="/auth/login">Ke Halaman Login</Link></p>
      </div>
    </div>
  );
};

export default TampilanRegister;