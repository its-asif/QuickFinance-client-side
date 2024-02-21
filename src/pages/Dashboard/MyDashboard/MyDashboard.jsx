import useAuth from "../../../Hooks/useAuth";
import { MdVerified } from "react-icons/md";
import { ImCloudDownload } from "react-icons/im";
import { MdVerifiedUser } from "react-icons/md";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import moment from 'moment';
import { Chart } from "react-google-charts";
import useAdminStatus from "../../../Hooks/useAdminStatus";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
const MyDashboard = () => {
    const { AuthUser } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [data, setData] = useState([]);
    useEffect(() => {
        axiosPublic.get("/api/dashboard/" + AuthUser?.email)
            .then((res) => {
                setData(res.data);
                // console.log(res.data);
            });
    }, [AuthUser]);

    const isAdmin = useAdminStatus();


    // income by date chart
    const incomeByDate = data?.incomeByDate;
    const expenseByDate = data?.expenseByDate;
    const lineData = [
        ["Date", "Income", "Expense"],
    ];
    incomeByDate?.forEach((element) => {
        const date = element._id.date;
        const income = element.totalAmount;
        const expense = expenseByDate.find((x) => x._id.date === date)?.totalAmount;
        lineData.push([date, income, expense]);
    }
    );


    // data for total income by category
    const incomeByCategory = data?.incomeByCategory;
    const incomeByCategoryData = [
        ["Category", "Amount"],
    ];
    incomeByCategory?.forEach((element) => {
        const category = element._id.trxCategory;
        const amount = element.totalAmount;
        incomeByCategoryData.push([category, amount]);
    })


    // data for total expense by category
    const expenseByCategory = data?.expenseByCategory;
    const expenseByCategoryData = [
        ["Category", "Amount"],
    ];
    expenseByCategory?.forEach((element) => {
        const category = element._id.trxCategory;
        const amount = element.totalAmount;
        expenseByCategoryData.push([category, amount]);
    })




    const options = {
        title: "Expense & Income By Date",
        curveType: "function",
        legend: { position: "bottom" },
    };
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

    // Pdf download section
    const componentPdf = useRef()
    const downloadPdf = useReactToPrint({
        content: () => componentPdf.current,
        documentTitle: "User Data",
        pageStyle: `
        @page {
            size: landscape;
        }
    `,
    })
    return (
        <div className="pt-20 mb-4 max-w-screen-xl mx-auto overflow-hidden">

            {/* greeting part of GoalProgress */}
            <div className="text-center pb-8">
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
            <div className={`bg-cover w-full    bg-[url('/dashboard.png')]  bg-no-repeat bg-center shadow-2xl rounded-xl mb-4 py-8`}>
                {/* <div className="  rounded-lg  bg-white " data-aos="zoom-in-right" data-aos-duration="3000">
                    <div className="mb-4 rounded-md bg-gray-100  lg:h-[300px] p-8 pr-0 flex justify-around items-center lg:p-[45px] ">
                        <div className="space-y-1">
                            <h1 className="xl:text-4xl font-extrabold font-Jost tracking-wider lg:text-2xl text-xl"> Hello!  {AuthUser?.displayName}</h1>
                            <p className="text-base  font-semibold ">
                                It’s good to see you again.
                            </p>
                        </div>
                        <div className=" ">
                            <img src="/hello-98ac2d3b.png" className="lg:w-[500px] w-[300px] h-full object-cover -mt-20  lg:-mt-20 " alt="" />
                        </div>
                    </div>


                </div> */}

                {/* profile */}
                <div data-aos="zoom-in-right" data-aos-duration="3000"
                    className="  rounded-lg lg:h-[300px] max-h-full max-w-full  mb-4 flex justify-center items-center   ">
                    <div
                        className="flex flex-col md:flex-row items-center  bg-white py-14 px-8 bg-opacity-70 rounded-lg gap-2 text-xl">
                        <div
                            className="mb-5 text-center">
                            <img
                                className="md:w-24 duration-300 md:h-24 w-2/3 object-cover rounded-full border-[3.5px] border-green-700 "
                                src={AuthUser?.photoURL} alt="" />
                            <MdVerifiedUser size={20}
                                className="text-blue-700 absolute -translate-y-[60/api/dashboard/:emailpx] md:-translate-y-24 z-20" />
                        </div>
                        <div className="">
                            <p className="flex items-center gap-1 text-sm md:text-xl">
                                {/* <span className="font-semibold  text-green-700">Username:</span> */}

                            </p>
                            <p className="text-sm md:text-xl"><span className="font-semibold text-green-700">Email</span>: {AuthUser?.email}</p>
                            <p className="text-sm md:text-xl"><span className="font-semibold text-green-700">User Status</span>: {isAdmin ? "Admin" : "User"}</p>
                            {/* <p className="hidden md:flex gap-2"><span className="font-semibold text-green-700">UId:</span> {AuthUser?.uid}</p> */}
                            {/* <p className="hidden md:flex gap-2"><span className="font-semibold text-green-700">Last Sign In At:</span> {AuthUser?.metadata.lastSignInTime}</p> */}
                            {/* expencess and income*/}
                            <div className="mt-2 mb-4 text-sm md:text-md">
                                <p className=" text-sm md:text-xl font-semibold"><span className=" pr-3 text-black"
                                >Total Balance:</span>{data?.balance} TK</p>

                                <p className="text-sm md:text-xl font-semibold"><span className="  text-black"
                                >Total Expenses:</span> {data?.totalExpense} Tk</p>

                                <p className="text-sm md:text-xl font-semibold"><span className="  text-black"
                                >Total Income:</span> {data?.totalIncome} Tk</p>
                            </div>

                            {/* Print Btn  */}
                            <button onClick={downloadPdf} className="sharedBtn "> <ImCloudDownload className=" mr-2 text-2xl" /> My Report </button>
                        </div>
                    </div>

                </div>
            </div>


            <h1 className="text-5xl my-10 font-bold text-center text-green-700"> Transaction Summary</h1>

            {/* Graph */}
            <div>

                {/* income and expense by category (pie chart) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Chart
                            width={'100%'}
                            height={'400px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={incomeByCategoryData}
                            options={{
                                title: 'Income By Category',
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Chart
                            width={'100%'}
                            height={'400px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={expenseByCategoryData}
                            options={{
                                title: 'Expense By Category',
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
                    </div>
                </div>

                {/* income and expense by date ( line chart )*/}
                <div data-aos="fade-up" data-aos-duration="1000">
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={lineData}
                        options={options}
                    />
                </div>
            </div>


            {/* Report Data  */}
            <div className="hidden">
                <div className="bg-gray-100 " ref={componentPdf} style={{ width: '100%' }} >
                    <div>
                        <h1 className="text-3xl font-bold text-center pb-2 pt-2">Personal Financial Report</h1>
                    </div>

                    <h1 className="md:text-xl text-center font-medium">
                        <span className="">Name : </span> {AuthUser?.displayName}
                    </h1>

                    {/* Income Report */}
                    <div className="p-4">
                        <h2 className="text-lg font-semibold my-4 ml-10">Income Report</h2>
                        {incomeByCategoryData.slice(1).map((fnData, index) => (
                            <p key={index} className="grid grid-cols-4">
                                <span className="font-bold"></span> {fnData[0]} <span className="font-bold"></span> {fnData[1]} Tk
                            </p>
                        ))}
                    </div>
                    {/* summary  */}
                    <div className="p-4 w-full ml-10 text-lg font-semibold">
                        <p className="flex justify-end mr-64 gap-5"> <span>Total Income :</span> <span>{data?.totalIncome} Tk</span></p>
                    </div>
                    {/* Expense Report */}
                    <div className="p-4">
                        <h2 className="text-lg font-semibold my-4 ml-10">Expense Report</h2>
                        {expenseByCategoryData.slice(1).map((fnData, index) => (
                            <p key={index} className="grid grid-cols-4">
                                <span className="font-bold"></span> {fnData[0]} <span className="font-bold"></span> {fnData[1]} Tk
                            </p>
                        ))}
                    </div>
                    <div className="p-4 w-full ml-10 text-lg font-semibold">
                        <p className="flex justify-end mr-64 gap-5"> <span>Total Expense :</span> <span>{data?.totalExpense} Tk</span></p>
                    </div>
                    <div className="w-full p-2">
                        <div className="p-4 w-full text-lg font-semibold">
                            <p className="flex gap-10 justify-between mr-56 ml-10"> <span>Current Balance :</span> <span>{data?.totalExpense} Tk</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default MyDashboard;