


const AboutUs = () => {
    return (
        <div className="pt-16 max-w-screen-xl mx-auto">
            {/* about us description part */}
            <div>
                <h1 className="mt-5 text-[50px] font-extrabold text-[#399B53] uppercase text-center"><span className="text-black">About</span> us</h1>
                <p className="max-w-[1050px] text-center mx-auto font-normal text-[20px]">Welcome to QuickFinance, your go-to platform for seamless financial management, founded by visionary entrepreneur John Doe over a decade ago. With 12 years of expertise, QuickFinance empowers you to effortlessly track earnings, expenses, calculate Zakat and taxes, and manage investments—all in one place. With a user-friendly interface, QuickFinance ensures easy organization and clear insights into your financial health. Take control of your finances and build a secure future with QuickFinance, driven by the passion and foresight of our founder, John Doe.</p>
            </div>
            <div >
                <img className="mx-auto my-10" src="../../../public/Counter.png" alt="" />
            </div>
            {/* Out clients */}
            <div className="py-8">
                <h2 className=" text-[25px] my-5 font-normal text-center">Trusted by the world’s leading brands</h2>
                <img className="mx-auto" src="../../../public/Trusted brand.png" alt="" />
            </div>

            {/* Evaluation part */}
            <div className="py-16">
                <div className="relative">
                    <div className="absolute">
                        <h1 className="text-[48px] font-bold text-[#399B53]">Our Evaluation</h1>
                        <p className="text-[20px] font-medium max-w-[600px] text-justify">In 2008, QuickFinance was founded by a dedicated team of finance and technology experts driven by a singular mission—to simplify financial management and provide equal opportunities for all. Today, after 12 years of evolution, QuickFinance has transformed into a robust platform empowering individuals and businesses globally to effortlessly navigate their financial landscapes and achieve greater financial visibility.</p>
                    </div>
                    <div>
                        <img className="w-full" src="../../../public/Groth.svg" alt="" />
                    </div>
                </div>
            </div>

            {/* founder details */}
            <div>
                <h1 className="mt-5 text-[30px] font-extrabold text-[#399B53] uppercase text-center my-4"><span className="text-black">Our</span> Founder</h1>
                <div className="grid grid-cols-3 py-10">
                    <div className="col-span-2">
                        <h1 className="text-[25px] font-bold">Meet John Doe: Founder of QuickFinance</h1>
                        <p className="text-lg font-normal text-justify">Meet John Doe, the innovative mind behind QuickFinance, a dynamic force reshaping the financial landscape. With a rich background in finance and a profound understanding of market dynamics, John founded QuickFinance on the principle of simplifying financial processes. His two-decade journey in the industry showcases a commitment to leveraging technology for accessible and efficient financial solutions. John's strategic acumen and customer-centric approach have propelled QuickFinance to a leading position in the fintech sector, earning trust nationwide. Beyond business success, John Doe is recognized for his philanthropy, supporting initiatives that empower communities and promote financial literacy. As QuickFinance continues to thrive under his leadership, John remains dedicated to pushing boundaries and exploring new horizons in the world of finance.</p>
                    </div>
                    <div>
                        <img className="ml-auto" src="../../../public/Founder.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;