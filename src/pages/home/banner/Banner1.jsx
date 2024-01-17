import img1 from "../../../../public/bannerImg1.png";

const Banner1 = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse mx-10">
                    <img src={img1} className="w-full md:w-3/4 lg:w-1/2 " />
                    <div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold">
                        The new <br />
                        era of <span className="text-[#399b53]">finance</span> <br />
                        technology
                    </h1>
                    <p className="py-6 text-lg md:text-xl font-extrabold text-[#399b53]">
                        Managing your financial business in easy way</p>
                    <button className="btn bg-[#399b53] text-white font-bold md:text-lg">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner1;