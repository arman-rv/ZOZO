import { Content } from "../../components/content/content";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header/header";

const Landing = () => {
    return ( 
        <div className="w-[clamp(100px,100%,1400px)] border">
            <Header />
            <Content />
            <Footer />
        </div>
     );
}

export default Landing;