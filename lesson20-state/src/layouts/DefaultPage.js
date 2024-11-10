import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const DefaultPage = (props) => {
    return (
        <>
            <Navbar />
            <Header />
            {props.children}
            <Footer />
        </>
    );
};

export default DefaultPage;