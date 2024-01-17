import img2 from "../../../../public/bannerImg2.png";
import dollarIcon from "../../../../public/dollarIcon.png";

const Banner2 = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col justify-between lg:flex-row mx-10">
                    <img src={img2} className="w-full md:w-3/4 lg:w-1/2 " />
                    <div>


                        <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold">
                            Your financial security  <br />
                            <span className="text-[#399b53] flex items-center gap-2">is our priority
                            <img src={dollarIcon} alt="dollarIcon" className="w-16 rotate-12 hidden lg:block lg:relative lg:top-2"/>
                            </span>
                        </h1>


                    <p className="py-6 md:text-lg font-extrabold text-slate-600 text-justify">
                    Step into a realm of financial confidence – where your prosperity is fortified with precision. We make safeguarding your financial future our mission, ensuring your journey is not just secure but thriving.</p>
                    <button className="btn btn-md bg-[#399b53] text-white font-bold md:text-lg">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;