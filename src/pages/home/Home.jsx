import Footer from '../shared/footer/Footer';
import Navbar from '../shared/navbar/Navbar';
import UnderMaintenance from '../shared/underMaintenance/UnderMaintenance';
import Banner1 from './banner/Banner1';
import Banner2 from './banner/Banner2';
import FaqSection from './faqSection/FaqSection';
const Home = () => {
    return (
        <div >
            {/* <UnderMaintenance /> */}

            <Navbar />

            <Banner1 />

            <Banner2 />

            <FaqSection />

            <Footer />



        </div>
    );
};

export default Home;