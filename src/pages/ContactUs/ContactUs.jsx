import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";




const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f3ou88i', 'template_tbzc2ye', form.current, 'Sdok8aunyfWTnDtXq')
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your message send successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }, () => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Something wrong try again later",
                    showConfirmButton: false,
                    timer: 1500
                  });
            });
    };


    return (
        <div className="max-w-screen-xl mx-auto lg:px-10 p-5 overflow-hidden">
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500" className='text-[50px] font-extrabold text-[#399B53] uppercase text-center mt-14'><span className="text-black">Contact</span> Us</h1>
            <p data-aos="zoom-in-right" data-aos-duration="2000" className="max-w-[700px] mx-auto text-center mb-8">Our dedicated professionals are committed to providing timely and personalized support to meet your financial needs. We understand the importance of clear communication, and we strive to make your experience with Quick Finance as seamless as possible.</p>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                <div className=" flex items-center mt-8">
                    <div data-aos="fade-up-right" data-aos-duration="2000" className="space-y-5  ">
                        <div className="flex  gap-2">
                            <div className="bg-[#d5d5d5] h-12 w-12 rounded-full flex justify-center items-center"><FaLocationDot className="text-[#399B53] text-2xl "></FaLocationDot ></div>
                            <div>
                                <h1 className="text-[18px] font-semibold text-[#399B53]">Address</h1>
                                <p className="font-normal">Gulshan South Avenue</p>
                                <p className="font-normal">Dhaka, 1212</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex  gap-2">
                                <div className="bg-[#d5d5d5] h-12 w-12 rounded-full flex justify-center items-center"><FaPhone className="text-[#399B53] text-2xl "></FaPhone></div>
                                <div>
                                    <h1 className="text-[18px] font-semibold text-[#399B53]">Phone</h1>
                                    <p className="font-normal">+880 15666666</p>
                                </div>
                            </div>
                        </div>
                        {/* <p>ha</p> */}
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
                </div>
                <div data-aos="fade-up-left" data-aos-duration="2000" className="lg:mt-0 md:mt-0 sm:mt-6">
                    <div className=" h-[420px]  mx-auto  flex justify-center items-center ">
                        <div className="bg-white   ">
                            <h1 className="text-[25px] font-bold lg:p-10 md:p-10 sm:p-0 text-[#399B53]">Feel free to say Hello!</h1>
                            {/*  */}
                            <form ref={form} onSubmit={sendEmail} className="lg:px-10 md:px-8 sm:px-2">
                                
                                <input className="border-b-2 py-3 bode-t-none outline-0 border-[#399B53] w-full placeholder-[Black] font-bold mb-2"  placeholder="Full Name" type="text"  name="user_name" />
                                
                                <input className="border-b-2 py-3 my-5 bode-t-none outline-0 border-[#399B53] w-full placeholder-[Black] font-bold mb-2"  placeholder="Email" type="email" name="user_email" />
                                
                                <textarea className="border-b-2 py-3 my-5 bode-t-none outline-0 border-[#399B53] w-full placeholder-[Black] font-bold mb-2"  placeholder="write Your Message" name="message" />
                                <input className="px-6 mt-5 py-2 bg-[#399B53] text-white font-normal text-xl rounded-md" type="submit" value="Send" />
                            </form>

                            {/*  */}
                            {/* <form ref={form} onSubmit={sendEmail} className="lg:px-10 md:px-8 sm:px-2">

                                <input className="border-b-2 py-3 bode-t-none outline-0 border-[#399B53] w-full placeholder-[Black] font-bold mb-2"  placeholder="Full Name" type="text" name="" id="" />
                                <input className="border-b-2 py-3 my-5 bode-t-none outline-0 border-[#399B53] w-full placeholder-[Black] font-bold mb-2"  placeholder="Email" type="email" name="" id="" />
                                <input className="border-b-2 py-3 my-5 bode-t-none outline-0 border-[#399B53] w-full placeholder-[Black] font-bold mb-2"  placeholder="write Your Message" type="text" name="" id="" />
                                <input className="px-6 mt-5 py-2 bg-[#399B53] text-white font-normal text-xl rounded-md" type="submit" value="Send" />
                            </form> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;