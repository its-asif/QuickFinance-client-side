
import { Link } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
const PaymentFailed = () => {
    
    return (
        <div className={`bg-cover  bg-[url('/dashboard.png')] bg-opacity-60  bg-no-repeat bg-center shadow-lg overflow-hidden pt-20 flex justify-center items-center`}  >


<div className=" min-h-screen">
      <div className=" p-6  md:mx-auto">
      <div className='flex justify-center items-center'>
      <MdCancel  className='text-8xl   text-[red]'/>
      </div>
        <div className="text-center">
            <h3 className="md:text-2xl mt-2 text-base text-gray-900 font-semibold text-center">Payment Error!</h3>
            
          
            <div className="py-10 flex justify-center text-center">
                <Link to='/'>
                <button  className="  sharedBtn  ">
                   
                  Back To Home
                   
               </button>
                </Link>
            </div>
        </div>
    </div>
  </div>
            
        </div>
    );
};

export default PaymentFailed;