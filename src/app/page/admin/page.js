import Footer from "@/app/components/Footer";
import Login from "@/app/components/Login";
import Menu from "@/app/components/Menu";

export default function admin() {
    return(
        <div>
            <Menu />
            <Login />
            <Footer />
        </div>
    );
}