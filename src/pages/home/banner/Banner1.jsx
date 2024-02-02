import img1 from "/bannerImg1.png";
import { FaArrowRight } from "react-icons/fa6";
const Banner1 = () => {
    return (
        <div className="overflow-x-hidden" data-aos="fade-down " data-aos-duration="2000">
            <div className="hero min-h-screen  pt-[100px]">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse mx-10">
                    <img data-aos="fade-left" data-aos-duration="2000" src={img1} className="w-full md:w-3/4 lg:w-1/2 " />
                    <div data-aos="fade-right">
                        <h1 className="text-4xl  text-black md:text-6xl lg:text-7xl font-extrabold">
                            The new <br />
                            era of <span className="text-[#399b53]">finance</span> <br />
                            technology
                        </h1>
                        <p className="py-6 text-lg md:text-xl font-extrabold text-[#399b53]">
                            Financial Transformation in the Digital Age: Embracing the Evolution of Fintech</p>
                        {/* <button className="btn bg-[#399b53] text-white font-bold md:text-lg">Get Started</button> */}
                        <div>
                            <button className="sharedBtn">
                                <span className="mr-1">Get Started</span><FaArrowRight size={15} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner1;