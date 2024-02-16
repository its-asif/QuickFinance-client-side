
import moment from 'moment';
import useAuth from '../../../Hooks/useAuth';
import goalImg from '/goal.png'
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { FaTimesCircle } from "react-icons/fa";
import GoalProgressCard from './GoalProgressCard';
import toast from 'react-hot-toast';
const GoalProgress = () => {


    const { AuthUser } = useAuth();
    const axiosPublic = useAxiosPublic();

    // data fetch
    const { data, refetch } = useQuery({
        queryKey: ['GoalData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/progress/budget/${AuthUser?.email}`)
            return res.data;
        }
    });
// post data 
            const handleAddGoal= (event)=>{
                event.preventDefault();
                const form = event.target;
                const goalName=form.goalName.value;
                const userEmail= AuthUser?.email;
                const goalAmount = form.goalAmount.value;
                const amountSaved = form.amountSaved.value;
                const goalDate=form.goalDate.value;

                const goalData = {
                    goalName,
                    userEmail,
                    goalAmount,
                    amountSaved,
                    goalDate
                }

                axiosPublic.post(`/api/goals/`, goalData)
                .then( (postData)=>{
                    if(postData?.data){
                        document.getElementById('my_modal_5').close();
                        toast.success('Successfully added your  new budget goal!',{duration:3000});
                        refetch();
                        form.reset();
                    }
                })
            }
    console.log(data);
    // Determine the appropriate greeting based on the current time
    let greeting = (null);
    const hour = moment().hour();
    if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }
    const date = moment().format('LL');
    return (
        <div className="max-w-screen-xl mx-auto py-10 px-10">

            {/* greeting part of GoalProgress */}
            <div className="text-center">
                <div className="flex justify-center items-center">
                    <img className="w-[50px] hidden md:flex rounded-full  mr-2" src={AuthUser?.photoURL} alt="" />
                    <h1 className="md:text-2xl font-medium">
                        <span className="text-[#399b53]">{greeting}, </span> {AuthUser?.displayName}
                    </h1>

                </div>
                <div className='text-center'>
                    {date}
                </div>
            </div>
            {/*End  greeting part */}

            <div className=' flex flex-col-reverse md:flex md:flex-row justify-between items-center max-w-screen-md mx-auto'>
                <div className='flex-1'>
                    <h4 className='text-3xl font-bold'>Plan Your </h4>
                   

                    <h1 className='ml-3 text-2xl  md:text-8xl font-bold'>
                        Future
                    </h1>
                    <h1 className='ml-3 text-2xl md:text-8xl font-bold'>
                        Goals
                    </h1>
                </div>

                <div className='flex-1'>
                    <img className='' src={goalImg} alt="" />
                </div>
            </div>
            {/* set goal input field and button */}
            <div>




                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                    className="btn ml-2 bg-[#399b53] text-white  hover:bg-[#399b53a8]"
                    onClick={() => document.getElementById('my_modal_5').showModal()}>Add a new goal
                </button>
                <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle">

                    {/* Modal body text and input field  */}
                    <div className="modal-box relative">
                    <button onClick={() => document.getElementById('my_modal_5').close()} className='flex justify-end right-0 top-0 p-3 absolute'>
                        <FaTimesCircle className='text-3xl text-[#D2042D] hover:text-red-600 bg-white rounded-full' /></button>
                        <p className="py-4 px-5 font-bold">Give us your Goal Details</p>
                        
                        <div className="modal-action">
                          
                            <form onSubmit={handleAddGoal} className='space-y-4 px-5' method="dialog">
                                {/* if there is a button in form, it will close the modal */}

                                <input  name='goalName' type="text" placeholder="Goal Name" className="input input-bordered input-success w-full max-w-xs" />


                                <input name='goalAmount' min='0'  type="number" placeholder="Goal Amount" className="input input-bordered input-success w-full max-w-xs" />




                                <input name='goalDate'  type="date" placeholder="Goal Date" className="input input-bordered input-success w-full max-w-xs" />
                                <br />
                                <input name='amountSaved' type="text" placeholder="Already saved Amount" className="input input-bordered input-success w-full max-w-xs" />
                                <br />
                                <button type='submit' className="btn sharedBtn">Submit</button>
                                
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

            {/* display all goals from user */}
            <div className="grid grid-cols-1  my-8  md:grid-cols-2 lg:grid-cols-3 gap-10 xl:col-span-4 p-5 ">
{
    // console.log(data)
}

                {
                    data?.goals.map((item) =>
                        <GoalProgressCard
                            key={item?._id}
                            item={item} refetch={refetch}>
                        </GoalProgressCard>)}
                        {/* {
                            <GoalProgressCard data={data}></GoalProgressCard>
                        } */}



            </div>



        </div>
    );
};

export default GoalProgress;
