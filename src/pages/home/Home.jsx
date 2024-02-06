// import Footer from '../shared/footer/Footer';
// import Navbar from '../shared/navbar/Navbar';
// import UnderMaintenance from '../shared/underMaintenance/UnderMaintenance';

import CustomerChat from '../../Components/CustomerChat/CustomerChat';
import Banner1 from './banner/Banner1';
import Banner2 from './banner/Banner2';
import FaqSection from './faqSection/FaqSection';
import Services from './services/Services';
const Home = () => {
    return (
        <div className='overflow-hidden'>
            {/* <UnderMaintenance /> */}

            {/* <Navbar /> */}

            <Banner1 />

            <Banner2 />
            <Services></Services>

            <FaqSection />
            <CustomerChat />
            {/* <Footer /> */}



        </div>
    );
};

export default Home;