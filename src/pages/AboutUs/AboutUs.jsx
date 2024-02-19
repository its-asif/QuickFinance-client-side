

const AboutUs = () => {
    return (
        <div className="pt-20">
            {/* about us intro  */}
            <div className="py-10">
                <div className="text-center">
                    <h1 className="text-5xl font-bold tracking-wide">About QuickFinance</h1>
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
                                <h6 className="text-base font-semibold ml-4">Budget Planning</h6>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">Goal Progress </h6>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">My Finance</h6>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">Debt Management</h6>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">My Assets</h6>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                                </svg>
                                <h6 className="text-base font-semibold ml-4">Tahsin Vai</h6>
                            </div>
                        </div>

                    </div>
                    <div className="lg:h-[440px] w-full md:w-1/2">
                        <img src="https://readymadeui.com/team-image.webp" className="w-full h-full object-cover" alt="Dining Experience" />
                    </div>
                </div>

            </div>

            {/* Milestone  */}
            <div className="bg-gradient-to-r from-green-400 to-green-300 py-8 px-16">
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
                                <p className="text-gray-600 text-sm mt-1">50</p>
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
                                <p className="text-gray-600 text-sm mt-1">40</p>
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
                                <p className="text-gray-600 text-sm mt-1">9</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            <div className="mt-20 mb-40">
                <div className="md:mb-28 mb-12 text-center">
                    <h2 className="text-4xl font-bold my-8">What our happy client say</h2>
                </div>
                <div className="grid md:grid-cols-3 md:gap-6 max-md:gap-10 max-w-6xl mx-auto relative">
                    <div
                        className="bg-gradient-to-r from-green-400 to-green-300 max-w-[60%] h-[145%] w-full -top-16 left-0 right-0 mx-auto rounded-3xl absolute max-md:hidden">
                    </div>
                    <div className="max-w-[350px] h-auto lg:p-8 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
                        <div className="">
                            <img src="https://readymadeui.com/profile_2.webp" className="w-12 h-12 rounded-full" />
                            <h4 className="text-sm whitespace-nowrap font-extrabold mt-2">John Doe</h4>
                            <p className="mt-1 text-xs text-gray-400">Founder of Rubik</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food.
                                The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                        </div>
                    </div>
                    <div className="max-w-[350px] h-auto lg:p-8 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
                        <div className="">
                            <img src="https://readymadeui.com/profile_3.webp" className="w-12 h-12 rounded-full" />
                            <h4 className="text-sm whitespace-nowrap font-extrabold mt-2">Mark Adair</h4>
                            <p className="mt-1 text-xs text-gray-400">Founder of Alpha</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food.
                                The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                        </div>
                    </div>
                    <div className="max-w-[350px] h-auto lg:p-8 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
                        <div className="">
                            <img src="https://readymadeui.com/profile_4.webp" className="w-12 h-12 rounded-full" />
                            <h4 className="text-sm whitespace-nowrap font-extrabold mt-2">Simon Konecki</h4>
                            <p className="mt-1 text-xs text-gray-400">Founder of Labar</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food.
                                The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* What we Do */}
          

        </div>
    );
};

export default AboutUs;