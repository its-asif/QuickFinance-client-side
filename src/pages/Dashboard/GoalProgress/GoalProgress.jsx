import { Chart } from 'chart.js/auto';
import moment from 'moment';
import useAuth from '../../../Hooks/useAuth';
import goalImg from '/goal.png'
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { FaTimesCircle } from "react-icons/fa";
import GoalProgressCard from './GoalProgressCard';
import toast from 'react-hot-toast';
import DashboardHeader from '../../../Components/header/DashboardHeader';
import { useEffect, useRef } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
const GoalProgress = () => {


    const { AuthUser } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure =useAxiosSecure()
    
    // data fetch
    const { data, refetch } = useQuery({
        queryKey: ['GoalData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/progress/budget/${AuthUser?.email}`)
            return res.data;
        }
    });

    const chartRef = useRef(null);
    useEffect(() => {
        if (chartRef.current) {
            // Data
            const totalExpense = data?.userBudget.totalExpense || 0;
            const totalIncome = data?.userBudget.totalIncome || 0;
            let totalSaving = data?.userBudget.totalSaving || 0;

            // Ensure saving is not negative
            totalSaving = Math.max(totalSaving, 0);

            // Destroy existing chart if it exists
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }

            // Get canvas element
            const ctx = chartRef.current.getContext('2d');

            // Create bar chart
            chartRef.current.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Expense', 'Income', 'Saving'],
                    datasets: [{
                        label: 'Amount',
                        data: [totalExpense, totalIncome, totalSaving],
                        backgroundColor: [
                            'rgba(255,15,15,1.00)', // Red for Expense
                            'rgba(15,147,255,1.00)',  // Blue for Income
                            'rgba(57, 155, 83, 1)'   // Green for Saving
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }, [data]);
    
       
       
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

                axiosSecure.post(`/api/goals/`, goalData)
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


            {/* Banner section */}
            <DashboardHeader smallTitle={"Plan Your"} largeTitle={"Future Goals"} imgSrc={goalImg} />



            {/* Bar chart */}
            <div className='my-5 flex w-full h-96 bg-white rounded-lg bg-opacity-10 shadow-xl justify-center items-center'>
                <canvas ref={chartRef} id="myBarChart" width="400" height="200"></canvas>
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
            <div className="grid grid-cols-1  my-8   lg:grid-cols-3 gap-10 xl:col-span-4 p-5 ">
{
    // console.log(data)
}

                {
                    data?.goals?.map((item) =>
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
