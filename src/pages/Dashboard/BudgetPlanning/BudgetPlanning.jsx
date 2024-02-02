/* eslint-disable react-hooks/exhaustive-deps */
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";


const BudgetPlanning = () => {
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [summary, setSummary] = useState('')
    useEffect(() => {
        if (totalIncome < totalExpense) {
            setSummary(`You are spending more than you earn. (i.e Income: ${totalIncome} vs Expenses: ${totalExpense})`)
        }
        else if (totalExpense == totalIncome) {
            setSummary('')
        }
        else {
            setSummary(`Your budget is in surplus. (i.e Income: ${totalIncome} Tk vs Expenses: ${totalExpense} Tk) `)
        }
    }, [totalIncome, totalExpense])

    const axiosPublic = useAxiosPublic();
    const { AuthUser } = useAuth();

    const userEmail = AuthUser?.email;

    const calculateTotals = () => {
        const incomeValues = [homePay, partnerPay, bonusPay, investmentsPay, familyPay, otherPay];
        const expenseValues = [rentExpense, utilitiesExpense, groceriesExpense, entertainmentExpense, medicalExpense, otherExpense];

        const incomeTotal = incomeValues.reduce((acc, value) => acc + value, 0);
        const expenseTotal = expenseValues.reduce((acc, value) => acc + value, 0);

        setTotalIncome(parseFloat(incomeTotal.toFixed(2)));
        setTotalExpense(parseFloat(expenseTotal.toFixed(2)));
    };

    // State variables for each input field
    const [homePay, setHomePay] = useState(0);
    const [partnerPay, setPartnerPay] = useState(0);
    const [bonusPay, setBonusPay] = useState(0);
    const [investmentsPay, setInvestmentsPay] = useState(0);
    const [familyPay, setFamilyPay] = useState(0);
    const [otherPay, setOtherPay] = useState(0);
    const [medicalExpense, setMedicalExpense] = useState(0);
    const [rentExpense, setRentExpense] = useState(0);
    const [utilitiesExpense, setUtilitiesExpense] = useState(0);
    const [groceriesExpense, setGroceriesExpense] = useState(0);
    const [entertainmentExpense, setEntertainmentExpense] = useState(0);
    const [otherExpense, setOtherExpense] = useState(0);

    const handleInputChange = (e, setter) => {
        setter(parseFloat(e.target.value) || 0);
    };

    useEffect(() => {
        calculateTotals();
    }, [homePay, partnerPay, bonusPay, investmentsPay, familyPay, otherPay, rentExpense, utilitiesExpense, groceriesExpense, entertainmentExpense, medicalExpense, otherExpense]);

    const handleSubmit = async (e) => {

        e.preventDefault();
        const planName = e.target.planName.value
        const budgetData = {
            planName,
            homePay,
            partnerPay,
            bonusPay,
            investmentsPay,
            familyPay,
            otherPay,
            medicalExpense,
            rentExpense,
            utilitiesExpense,
            groceriesExpense,
            entertainmentExpense,
            otherExpense,
            userEmail,
        }

        console.log(budgetData);

        const budgetDataRes = await axiosPublic.post("/api/budget", budgetData);
        console.log(budgetDataRes.data);
        if (budgetDataRes?.data.planName) {
            // show success popup
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "budgetData Added",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }

    // budget chart data 
    const chartData = [
        ['Category', 'Amount', { role: 'style' }],
        ['Income', totalIncome, '#4CAF50'], // Green
        ['Rent', rentExpense, '#FF5722'], // Orange
        ['Utilities', utilitiesExpense, '#2196F3'], // Blue
        ['Groceries', groceriesExpense, '#FFC107'], // Yellow
        ['Entertainment', entertainmentExpense, '#E91E63'], // Pink
        ['Medical', medicalExpense, '#673AB7'], // Purple
        ['Other', otherExpense, '#FF9800'], // Amber
        ['Family', familyPay, '#9C27B0'], // Deep Purple
        ['Bonus', bonusPay, '#009688'], // Teal
        ['Investments', investmentsPay, '#795548'], // Brown
    ];

    return (
        <div className="mx-2  md:mx-20 mt-4">
            <form
                onSubmit={handleSubmit}
                className=''>
                <div className="">
                    {/* <select name="plan" className="select focus:border-0  select-bordered rounded-none">
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                </select> */}
                    <div className="mb-6 ml-10 md:ml-0">
                        <label htmlFor='planName' className=''>
                            Plan Name
                        </label>
                        <div className='mt-2'>
                            <input
                                required

                                id='planName' name="planName" type="text" className="input input-bordered w-2/3 focus:border-0 rounded-none"
                            />
                        </div>
                    </div>



                    <div className="collapse bg-base-200 mb-2 rounded-none">
                        {/* income section  */}
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            <h1 className="py-2 px-4 flex flex-col md:flex-row justify-between">
                                <span>Income</span>
                                <p>Total Income: {totalIncome} Tk</p>
                            </h1>
                        </div>
                        {/* income Form  */}
                        <div className="collapse-content px-8">

                            <div>
                                <div className='grid grid-cols-1 lg:grid-cols-3 text-center items-center border-2 border-b-0 py-3'>
                                    <label htmlFor='homePay' className=''>
                                        Your take-home pay
                                    </label>
                                    <div className='flex gap-4 mx-4 md:mx-0 my-2 md:my-0'>
                                        <input
                                            onChange={(e) => handleInputChange(e, setHomePay)}
                                            id='homePay'
                                            name="homePay"
                                            type="number"
                                            className="input input-bordered w-2/3 focus:border-0 rounded-none"
                                        />
                                        <select
                                            name="homePayFrequency"
                                            className="select focus:border-0 w-2/3 select-bordered rounded-none"
                                        >
                                            <option value="Monthly">Monthly</option>
                                        </select>
                                    </div>
                                    <p>{homePay} Tk</p>
                                </div>



                                <div className='grid grid-cols-1 lg:grid-cols-3 text-center items-center border-2 py-3 border-b-0 '>
                                    <label htmlFor='partnerPay' className=''>
                                        Your partner take-home pay
                                    </label>
                                    <div className='flex gap-4 mx-4 md:mx-0 my-2 md:my-0'>
                                        <input
                                            onChange={(e) => handleInputChange(e, setPartnerPay)}
                                            id='partnerPay' name="partnerPay" type="number" className="input input-bordered w-2/3 focus:border-0 rounded-none" />
                                        <select name="partnerPayFrequency" className="select focus:border-0 w-2/3 select-bordered rounded-none">
                                            {/* <option value="Weekly">Weekly</option> */}
                                            <option value="Monthly">Monthly</option>
                                            {/* <option value="Yearly">Yearly</option> */}
                                        </select>
                                    </div>
                                    <p>{partnerPay} Tk</p>
                                </div>


                                <div className='grid grid-cols-1 lg:grid-cols-3 text-center items-center border-2 border-b-0  py-3'>
                                    <label htmlFor='bonusPay' className=''>
                                        Bonuses & overtime
                                    </label>
                                    <div className='flex gap-4 mx-4 md:mx-0 my-2 md:my-0'>
                                        <input
                                            onChange={(e) => handleInputChange(e, setBonusPay)}
                                            id='bonusPay' name="bonusPay" type="number" className="input input-bordered w-2/3 focus:border-0 rounded-none" />
                                        <select name="bonusPayFrequency" className="select focus:border-0 w-2/3 select-bordered rounded-none">
                                            {/* <option value="Weekly">Weekly</option> */}
                                            <option value="Monthly">Monthly</option>
                                            {/* <option value="Yearly">Yearly</option> */}
                                        </select>

                                    </div>
                                    <p>{bonusPay} Tk</p>
                                </div>


                                <div className='grid grid-cols-1 lg:grid-cols-3 text-center items-center border-2 border-b-0  py-3'>
                                    <label htmlFor='investmentsPay' className=''>
                                        Income from savings & investments
                                    </label>
                                    <div className='flex gap-4 mx-4 md:mx-0 my-2 md:my-0'>
                                        <input
                                            onChange={(e) => handleInputChange(e, setInvestmentsPay)}
                                            id='investmentsPay' name="investmentsPay" type="number" className="input input-bordered w-2/3 focus:border-0 rounded-none" />
                                        <select name="investmentsPayFrequency" className="select focus:border-0 w-2/3 select-bordered rounded-none">
                                            {/* <option value="Weekly">Weekly</option> */}
                                            <option value="Monthly">Monthly</option>
                                            {/* <option value="Yearly">Yearly</option> */}
                                        </select>
                                    </div>
                                    <p>{investmentsPay} Tk</p>
                                </div>


                                <div className='grid grid-cols-1 lg:grid-cols-3 text-center items-center border-2 border-b-0  py-3'>
                                    <label htmlFor='familyPay' className=''>
                                        Family benefit payments
                                    </label>
                                    <div className='flex gap-4 mx-4 md:mx-0 my-2 md:my-0'>
                                        <input
                                            onChange={(e) => handleInputChange(e, setFamilyPay)}
                                            id='familyPay' name="familyPay" type="number" className="input input-bordered w-2/3 focus:border-0 rounded-none" />
                                        <select name="familyPayFrequency" className="select focus:border-0 w-2/3 select-bordered rounded-none">
                                            {/* <option value="Weekly">Weekly</option> */}
                                            <option value="Monthly">Monthly</option>
                                            {/* <option value="Yearly">Yearly</option> */}
                                        </select>
                                    </div>
                                    <p>{familyPay} Tk</p>
                                </div>


                                <div className='grid grid-cols-1 lg:grid-cols-3 text-center items-center border-2  py-3'>
                                    <label htmlFor='otherPay' className=''>
                                        Other
                                    </label>
                                    <div className='flex gap-4 mx-4 md:mx-0 my-2 md:my-0'>
                                        <input
                                            onChange={(e) => handleInputChange(e, setOtherPay)}
                                            id='otherPay' name="otherPay" type="number" className="input input-bordered w-2/3 focus:border-0 rounded-none" />
                                        <select name="otherPayFrequency" className="select focus:border-0 w-2/3 select-bordered rounded-none">
                                            {/* <option value="Weekly">Weekly</option> */}
                                            <option value="Monthly">Monthly</option>
                                            {/* <option value="Yearly">Yearly</option> */}
                                        </select>
                                    </div>
                                    <p>{otherPay} Tk</p>
                                </div>


                            </div>
                        </div>
                    </div>


                    {/* Expense Section  */}


                    <div className="collapse bg-base-200 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            <h1 className="py-2 px-4 flex flex-col md:flex-row justify-between">
                                <span>Expense</span>
                                <p>Total Expense: {totalExpense} Tk</p>
                            </h1>
                        </div>
                        {/* Expense Form  */}
                        <div className="collapse-content px-8">
                            <div >
                                <div className='grid grid-cols-1 lg:grid-cols-3 text-center items-center border-2 border-b-0 py-3'>
                                    <label htmlFor='rentExpense'>
                                        Rent
                                    </label>
                                    <div className='flex gap-4 mx-4 md:mx-0 my-2 md:my-0'>
                                        <input
                                            onChange={(e) => handleInputChange(e, setRentExpense)}
                                            id='rentExpense' name="rentExpense" type="number" className="input input-bordered w-2/3 focus:border-0 rounded-none" />
                                        <select name="rentExpenseFrequency" className="select focus:border-0 w-2/3 select-bordered rounded-none">
                                            {/* <option value="Weekly">Weekly</option> */}
                                            <option value="Monthly">Monthly</option>
                                            {/* <option value="Yearly">Yearly</option> */}
                                        </select>
                                    </div>
                                    <p>{rentExpense} Tk</p>
                                </div>

                                <div className='grid grid-cols-1 lg:grid-cols-3 text-center items-center border-2 border-b-0 py-3'>
                                    <label htmlFor='utilitiesExpense'>
                                        Utilities
                                    </label>
                                    <div className='flex gap-4 mx-4 md:mx-0 my-2 md:my-0'>
                                        <input
                                            onChange={(e) => handleInputChange(e, setUtilitiesExpense)}
                                            id='utilitiesExpense' name="utilitiesExpense" type="number" className="input input-bordered w-2/3 focus:border-0 rounded-none" />
                                        <select name="utilitiesExpenseFrequency" className="select focus:border-0 w-2/3 select-bordered rounded-none">
                                            {/* <option value="Weekly">Weekly</option> */}
                                            <option value="Monthly">Monthly</option>
                                            {/* <option value="Yearly">Yearly</option> */}
                                        </select>
                                    </div>
                                    <p>{utilitiesExpense} Tk</p>
                                </div>

                                <div className='grid grid-cols-1 lg:grid-cols-3 text-center items-center border-2 border-b-0 py-3'>
                                    <label htmlFor='groceriesExpense'>
                                        Groceries
                                    </label>
                                    <div className='flex gap-4 mx-4 md:mx-0 my-2 md:my-0'>
                                        <input
                                            onChange={(e) => handleInputChange(e, setGroceriesExpense)}
                                            id='groceriesExpense' name="groceriesExpense" type="number" className="input input-bordered w-2/3 focus:border-0 rounded-none" />
                                        <select name="groceriesExpenseFrequency" className="select focus:border-0 w-2/3 select-bordered rounded-none">
                                            {/* <option value="Weekly">Weekly</option> */}
                                            <option value="Monthly">Monthly</option>
                                            {/* <option value="Yearly">Yearly</option> */}
                                        </select>
                                    </div>
                                    <p>{groceriesExpense} Tk</p>
                                </div>

                                <div className='grid grid-cols-1 lg:grid-cols-3 text-center items-center border-2 border-b-0 py-3'>
                                    <label htmlFor='entertainmentExpense'>
                                        Entertainment
                                    </label>
                                    <div className='flex gap-4 mx-4 md:mx-0 my-2 md:my-0'>
                                        <input
                                            onChange={(e) => handleInputChange(e, setEntertainmentExpense)}
                                            id='entertainmentExpense' name="entertainmentExpense" type="number" className="input input-bordered w-2/3 focus:border-0 rounded-none" />
                                        <select name="entertainmentExpenseFrequency" className="select focus:border-0 w-2/3 select-bordered rounded-none">
                                            {/* <option value="Weekly">Weekly</option> */}
                                            <option value="Monthly">Monthly</option>
                                            {/* <option value="Yearly">Yearly</option> */}
                                        </select>
                                    </div>
                                    <p>{entertainmentExpense} Tk</p>
                                </div>

                                <div className='grid grid-cols-1 lg:grid-cols-3 text-center items-center border-2 border-b-0  py-3'>
                                    <label htmlFor='medicalExpense'>
                                        Medical
                                    </label>
                                    <div className='flex gap-4 mx-4 md:mx-0 my-2 md:my-0'>
                                        <input
                                            onChange={(e) => handleInputChange(e, setMedicalExpense)}
                                            id='medicalExpense' name="medicalExpense" type="number" className="input input-bordered w-2/3 focus:border-0 rounded-none" />
                                        <select name="medicalExpenseFrequency" className="select focus:border-0 w-2/3 select-bordered rounded-none">
                                            {/* <option value="Weekly">Weekly</option> */}
                                            <option value="Monthly">Monthly</option>
                                            {/* <option value="Yearly">Yearly</option> */}
                                        </select>
                                    </div>
                                    <p>{medicalExpense} Tk</p>

                                </div>

                                <div className='grid grid-cols-1 lg:grid-cols-3 text-center items-center border-2 py-3'>
                                    <label htmlFor='otherExpense'>
                                        Other
                                    </label>
                                    <div className='flex gap-4 mx-4 md:mx-0 my-2 md:my-0'>
                                        <input
                                            onChange={(e) => handleInputChange(e, setOtherExpense)}
                                            id='otherExpense' name="otherExpense" type="number" className="input input-bordered w-2/3 focus:border-0 rounded-none" />
                                        <select name="otherExpenseFrequency" className="select focus:border-0 w-2/3 select-bordered rounded-none">
                                            {/* <option value="Weekly">Weekly</option> */}
                                            <option value="Monthly">Monthly</option>
                                            {/* <option value="Yearly">Yearly</option> */}
                                        </select>
                                    </div>
                                    <p>{otherExpense} Tk</p>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>

                <h1 className="text-gray-50 pl-8 mt-2 py-6 pr-[60px]  bg-blue-400">
                    <div className="text-2xl font-medium flex flex-col md:flex-row justify-between">
                        <span className="">Summary</span>
                        <p className=""> {totalIncome - totalExpense} Tk </p>
                    </div>
                    <h1 className="mt-2 text-xl">{summary}</h1>
                </h1>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <Chart
                        width={'100%'}
                        height={'400px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={chartData}
                        options={{
                            title: 'Income vs Expense',
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>

                <input type="submit" value="Save Data" className="btn btn-wide bg-[#399b53] text-white mt-4" />

            </form>



        </div>
    );
};

export default BudgetPlanning;
