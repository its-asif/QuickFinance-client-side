
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
const GoalProgressCard = ({item,refetch}) => {
    const axiosPublic = useAxiosPublic();
    console.log(item,"from goal card");


    const {
        goalName,
        goalAmount,
        amountSaved,
        amountNeeded,
        remainingDays,
        goalStatus,
        goalDate,
        _id
    
    
    }=item;


    const percentageCompleted = (amountSaved / goalAmount) * 100;

    // Generate progress bar data
    const progressBarData = {
        goalName: goalName,
        percentageCompleted: percentageCompleted,
        remainingPercentage: 100 - percentageCompleted
    };
    console.log(progressBarData?.percentageCompleted);

    // Update data 
    const handleUpdateGoal= (event)=>{
        event.preventDefault();
        const form = event.target;
        const goalName=form.goalName.value;
        const goalAmount = form.goalAmount.value;
        const amountSaved = form.amountSaved.value;
        const goalDate=form.goalDate.value;

        const goalData = {
            goalName,
            goalAmount,
            amountSaved,
            goalDate
        }

        axiosPublic.patch(`/api/goals/${_id}`, goalData)
        .then( (postData)=>{
            if(postData?.data){
                document.getElementById('my_modal_3').close();
                toast.success('Successfully updated your budget goal!',{duration:3000});
                refetch();
                form.reset();
            }
        })
    };
// remaining date
   
        let displayText;
    
        if (remainingDays < 30) {
            displayText = `${remainingDays} days remaining`;
        } else if (remainingDays <= 30) {
            displayText = `${Math.floor(remainingDays / 30)} month ${remainingDays % 30} days remaining`;
        } else if (remainingDays <= 365) {
            displayText = `${Math.floor(remainingDays / 30)} month ${remainingDays % 30} days remaining`;
        } else {
            displayText = `${Math.floor(remainingDays / 365)} year ${(remainingDays % 365) / 30} month ${(remainingDays % 365) % 30} days remaining`;
        }
    
       
   
    const handleDelete = (id)=>{


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/api/goals/${id}`)
                .then( (postData)=>{
                    if(postData?.data){
                        toast.success('Successfully Deleted!',{duration:3000});
                        refetch();
                        
                    }
                })
            }
          });
      

    }
    return (
        <div>
             {/* card start  */}
             <div className={`bg-cover  md:min-w-80  bg-[url('/wave.png')] bg-opacity-60  bg-no-repeat bg-center shadow-2xl rounded-xl`}>
                    <div className='mb-5 font-medium p-5 text-white'>
                        <h1 className='font-bold text-black  mb-2 text-4xl text-center'> {goalName}</h1>
                        <h2>Goal Amount: {goalAmount}Tk</h2>
                        <h3>Goal Saved:{amountSaved}Tk</h3>
                        <h3>Amount Needed:{amountNeeded}Tk</h3>

                      <h1 className='text-center mt-2'> {displayText}</h1>

                    </div>
                    <div className='flex justify-center items-center   '>
                        {/* Circular Progress  */}
                        <div className="relative h-40 w-40">
                            <svg className="h-full w-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                {/* Background Circle */}
                                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-[#1AACAC]" strokeWidth="2"></circle>
                                {/* Progress Circle inside a group with rotation */}
                                <g className="origin-center -rotate-90 transform">
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="16"
                                        fill="none"
                                        className="stroke-current text-[#EEEEEE]"
                                        strokeWidth="2"
                                        strokeDasharray="100"
                                        strokeDashoffset={progressBarData?.percentageCompleted} // Set the dynamic strokeDashoffset
                                    ></circle>
                                </g>
                            </svg>
                            {/* Percentage Text  */}
                            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <span className="text-center text-2xl font-bold text-[#FFF6E9] ">{progressBarData?.percentageCompleted.toFixed(2)}%</span>
                            </div>
                        </div>
                    </div>
                    {/* buttons */}
                    <div>
                        <div className='flex justify-around  items-center my-5 pb-5'>
                            <button
                                className="btn ml-2  bg-[#1AACAC] hover:bg-[#1AACAC]  text-2xl  text-white "
                                onClick={() => document.getElementById('my_modal_3').showModal()}><FaEdit />
                            </button>
                            <dialog
                                id="my_modal_3"
                                className="modal modal-bottom sm:modal-middle">

                                {/* Modal body text and input field  */}
                                <div className="modal-box">

                                    <p className="py-4">Update your Goal Details</p>
                                    <div className="modal-action">
                                    <form onSubmit={handleUpdateGoal} className='space-y-4' method="dialog">
                                {/* if there is a button in form, it will close the modal */}

                                <input  name='goalName' defaultValue={goalName} type="text" placeholder="Goal Name" className="input input-bordered input-success w-full max-w-xs" />


                                <input name='goalAmount' defaultValue={goalAmount} min='0'  type="number" placeholder="Goal Amount" className="input input-bordered input-success w-full max-w-xs" />




                                <input name='goalDate' defaultValue={goalDate}  type="date" placeholder="Goal Date" className="input input-bordered input-success w-full max-w-xs" />
                                <br />
                                <input name='amountSaved' defaultValue={amountSaved} type="text" placeholder="Already saved Amount" className="input input-bordered input-success w-full max-w-xs" />
                                <br />
                                <button type='submit' className="btn">Submit</button>
                            </form>
                                    </div>
                                </div>
                            </dialog>

                            <button onClick={()=> handleDelete(_id)} className="btn bg-red-600 hover:bg-red-500 text-2xl text-[#EEEEEE]"> <MdDelete /></button>

                        </div>
                    </div>
                </div>
                {/* End Circular Progress */}

                {/* card end */}
        </div>
    );
};

export default GoalProgressCard;