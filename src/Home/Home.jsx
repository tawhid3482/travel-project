import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import Nav from "./Nav";

const Home = () => {
    return (
        <div className="dark:text-gray-100 dark:bg-slate-800 duration-100">
            <Banner></Banner>
           {/* <Banner2></Banner2> */}
            <Services></Services>
            {/* <Nav></Nav> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;