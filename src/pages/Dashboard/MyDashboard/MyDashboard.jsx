import useAuth from "../../../Hooks/useAuth";
import { ImCloudDownload } from "react-icons/im";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import moment from 'moment';
import { Chart } from "react-google-charts";
import useAdminStatus from "../../../Hooks/useAdminStatus";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import useAssetData from "../../../Hooks/useAssetData";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
const MyDashboard = () => {
    const { assetData } = useAssetData()
    const { AuthUser } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    const [data, setData] = useState([]);
    useEffect(() => {
        axiosSecure.get("/api/dashboard/" + AuthUser?.email)
            .then((res) => {
                setData(res.data);
                // console.log(res.data);
            });
    }, [AuthUser]);
    const AssetBalance = assetData?.reduce((acc, amount) => acc + amount.value, 0)
    // console.log();
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
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    // fetch initial data and store
    useEffect(() => {
        axiosPublic.get('/api/blogs')
        .then(res => {
            setBlogs(res.data);
            setLoading(false);
        })

    }, [])


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
            <div className={`bg-cover w-full   bg-[url('/dashboard.png')]  bg-no-repeat bg-center shadow-2xl rounded-xl mb-4 py-8`}>
                <div className=" flex md:flex-row flex-col justify-center items-center gap-2">
                    {/* profile */}
                    <div
                        //  data-aos="zoom-in-right" data-aos-duration="3000"
                        className="  rounded-lg lg:h-[300px] max-h-full max-w-full mb-4 flex justify-center items-center">
                        <div
                            className="flex flex-col md:flex-row items-center  bg-white py-8 px-8 bg-opacity-70 rounded-lg gap-2 text-xl">
                            <div
                                className="mb-5 text-center">
                                <img
                                    className="md:w-24 duration-300 md:h-24 w-2/3 object-cover rounded-full"
                                    src={AuthUser?.photoURL} alt="" />
                                {/* <MdVerifiedUser size={20}
                                className="text-blue-700 absolute -translate-y-[60/api/dashboard/:emailpx] md:-translate-y-24 z-20" /> */}
                            </div>
                            <div className="">
                                <p className="flex items-center gap-1 text-sm md:text-xl">
                                    {/* <span className="font-semibold  text-green-700">Username:</span> */}

                                </p>
                                <p className="text-sm md:text-xl"><span className="font-semibold text-green-700">Email</span>: {AuthUser?.email}</p>
                                <p className="text-sm md:text-xl"><span className="font-semibold text-green-700">User Status</span>: {isAdmin ==true ? "Admin" : "User"}</p>
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
                            </div>
                        </div>

                    </div>
                    {/* asset data  */}
                    <div className=" bg-white py-8 px-8 bg-opacity-70 rounded-lg border">
                        <p className="text-xl font-semibold text-green-700 mb-2 ">Financial States</p>
                        <p className="text-3xl lg:text-4xl font-extrabold mb-6">{AssetBalance} USD</p>
                        {/* Print Btn  */}
                        <button onClick={downloadPdf} className="fullWidthSharedBtn"> <ImCloudDownload className=" mr-2 text-2xl" /> My Report </button>
                    </div>
                </div>
            </div>



            <div className="flex lg:flex-row flex-col gap-4">
                {/* Graph */}
                <div>
                    <h1 className="text-4xl my-8 font-bold text-start text-green-700"> Transaction Summary</h1>
                    {/* income and expense by category (pie chart) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-[50vw]">
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
                    <div>
                        <div data-aos="fade-up" data-aos-duration="1000" className="border my-4 lg:w-[50vw] rounded-md">
                            <Chart
                                chartType="LineChart"
                                width="100%"
                                height="400px"
                                data={lineData}
                                options={options}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl my-8 font-bold text-start text-green-700">Suggested Blog</h1>
                    <div className="w-[20vw]  h-full rounded-md">
                    {
                    blogs?.map(blog => (
                        <div key={blog._id} className="
                            rounded-lg shadow-lg cursor-pointer mb-4
                           
                            bg-white text-gray-800 border-gray-200 border-2
                        ">
                            <div className="
                                 h-full w-full
                            ">
                                <Link to={`/blogs/${blog._id}`} className="flex flex-col ">
                                    <img alt="blog photo" src={blog.blogImg} className="object-cover w-80 h-40"/>
                                    <div className=" p-4 bg-white  ">
                                        <p className="mb-2 text-xl font-medium text-gray-800 ">
                                            {blog.title}
                                        </p>
                                        <p className="font-light text-gray-400  text-md">
                                            {blog.content.replace(/<[^>]*>?/gm, '').split(' ').slice(0, 20).join(' ')}...
                                        </p>
                                    </div>

                                    <div className="flex items-center m-4 mt-auto">
                                        <a href="#" className="relative block">
                                            <img alt="profil" src={blog.userImg} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                        </a>
                                        <div className="flex flex-col justify-between ml-4 text-sm">
                                            <p className="text-gray-800 ">
                                                {blog.userName}
                                            </p>
                                            <p className="text-gray-400 ">
                                                {new Date(blog.createdAt).toLocaleDateString()} - Likes: { blog.likes} 
                                                {/* {Math.floor(blog.content.split(' ').length / 150)} min read */}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
                }
                    </div>
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