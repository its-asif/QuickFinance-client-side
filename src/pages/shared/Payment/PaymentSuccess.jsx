import { Link, useParams } from "react-router-dom";



const PaymentSuccess = () => {
    const {tranId}=useParams();
    return (
        <div className={`bg-cover  bg-[url('/dashboard.png')] bg-opacity-60  bg-no-repeat bg-center shadow-lg overflow-hidden pt-20 flex justify-center items-center`}  >


<div className=" min-h-screen">
      <div className=" p-6  md:mx-auto">
        <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
        <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
            <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
            <p> Have a great day!  </p>
            <p>Transaction Id: {tranId} </p>
            <div className="py-10 flex justify-center text-center">
                <Link to='/dashboard/payments'>
                <button  className="  sharedBtn  ">
                   
                   Your Payments
                   
               </button>
                </Link>
            </div>
        </div>
    </div>
  </div>
            
        </div>
    );
};

export default PaymentSuccess;