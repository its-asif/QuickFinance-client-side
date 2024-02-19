
import { TfiSupport } from "react-icons/tfi";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { PiUserCircleDuotone } from "react-icons/pi";
import { SiGoogletagmanager } from "react-icons/si";
import { GoGoal } from "react-icons/go";
import { GiMoneyStack } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";


const AboutUs = () => {

    // ToDo 
    // This Total Value will be Dynamic 

    const totalUsers = 50
    const totalSubscribers = 40
    const totalFeatures = 10

    const featuresData = [
        {
            icon: <TfiSupport className="w-8 h-8 mb-4 inline-block" />,
            title: 'Feature Title 1',
            description: 'Tailor our product to suit your needs Tailor our product to suit your needs.',
        },
        {
            icon: <GiTakeMyMoney className="w-8 h-8 mb-4 inline-block" />,
            title: 'Feature Title 2',
            description: 'Your data is protected by the latest security measures.',
        },
        {
            icon: <MdPayment className="w-8 h-8 mb-4 inline-block" />,
            title: 'Feature Title 3',
            description: 'Description for Feature 3.',
        },
        {
            icon: <PiUserCircleDuotone className="w-8 h-8 mb-4 inline-block" />,
            title: 'Feature Title 4',
            description: 'Experience blazing-fast performance with our product.',
        },
        {
            icon: <SiGoogletagmanager className="w-8 h-8 mb-4 inline-block" />,
            title: 'Feature Title 5',
            description: 'Expand your reach with our global network.',
        },
        {
            icon: <GoGoal className="w-8 h-8 mb-4 inline-block" />,
            title: 'Feature Title 6',
            description: 'Seamless communication for your team.',
        },
        {
            icon: <PiUserCircleDuotone className="w-8 h-8 mb-4 inline-block" />,
            title: 'Feature Title 7',
            description: 'Experience blazing-fast performance with our product.',
        },
        {
            icon: <SiGoogletagmanager className="w-8 h-8 mb-4 inline-block" />,
            title: 'Feature Title 8',
            description: 'Expand your reach with our global network.',
        },
        {
            icon: <GoGoal className="w-8 h-8 mb-4 inline-block" />,
            title: 'Feature Title 9',
            description: 'Seamless communication for your team.',
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
            name: "David Forren",
            position: "Founder / CEO",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
            portfolio: "#"
        },
        {
            name: "Amil Evara",
            position: "UI/UX Designer",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
            portfolio: "#"
        },
        {
            name: "David Forren",
            position: "Founder / CEO",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
            portfolio: "#"
        },
        {
            name: "Amil Evara",
            position: "UI/UX Designer",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
            portfolio: "#"
        },
        {
            name: "David Forren",
            position: "Founder / CEO",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
            portfolio: "#"
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
                                <p className="text-lg font-semibold text-gray-800">Total Features</p>
                                <p className="text-gray-600 text-sm mt-1">{totalFeatures}</p>
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

            <div className="text-slate-100 max-w-[85rem] px-4 py-10 lg:px-8 lg:py-14 mx-auto bg-gradient-to-r from-[#0ba360] to-green-400">

                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Meet Our team</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-2">
                    {teamData.map((member, index) => (
                        <div key={index} className="text-center">
                            <img className="rounded-xl w-1/2 mx-auto" src={member.image} alt="Image Description" />
                            <div className="mt-2 sm:mt-4">
                                <h3 className="text-sm font-medium  sm:text-base lg:text-lg">
                                    {member.name}
                                </h3>
                                <p className="text-xs sm:text-sm lg:text-base">
                                    {member.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>




        </div>
    );
};

export default AboutUs;