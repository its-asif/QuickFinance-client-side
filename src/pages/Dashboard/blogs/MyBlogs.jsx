
const MyBlogs = () => {
    return (
        <div>
            
            {/* Banner Section */}
            <div className=' flex flex-col-reverse md:flex md:flex-row  items-center max-w-screen-lg mx-auto m-4'>
                <div className='flex-1'>
                   
                    <h4 className=' text-3xl font-bold'>Publish Your </h4>

                    <h1 className='text-2xl  md:text-8xl font-bold'>
                        Finance Blogs
                    </h1>
                </div>

                <div className='flex'>
                    <img className='w-full' src={"https://i.ibb.co/RCCJ8zL/blog-banner-img.png"} 
                    alt="paymentImg" />
                </div>
            </div>


        </div>
    );
};

export default MyBlogs;