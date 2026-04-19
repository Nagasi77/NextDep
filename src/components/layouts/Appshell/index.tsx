import Navbar from "../navbar";
import { useRouter } from "next/router";

type AppshellProps = {
    children: React.ReactNode;
};

const Appshell = (props: AppshellProps) => {
    const { children } = props;
    const { pathname } = useRouter(); 

    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar />}
            
            {children}
            <div>footer</div>
        </main>
    );
}
const disableNavbar = ["/auth/login", "/auth/register", "/404"];

export default Appshell;
