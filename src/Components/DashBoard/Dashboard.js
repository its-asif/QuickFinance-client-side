import useAuth from "../../Hooks/useAuth";
import { MdVerified } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import React from "react";
import { Chart } from "react-google-charts";
const Dashboard = () => {
    const { AuthUser } = useAuth()
    const axiosPublic = useAxiosPublic();
    const [data, setData] = useState([]);
    useEffect(() => {
        axiosPublic.get("/api/dashboard/" + AuthUser?.email)
        .then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    }, [AuthUser]);


    // {
    //     "email": "watagif68@trackden.com",
    //     "totalExpense": 45,
    //     "totalIncome": 845,
    //     "balance": 800,
    //     "TrxByDate": [
    //         {
    //             "_id": {
    //                 "date": "2024-01-26",
    //                 "trxType": "income"
    //             },
    //             "totalAmount": 845,
    //             "count": 2
    //         },
    //         {
    //             "_id": {
    //                 "date": "2024-01-26",
    //                 "trxType": "expense"
    //             },
    //             "totalAmount": 45,
    //             "count": 1
    //         }
    //     ],
    //     "incomeByDate": [
    //         {
    //             "_id": {
    //                 "date": "2024-01-26",
    //                 "trxType": "income"
    //             },
    //             "totalAmount": 845,
    //             "count": 2
    //         }
    //     ],
    //     "expenseByDate": [
    //         {
    //             "_id": {
    //                 "date": "2024-01-26",
    //                 "trxType": "expense"
    //             },
    //             "totalAmount": 45,
    //             "count": 1
    //         }
    //     ],
    //     "incomeByCategory": [
    //         {
    //             "_id": {
    //                 "trxCategory": "Salary"
    //             },
    //             "totalAmount": 500,
    //             "count": 1
    //         },
    //         {
    //             "_id": {
    //                 "trxCategory": "Business"
    //             },
    //             "totalAmount": 345,
    //             "count": 1
    //         }
    //     ],
    //     "expenseByCategory": [
    //         {
    //             "_id": {
    //                 "trxCategory": "Transportation"
    //             },
    //             "totalAmount": 45,
    //             "count": 1
    //         }
    //     ],
    //     "incomeByCategoryOfCurrentMonth": [
    //         {
    //             "_id": {
    //                 "trxCategory": "Salary"
    //             },
    //             "totalAmount": 500,
    //             "count": 1
    //         },
    //         {
    //             "_id": {
    //                 "trxCategory": "Business"
    //             },
    //             "totalAmount": 345,
    //             "count": 1
    //         }
    //     ],
    //     "expenseByCategoryOfCurrentMonth": [
    //         {
    //             "_id": {
    //                 "trxCategory": "Transportation"
    //             },
    //             "totalAmount": 45,
    //             "count": 1
    //         }
    //     ],
    //     "maxTrxOfCurrentMonth": {
    //         "mostExpenseCategory": "Transportation",
    //         "maxExpense": 45,
    //         "mostIncomeCategory": "Salary",
    //         "maxIncome": 500
    //     }
    // }
    

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

    // console.log(AuthUser);
    return (
        <div className="pt-20 mb-4 lg:max-w-screen-xl overflow-hidden ">

            {/* Profile section */}
            <div data-aos="zoom-in-right" data-aos-duration="3000"  className=" w-fit p-10 py-6 rounded-md shadow-xl mx-auto my-4">
                {/* profile */}
                <div className="flex items-center gap-2 text-xl">
                    <div>
                        <img className="md:w-24 w-14 h-14 md:h-24 object-cover rounded-full border-[3.5px] border-green-700 " src={AuthUser?.photoURL} alt="" />
                        <MdVerifiedUser size={20} className="text-green-700 absolute -translate-y-[60/api/dashboard/:emailpx] md:-translate-y-24 z-20"/>
                    </div>
                    <div className="">
                        <p className="flex items-center gap-1">
                            <span className="font-semibold text-green-700">Username:</span>
                            {AuthUser?.displayName}  {AuthUser?.emailVerified ? <MdVerified className="text-green-700" /> : ""}
                        </p>
                        <p><span className="font-semibold text-green-700">Email</span>: {AuthUser?.email}</p>
                        {/* <p className="hidden md:flex gap-2"><span className="font-semibold text-green-700">UId:</span> {AuthUser?.uid}</p> */}
                        {/* <p className="hidden md:flex gap-2"><span className="font-semibold text-green-700">Last Sign In At:</span> {AuthUser?.metadata.lastSignInTime}</p> */}
                {/* expencess and income*/}
                    <div className="mt-2">
                        <p className="text-md font-semibold"><span className=" pr-3 text-green-700"
                        >Total Balance:</span>{data?.balance} TK</p>

                        <p className="text-md font-semibold"><span className="  text-green-700"
                        >Total Expenses:</span> {data?.totalExpense} Tk</p>

                        <p className="text-md font-semibold"><span className="  text-green-700"
                        >Total Income:</span> {data?.totalIncome} Tk</p>
                    </div>
                    </div>
                </div>
            </div>

            <div>

                <div  className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        </div>
    );
};

export default Dashboard;