import { Link } from "react-router-dom";



const ServiceCard = ({item}) => {
    
    return (
        
        <div data-aos="fade-up" data-aos-duration="1000" className="relative card  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-xl bg-gradient-to-r from-[#dbdddc] to-[#b8b8b8] hover:from-[#99ffa5] hover:to-[#70f3e8] bg-clip-border text-gray-700 shadow-xl">
           <figure className="">
           <img
           src={item?.image} className=" object-cover  lg:h-[265px] w-full "
         />
           </figure>
        {/* <div className="relative mx-4 mt-4  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        
        </div> */}
        <div className="p-6">
         <div className="mb-2 ">
           <p className="block font-sans font-semibold overflow-y-hidden uppercase leading-relaxed text-blue-gray-900 antialiased transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-gray-700">
             {item?.category}
           </p>
           
         </div>
        
         
        </div>
        <div className="p-6 pt-0">
        
         <Link to={`/category-details/${item?.category}`}>
         <button
           className="block w-full select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-black text-white"
           type="button"
         >
           
         <span>View</span>
         </button>
         </Link>
        </div>
        </div>
    );
};

export default ServiceCard;