import Navbar from "../navbar";
import Footer from "../Footer"; 
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useRouter();

  return (
    // Gunakan Flexbox untuk menarik Footer ke bawah
    <div className={roboto.className} style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {!disableNavbar.includes(pathname) && <Navbar />}
      
      <main style={{ flex: 1, padding: "20px" }}>
        {children}
      </main>
      
      {!disableNavbar.includes(pathname) && <Footer />}
    </div>
  );
};

export default AppShell;