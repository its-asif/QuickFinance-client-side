import { Link } from "react-router-dom";
import img2 from "/bannerImg2.png";
import dollarIcon from "/dollarIcon.png";
import { FaArrowRight } from "react-icons/fa6";
const Banner2 = () => {
    return (
        <div className="overflow-x-hidden">
            <div className="hero min-h-screen  my-10">
                <div className="hero-content flex-col justify-between lg:flex-row mx-10">
                    <img data-aos="fade-up-right" data-aos-duration="2000" src={img2} className="w-full md:w-3/4 lg:w-1/2 " />
                    <div data-aos="fade-up-left" data-aos-duration="2000">


                        <h1 className="text-4xl md:text-6xl text-black lg:text-5xl font-extrabold">
                            Your financial security  <br />
                            <span className="text-[#399b53] flex items-center gap-2">is our priority
                                <img src={dollarIcon} alt="dollarIcon" className="w-16 rotate-[25deg] hidden lg:block lg:relative lg:top-2" />
                            </span>
                        </h1>


                        <p className="py-6 md:text-lg font-extrabold text-slate-600 text-justify">
                            Step into a realm of financial confidence – where your prosperity is fortified with precision. We make safeguarding your financial future our mission, ensuring your journey is not just secure but thriving.</p>
                        <div>
                            <Link to={'dashboard'}>
                                <button className="sharedBtn">
                                <span className="mr-1">Get Started</span><FaArrowRight size={15} />
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;