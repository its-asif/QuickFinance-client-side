import faqImg from './../../../assets/faq.png';

const FaqSection = () => {
    return (
        <div className=' my-16 py-16 '>
            <div className="grid lg:grid-cols-2 items-center lg:gap-0 gap-6  max-w-7xl mx-auto">

                <div data-aos="flip-down" data-aos-duration="2000" className="max-lg:order-1 max-lg:text-center w-4/5 lg:w-4/5 mx-auto ">

                    <div>
                        <h1 className='text-4xl font-bold'>Frequently Asked Questions <span className='text-[#399B53]'>(FAQ)</span> </h1>
                        <p className='my-4 leading-loose text-slate-600'>Explore our comprehensive guide to address common queries and gain insights into our financial services. If you have additional questions, feel free to reach out for personalized assistance</p>
                    </div>

                    <div className="collapse collapse-arrow  trial">
                        <input type="checkbox" id="faq1" />
                        <div className="collapse-title text-xl font-medium">
                            What financial services do you offer?
                        </div>
                        <div className="collapse-content">
                            <p>We provide a wide range of financial services including accounting, investment management, tax planning, and more. Our goal is to cater to diverse financial needs, ensuring a holistic approach to your prosperity.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow trial mt-4">
                        <input type="checkbox" id="faq2" />
                        <div className="collapse-title text-xl font-medium">
                            How can I access my account online?
                        </div>
                        <div className="collapse-content">
                            <p>To access your account online, simply navigate to the 'Login' page on our website. Enter your credentials, and you'll have secure access to your financial information and transactions.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow trial mt-4">
                        <input type="checkbox" id="faq3" />
                        <div className="collapse-title text-xl font-medium">
                            How do I get started with your services?
                        </div>
                        <div className="collapse-content">
                            <p>Getting started is easy! Visit our Services page, explore the options that align with your needs, and reach out through the provided contact information. Our team will guide you through the onboarding process.</p>
                        </div>
                    </div>

                </div>

                <div className="md:h-[450px] ">
                    <img data-aos="flip-up" data-aos-duration="2000" src={faqImg} className="h-full md:w-3/4 lg:w-full  mx-auto" alt="FAQ Image" />
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
