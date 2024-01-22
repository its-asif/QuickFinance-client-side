import Tax from "../Tax/Tax";
import Zakat from "../Zakat/Zakat";
import zakatImg from './../../../assets/zakat_tax/zakat.jpg'
import taxImg from './../../../assets/zakat_tax/tax.jpg'

const ZakatAndTax = () => {
    return (
        <div className="max-w-6xl mx-auto pt-24">
            {/* Basic Description Part  */}

            <div className=" text-[#333] my-4">

                <div className="text-center">
                    <h2 className="text-5xl font-extrabold text-center mb-4">Zakat and Tax Calculator</h2>
                    <p className="text-base mx-2 md:mx-10">Effortlessly calculate Zakat and taxes with our user-friendly tool, guiding you through financial responsibilities. Gain clarity, make informed decisions, and navigate your financial journey confidently.</p>
                </div>

                <div className="mt-16">
                    <div className="grid md:grid-cols-2 items-center gap-16">
                        <div>
                            <img src={zakatImg} className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
                        </div>
                        <div className="text-justify mx-10 md:mx-0">
                            <h3 className="text-2xl font-bold mb-4">Zakat : A Sacred Duty</h3>
                            <p className="text-sm">Embrace the sacred obligation of Zakat, a fundamental pillar of Islamic giving. Our platform simplifies the Zakat calculation process, allowing you to fulfill this noble duty with ease. Explore the spiritual significance of your charitable contributions and make a positive impact on those in need</p>

                            {/* Modal button  */}
                            <Zakat></Zakat>
                        </div>

                        <div className="max-md:order-1 text-justify mx-10 md:mx-0">
                            <h3 className="text-2xl font-bold mb-4">TaxSense : Your Financial Guide</h3>
                            <p className="text-sm">Navigate the realm of taxes with confidence using our comprehensive tax calculator. Gain valuable insights into your financial obligations, make informed decisions, and optimize your financial planning. Our user-friendly platform demystifies the complexities of taxation, ensuring a seamless and empowered approach to managing your finances.</p>

                            {/* Modal Button  */}
                            <Tax></Tax>

                        </div>
                        <div>
                            <img src={taxImg} className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ZakatAndTax;