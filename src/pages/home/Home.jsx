import Footer from '../shared/footer/Footer';
import UnderMaintenance from '../shared/underMaintenance/UnderMaintenance';
import Banner1 from './banner/Banner1';
import Banner2 from './banner/Banner2';
import FaqSection from './faqSection/FaqSection';
const Home = () => {
    return (
        <div >
            {/* <UnderMaintenance /> */}

            <Banner1 />

            <Banner2 />

            <FaqSection />

            <Footer />



        </div>
    );
};

export default Home;