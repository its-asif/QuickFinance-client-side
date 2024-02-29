
import { TfiSupport } from "react-icons/tfi";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdCalculate, MdPayment } from "react-icons/md";
import { PiUserCircleDuotone } from "react-icons/pi";
import { SiGoogletagmanager } from "react-icons/si";
import { GoGoal } from "react-icons/go";
import { Link } from "react-router-dom";
import useUsersData from "../../Hooks/useUsersData";
import team1 from './../../assets/team/tahmid.webp'
import team2 from './../../assets/team/asif-2.jpg'
// import team3 from './../../assets/team/hanif.jpg'
import team4 from './../../assets/team/fayaz-2.jpg'
import team5 from './../../assets/team/tahsin.jpg'


import { GiMoneyStack } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";

const AboutUs = () => {

    const { totalUser } = useUsersData()

    const totalUsers = totalUser.length
    // ToDo 
    // This Total Value will be Dynamic 
    const totalSubscribers = 0
    const totalServices = 10

    const featuresData = [
        {
            icon: <TfiSupport className="w-8 h-8 mb-4 inline-block" />,
            title: 'My Asset',
            description: 'Tailor our product to suit your needs.',
        },
        {
            icon: <GiTakeMyMoney className="w-8 h-8 mb-4 inline-block" />,
            title: 'Personal Finance',
            description: 'ensuring financial control and peace of mind.',
        },
        {
            icon: <MdPayment className="w-8 h-8 mb-4 inline-block" />,
            title: 'My Payment',
            description: 'Manage your payments effortlessly with our secure system.',
        },
        {
            icon: <GiMoneyStack className="w-8 h-8 mb-4 inline-block" />,
            title: 'Budget Planning',
            description: 'Experience blazing-fast performance while planning your budget.',
        },
        {
            icon: <SiGoogletagmanager className="w-8 h-8 mb-4 inline-block" />,
            title: 'Manage Debt',
            description: 'Efficiently manage your debts with our global network.',
        },
        {
            icon: <GoGoal className="w-8 h-8 mb-4 inline-block" />,
            title: 'Goal Progress',
            description: 'Track and achieve your goals with our intuitive features.',
        },
        {
            icon: <PiUserCircleDuotone className="w-8 h-8 mb-4 inline-block" />,
            title: 'Print Finance Data',
            description: 'Generate and print financial data with ease for your records.',
        },
        {
            icon: <FaBookReader className="w-8 h-8 mb-4 inline-block" />,
            title: 'Read Blog',
            description: 'Expand your financial knowledge by reading our informative blogs.',
        },
        {
            icon: <MdCalculate className="w-8 h-8 mb-4 inline-block" />,
            title: 'Zakat & Tax',
            description: 'Easily Pay your tax and zakat',
        }
    ];



    // To Do
    // This Data Will be dynamic  
    // const clients = [
    //     {
    //         imageUrl: "https://readymadeui.com/profile_2.webp",
    //         name: "John Doe",
    //         company: "Rubik",
    //         testimonial: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt."
    //     },
    //     {
    //         imageUrl: "https://readymadeui.com/profile_3.webp",
    //         name: "Mark Adair",
    //         company: "Alpha",
    //         testimonial: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt."
    //     },
    //     {
    //         imageUrl: "https://readymadeui.com/profile_4.webp",
    //         name: "Simon Konecki",
    //         company: "Labar",
    //         testimonial: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt."
    //     }
    // ];

    // Team Section 
    const teamData = [
        {
            name: "Tahmid Rahman",
            position: "",
            image: team1,
            portfolio: "https://tahmidshawn.netlify.app/"
        },
        {
            name: "Asif Hossain",
            position: "",
            image: team2,
            portfolio: "https://asifhossain.netlify.app/"
        },
        // {
        //     name: "Hanif Biswas",
        //     position: "",
        //     image: team3,
        //     portfolio: "https://asifhossain.netlify.app/"
        // },
        {
            name: "Muddasir Faiyaz",
            position: "",
            image: team4,
            portfolio: "https://muddasir-faiyaj.web.app/"
        },
        {
            name: "Tahsin Zaman",
            position: "",
            image: team5,
            portfolio: "https://tahsinzaman.netlify.app"
        },

        // Add more team members as needed
    ];

    // Rest of the code using the map function remains the same



    return (
        <div className="pt-20">
            {/* about us intro  */}
            <div className="py-10">
                <div className="text-center">
                    <h1 className="text-5xl font-bold tracking-wide">Know QuickFinance</h1>
                    <p className="mt-4 tracking-widest">QuickFinance: Accelerating Your Wealth, One Smart Decision at a Time.</p>
                </div>
            </div>
            {/* why about us  */}

            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between  text-gray-800 gap-14 p-10">
                    <div className="max-lg:order-1 max-lg:text-center w-full">
                        <h2 className="text-3xl font-bold my-8">Why QuickFinance ?</h2>
                        <p className="mt-4 text-base leading-relaxed text-justify">At QuickFinance, we are more than just a financial management platform; we are your dedicated ally on the path to financial success. Our commitment is to empower individuals and businesses with intuitive tools, expert insights, and unwavering support. Discover a seamless and personalized financial experience that goes beyond numbers. Choose QuickFinance for a journey where your financial goals become milestones, and your aspirations transform into achievements. Trust in us, your partner in financial empowerment . </p>

                        {/* Bullet Point Section */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">Secure Transactions</h6>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">User-Friendly Interface</h6>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">Financial Tracking</h6>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">Real-Time Updates</h6>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">Robust Security</h6>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">Customer Support</h6>
                            </div>
                        </div>

                    </div>
                    <div className="lg:h-[440px] w-full md:w-1/2">
                        <img src="https://readymadeui.com/team-image.webp" className="w-full h-full object-cover" alt="Dining Experience" />
                    </div>
                </div>

            </div>

            {/* Milestone  */}
            <div className="bg-gradient-to-r from-[#0ba360] to-green-400 py-8 px-16">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-8">Milestones that we have achieved.</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* User Section  */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 w-16 h-16">
                                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div className="mt-4">
                                <p className="text-lg font-semibold text-gray-800">Total Users</p>
                                <p className="text-gray-600 text-sm mt-1">{totalUsers}</p>
                            </div>
                        </div>
                        {/* Subscription  */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-3 w-16 h-16">
                                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div className="mt-4">
                                <p className="text-lg font-semibold text-gray-800">Total Subscribers</p>
                                <p className="text-gray-600 text-sm mt-1">{totalSubscribers}</p>
                            </div>
                        </div>
                        {/* Services  */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-3 w-16 h-16">
                                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div className="mt-4">
                                <p className="text-lg font-semibold text-gray-800">Total Services</p>
                                <p className="text-gray-600 text-sm mt-1">{totalServices}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            {/* <div className="mt-20 mb-40">
                <div className="md:mb-28 mb-12 text-center">
                    <h2 className="text-4xl font-bold my-8">What our happy clients say</h2>
                </div>

                <div className="grid md:grid-cols-3 md:gap-6 max-md:gap-10 max-w-6xl mx-auto relative">
                    <div className="bg-gradient-to-r from-[#0ba360] to-green-400 max-w-[60%] h-[145%] w-full -top-16 left-0 right-0 mx-auto rounded-3xl absolute max-md:hidden">
                    </div>

                    {clients.map((client, index) => (
                        <div key={index} className="max-w-[350px] h-auto lg:p-8 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
                            <div className="">
                                <img src={client.imageUrl} className="w-12 h-12 rounded-full" />
                                <h4 className="text-sm whitespace-nowrap font-extrabold mt-2">{client.name}</h4>
                                <p className="mt-1 text-xs text-gray-400">Founder of {client.company}</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm leading-relaxed">{client.testimonial}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}


            {/* QuickFinance Features  */}

            <div className="max-w-6xl mx-auto mb-16 mt-20">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">Discover Our Exclusive Features</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
                    {featuresData.map((feature, index) => (
                        <Link key={index} to='/dashboard'>
                            <div className="p-4 text-center border-[1px] border-transparent hover:border-[1px] hover:border-[#0ba360] hover:bg-[#0ba360] hover:text-white mx-10 md:mx-0">
                                {feature.icon}
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-sm">{feature.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Team Section */}

            <div className="text-gray-900 max-w-[85rem] px-4 py-10 lg:px-8 lg:py-14 mx-auto bg-gradient-to-r from-[#0ba360] to-green-400">

                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl ">Meet Our team</h2>
                    <p className="my-3">Unveiling the Exceptional Faces Behind Our Phenomenal Success: Meet Our Outstanding Team</p>
                </div>

                <div className="container mx-auto my-8 px-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {teamData.map((member, index) => (
                            <div key={index} className=" text-center rounded-full overflow-hidden group">
                                <div className="flex">
                                    <img className="w-24 h-40 object-cover" src={member.image} alt={member.name} />
                                    <div className="ml-4 flex flex-col justify-center text-left">
                                        <h3 className="text-lg font-semibold text-black">{member.name}</h3>
                                        <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-black text-base cursor-pointer hover:underline">View Profile</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>






            </div>




        </div>
    );
};

export default AboutUs;