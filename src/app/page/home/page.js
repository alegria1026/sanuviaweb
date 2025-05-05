import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Menu from "@/app/components/Menu";
import Plans from "@/app/components/Plans";
import Testimonials from "@/app/components/Testimonials";
import UsSummary from "@/app/components/UsSummary";

export default function Inicio() {
    return (
        <div>
            <Menu />
            <Header />
            <UsSummary />
            <Plans />
            <Testimonials />
            <Footer />
        </div>

    );
}