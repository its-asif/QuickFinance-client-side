import { FaLocationDot  ,FaPhone } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";

const ContactUs = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className='text-[50px] font-extrabold text-[#399B53] text-center mt-14'>Contact Us</h1>
            <p className="max-w-[700px] mx-auto text-center mb-14">Our dedicated professionals are committed to providing timely and personalized support to meet your financial needs. We understand the importance of clear communication, and we strive to make your experience with Quick Finance as seamless as possible.</p>
            <div className="grid grid-cols-2">
                 <div>
                    <div className="flex  gap-2">
                        <div className="bg-[#d5d5d5] h-12 w-12 rounded-full flex justify-center items-center"><FaLocationDot  className="text-[#399B53] text-2xl "></FaLocationDot ></div>
                        <div>
                            <h1 className="text-[18px] font-semibold text-[#399B53]">Address</h1>
                            <p className="font-normal">Gulshan South Avenue</p>
                            <p className="font-normal">Dhaka, 1212</p>
                        </div>
                    </div>
                    <div className="my-10">
                        <div className="flex  gap-2">
                        <div className="bg-[#d5d5d5] h-12 w-12 rounded-full flex justify-center items-center"><FaPhone className="text-[#399B53] text-2xl "></FaPhone></div>
                        <div>
                            <h1 className="text-[18px] font-semibold text-[#399B53]">Phone</h1>
                            <p className="font-normal">+880 15666666</p>
                        </div>
                    </div>
                    </div>
                    <div>
                        <div className="flex  gap-2">
                        <div className="bg-[#d5d5d5] h-12 w-12 rounded-full flex justify-center items-center"><AiTwotoneMail className="text-[#399B53] text-2xl "></AiTwotoneMail></div>
                        <div>
                            <h1 className="text-[18px] font-semibold text-[#399B53]">Email</h1>
                            <p className="font-normal">Quickfinance@gmail.com</p>
                        </div>
                    </div>
                    </div>
                 </div>
                 <div>
                    <div className="bg-[#d5d5d5] h-10 w-10">
                        
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default ContactUs;