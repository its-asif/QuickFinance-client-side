import { Link } from 'react-router-dom';
import footerLogo from './../../../assets/navLogo.png'
import footerIcon1 from './../../../assets/footer_icons/Facebook.png'
import footerIcon2 from './../../../assets/footer_icons/LinkedIn.png'
import footerIcon3 from './../../../assets/footer_icons/Twitter.png'
import footerIcon4 from './../../../assets/footer_icons/GitHub.png'
import footerIcon5 from './../../../assets/footer_icons/Amazon.png'


const Footer = () => {
    return (

        <div className="flex flex-col items-center bg-black text-white mb-0 py-8">

            <div className='flex justify-center items-center gap-5'>
                <img data-aos="zoom-in-right" src={footerLogo} alt="QuickFinance Logo" />
                <h1 data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500" className='font-bold text-3xl'>QUICK<span className='text-[#399B53]'>FINANCE</span> </h1>
            </div>

            <div className='grid grid-cols-4 gap-2 lg:gap-32 my-6'>
                <Link className='text-center'>FAQ</Link>
                <Link className='text-center'>Configuration</Link>
                <Link className='text-center'>Github</Link>
                <Link className='text-center'>Linkedin </Link>
            </div>

            <hr className='max-w-xl w-3/4  mx-auto text-white my-2' />

            <div className="flex gap-2 md:gap-12 mt-4">

                <Link data-aos="flip-up" to='#' target='_blanks' className="">
                    <img className='w-11/12' src={footerIcon1} alt="facebook icons" />
                </Link>
                <Link data-aos="flip-down" to='#' target='_blanks' className="">
                    <img className='w-11/12' src={footerIcon2} alt="linkedin icons" />
                </Link>
                <Link data-aos="flip-up" to='#' target='_blanks' className="">
                    <img className='w-11/12' src={footerIcon3} alt="twitter icons" />
                </Link>
                <Link data-aos="flip-down" to='#' target='_blanks' className="">
                    <img className='w-11/12' src={footerIcon4} alt="github icons" />
                </Link>
                <Link data-aos="flip-up" to='#' target='_blanks' className="">
                    <img className='w-11/12' src={footerIcon5} alt="amazon icons" />
                </Link>
            </div>

            <div className="flex mt-8 mb-4">
                <input type="email" placeholder="Your email" className="bg-white text-black rounded px-8 h-10 outline-none" />
                {/* <button className="bg-[#399B53] text-white rounded h-10 px-4 ml-3 text-lg">Subscribe</button> */}
            </div>

            <p>Copyright © 2024 - All right reserved</p>
        </div>

    );
};

export default Footer;

