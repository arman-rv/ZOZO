import { Content } from "../../components/content/content";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

const Landing = () => {
    return ( 
        <div className="w-[clamp(100px,100%,1400px)] border-[2px] border-red-500">
            <Header />
            <Content />
            <Footer />
        </div>
     );
}

export default Landing;