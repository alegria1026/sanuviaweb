import Footer from "@/app/components/Footer";
import Menu from "@/app/components/Menu";
import MissionVision from "@/app/components/MissionVision";
import UsIntroduction from "@/app/components/UsIntroduction";

export default function us () {
    return (
        <div>
            <Menu />
            <UsIntroduction />
            <MissionVision />
            <Footer />
        </div>
    );
}