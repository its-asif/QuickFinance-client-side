import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";


const BudgetPlanning = () => {
    const axiosPublic = useAxiosPublic();
    const { AuthUser } = useAuth();

    const userEmail = AuthUser?.email;

    // State variables for each input field
    const [planName, setPlanName] = useState("");
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

    const handleSubmit = async (e) => {
        e.preventDefault();

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
        };

        console.log(budgetData);

        const budgetDataRes = await axiosPublic?.post("/api/budget", budgetData);
        console.log(budgetDataRes.data);
        if (budgetDataRes?.data.userEmail) {
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


    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className=''>
                <div className="">
                    {/* <select name="plan" className="select focus:border-0  select-bordered rounded-none">
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                </select> */}
                    <div className="mb-6">
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

                    <h1 className="bg-gray-200  text-xl p-4">Income  <p>Total Income: </p> </h1>
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
                            <p>{homePay}</p>
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
                            <p>{partnerPay}</p>
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
                            <p>{bonusPay}</p>
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
                            <p>{investmentsPay}</p>
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
                            <p>{familyPay}</p>
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
                            <p>{otherPay}</p>
                        </div>


                    </div>

                    <h1 className="bg-gray-200  text-xl p-4">Expense  <p>Total Expense: </p></h1>
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
                            <p>{rentExpense}</p>
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
                            <p>{utilitiesExpense}</p>
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
                            <p>{groceriesExpense}</p>
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
                            <p>{entertainmentExpense}</p>
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
                            <p>{medicalExpense}</p>

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
                            <p>{otherExpense}</p>
                        </div>

                    </div>
                </div>
                <input type="submit" value="Main total" className="btn btn-primary" />

            </form>
        </div>
    );
};

export default BudgetPlanning;
