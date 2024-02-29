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

            <div className='flex flex-row gap-4 lg:gap-32 my-6'>
                <Link to='https://muddasir-faiyaj.web.app/' target='_blank' className='text-center'>Terms and Conditions</Link>
                <Link to='https://muddasir-faiyaj.web.app/' target='_blank' className='text-center'>Privacy and Policy</Link>
                <Link to='/about' className='text-center'>About Us</Link>
                <Link to='/contact' className='text-center'>Contact Us</Link>
                <Link to='/publicBlogs' className='text-center'>Read Blogs</Link>
            </div>

            <hr className='max-w-xl w-3/4  mx-auto text-white my-2' />

            <div className="flex gap-2 md:gap-12 mt-4 mb-8">

                <Link data-aos="flip-up" to='https://tahsinzaman.netlify.app/' target='_blank' className="">
                    <img className='w-11/12' src={footerIcon1} alt="facebook icons" />
                </Link>
                <Link data-aos="flip-down" to='https://muddasir-faiyaj.web.app/' target='_blank' className="">
                    <img className='w-11/12' src={footerIcon2} alt="linkedin icons" />
                </Link>
                <Link data-aos="flip-up" to='https://asifhossain.netlify.app/' target='_blank' className="">
                    <img className='w-11/12' src={footerIcon3} alt="twitter icons" />
                </Link>
                <Link data-aos="flip-down" to='https://github.com/its-asif/QuickFinance-client-side' target='_blank' className="">
                    <img className='w-11/12' src={footerIcon4} alt="github icons" />
                </Link>

            </div>

            {/* <div className="flex mt-8 mb-4">
                <input type="email" placeholder="Your email" className="bg-white text-black rounded px-2 h-10 outline-none" />
                <button className="bg-[#399B53] text-white rounded h-10 px-2 ml-3 text-md">Subscribe</button>
            </div> */}

            <p>Copyright © 2024 - All right reserved</p>
        </div>

    );
};

export default Footer;

