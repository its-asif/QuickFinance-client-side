import Tax from "../Tax/Tax";
import Zakat from "../Zakat/Zakat";
import zakatImg from './../../../assets/zakat_tax/zakat.jpg'
import taxImg from './../../../assets/zakat_tax/tax.jpg'

const ZakatAndTax = () => {
    return (
        <div className="max-w-6xl mx-auto pt-24 md:px-10 px-2 lg:px-0">
            {/* Basic Description Part  */}

            <div className=" text-[#333] my-4">

                <div className="text-center">
                    <h2 className="md:text-5xl text-4xl font-extrabold text-center mb-4 primaryColor">Zakat and Tax <span className="text-black">Calculator</span>  </h2>
                    <p className="text-base mx-2 md:mx-10">Effortlessly calculate Zakat and taxes with our user-friendly tool, guiding you through financial responsibilities. Gain clarity, make informed decisions, and navigate your financial journey confidently.</p>
                </div>

                <div className="mt-16">
                    <div className="grid md:grid-cols-2 items-center gap-16">
                        <div>
                            <img src="https://i.ibb.co/M9trqfM/zakat-removebg-preview.png" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
                        </div>
                        <div className="text-justify mx-10 md:mx-0">
                            <h3 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4"><span className="primaryColor">Zakat</span> : A Sacred Duty</h3>
                            <p className="text-sm mb-4 lg:mb-6  lg:text-base ">Embrace the sacred obligation of Zakat, a fundamental pillar of Islamic giving. Our platform simplifies the Zakat calculation process, allowing you to fulfill this noble duty with ease. Explore the spiritual significance of your charitable contributions and make a positive impact on those in need</p>

                            {/* Modal button  */}
                            <Zakat></Zakat>
                        </div>

                        <div className="max-md:order-1 text-justify mx-10 md:mx-0">
                            <h3 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4"><span className="primaryColor">TaxSense</span> : Your Financial Guide</h3>
                            <p className="text-sm mb-4 lg:mb-6  lg:text-base ">Navigate the realm of taxes with confidence using our comprehensive tax calculator. Gain valuable insights into your financial obligations, make informed decisions, and optimize your financial planning. Our user-friendly platform demystifies the complexities of taxation, ensuring a seamless and empowered approach to managing your finances.</p>

                            {/* Modal Button  */}
                            <Tax></Tax>

                        </div>
                        <div>
                            <img src="https://i.ibb.co/y6F1BKh/tax-removebg-preview-1.png" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ZakatAndTax;