import { Content } from "../../components/content/content";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header/header";

const Landing = () => {
    return ( 
        <div className="top-gradient w-[clamp(100px,100%,1500px)]  flex flex-col">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default Landing;