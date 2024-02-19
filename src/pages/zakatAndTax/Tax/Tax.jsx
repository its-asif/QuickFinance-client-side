import { useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { BsCalculatorFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaDonate } from "react-icons/fa";
const Tax = () => {
    const [earn, setEarn] = useState(null);
    const [expense, setExpense] = useState(null);
    const [total, setTotal] = useState(null);
    const [tax, setTax] = useState(null);

    const handleClose = () => {
        const modal = document.getElementById('my_modal_3_');
        if (modal) {
            modal.showModal();
        }
        setEarn(0);
        setExpense(0);
        setTotal(0);
        setTax(0);
        const form = document.getElementById('taxSection');
        if (form) {
            form.reset();
        }
    };

    const handleCalculate = e => {
        e.preventDefault();
        const form = e.target;
        const homeCash = parseFloat(form.homeCash.value) || 0;
        const bankCash = parseFloat(form.bankCash.value) || 0;
        const investmentCash = parseFloat(form.investmentCash.value) || 0;
        const otherCash = parseFloat(form.otherCash.value) || 0;
        const debtCash = parseFloat(form.debtCash.value) || 0;
        const expenseCash = parseFloat(form.expenseCash.value) || 0;
        const gender = form.gender.value;
        const age = parseInt(form.age.value) || 0;
        const location = form.location.value;

        const totalEarn = homeCash + bankCash + investmentCash + otherCash;
        setEarn(totalEarn);

        const totalExpense = debtCash + expenseCash;
        setExpense(totalExpense);

        const totalAmount = totalEarn - totalExpense;
        setTotal(totalAmount);

        let totalTax = 0;

        if (totalAmount <= 350000) {
            setTax('Not Applicable');
        } else {
            if (totalAmount <= 450000) {
                totalTax = (totalAmount - 350000) * 0.05;
            } else if (totalAmount <= 750000) {
                totalTax = (totalAmount - 450000) * 0.10 + (100000 * 0.05);
            } else if (totalAmount <= 1150000) {
                totalTax = (totalAmount - 750000) * 0.15 + (300000 * 0.10) + (100000 * 0.05);
            } else if (totalAmount <= 1650000) {
                totalTax = (totalAmount - 1150000) * 0.20 + (400000 * 0.15) + (300000 * 0.10) + (100000 * 0.05);
            } else {
                totalTax = (totalAmount - 1650000) * 0.25 + (500000 * 0.20) + (400000 * 0.15) + (300000 * 0.10) + (100000 * 0.05);
            }

            // Additional tax adjustments based on location
            if (totalAmount > 350000) {
                if (location === 'Dhaka' || location === 'Chattogram') {
                    if (totalTax < 5000) {
                        totalTax = 5000
                    }

                } else if (location === 'other city corporation areas') {
                    if (totalTax < 4000) {
                        totalTax = 4000
                    }
                } else {
                    if (totalTax < 3000) {
                        totalTax = 3000
                    }
                }
            }

            // Additional tax adjustments based on gender and age
            if ((gender === 'female' || age > 65) && totalAmount <= 400000) {
                totalTax = 0;
            }

            if (age <= 18) {
                totalTax = 0
            }

            setTax(totalTax.toFixed(2));
            localStorage.setItem('tax_money', totalTax)
        }
    };

    return (
        <div>
            <button className="sharedBtn flex items-center gap-1" onClick={handleClose}><span>Calculate Tax</span> <BsCalculatorFill /></button>

            <dialog id="my_modal_3_" className="modal">
                <div className="modal-box w-11/12 max-w-5xl p-10 rounded-none modalBg">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <form id="taxSection" onSubmit={handleCalculate}>
                        <p className="text-center text-4xl font-bold mb-10">Calculate Tax</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="p-4">
                                <div className="mb-6">
                                    <label className="text-sm mb-2 block">Cash at Home</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="homeCash"
                                            type="number"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="text-sm mb-2 block">Balance Held in Bank Accounts</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="bankCash"
                                            type="number"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="text-sm mb-2 block">Investment</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="investmentCash"
                                            type="number"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className=" p-4">
                                <div className="mb-6">
                                    <label className="text-sm mb-2 block">Other Income</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="otherCash"
                                            type="number"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="text-sm mb-2 block">Deduct Debts</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="debtCash"
                                            type="number"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="text-sm mb-2 block">Deduct Expenses</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="expenseCash"
                                            type="number"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className=" p-4">
                                {/* Input fields for location, gender, and age */}
                                <div className="mb-6">
                                    <label className="text-sm mb-2 block">Location</label>
                                    <div className="relative flex items-center">
                                        <select
                                            name="location"
                                            required
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        >
                                            <option value="Dhaka">Dhaka</option>
                                            <option value="Chattogram">Chattogram</option>
                                            <option value="other city corporation areas">Other City Corporation Areas</option>
                                            <option value="non-city corporation areas">Non-City Corporation Areas</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="text-sm mb-2 block">Gender</label>
                                    <div className="relative flex items-center">
                                        <select
                                            name="gender"
                                            required
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="text-sm mb-2 block">Age</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="age"
                                            type="number"
                                            required
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                            </div>


                        </div>
                        <button
                            onClick={() => {
                                document.getElementById('my_modal_tax').showModal(),
                                    document.getElementById('my_modal_3_').close()
                            }} type="submit" className="fullWidthSharedBtn flex items-center gap-1" >
                            <span>Calculate Your Tax</span> <BsCalculatorFill />
                        </button>
                    </form>

                    {/* modal body  */}
                    <dialog id="my_modal_tax" className="modal">
                        <div className="modal-box">
                            <div>
                                <div className="flex flex-col w-2/3 py-4 mx-auto text-lg">

                                    <div className="">
                                        <p className="mb-2 flex justify-between">Total Earn : <span className="flex justify-center items-center gap-1">{earn} <FaBangladeshiTakaSign /></span></p>

                                        <p className="mb-2 flex justify-between">Total Expense : <span className="flex justify-center items-center gap-1">{expense} <FaBangladeshiTakaSign /></span></p>

                                        <p className="mb-2 flex justify-between">Current Amount : <span className="flex justify-center items-center gap-1">{total}<FaBangladeshiTakaSign /></span></p>

                                        <p className="mb-2 flex justify-between text-xl mt-4 font-bold">Tax Amount: <span className="flex justify-center items-center gap-1">{tax} <FaBangladeshiTakaSign /></span></p>
                                    </div>
                                    <Link to='/donateTax'>
                                        <div className="mt-6">
                                            <button className="fullWidthSharedBtn ">
                                                <FaDonate className="mr-4" />Pay Your Tax
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>

                </div>
            </dialog>
            {/* modal body  */}
            <dialog id="my_modal_tax" className="modal">
                <div className="modal-box modalBg">
                    <div>
                        <div className="flex flex-col w-2/3 py-4 mx-auto text-lg">

                            <div className="">
                                <p className="mb-2 flex justify-between">Total Earn : <span className="flex justify-center items-center gap-1">{earn} <FaBangladeshiTakaSign /></span></p>

                                <p className="mb-2 flex justify-between">Total Expense : <span className="flex justify-center items-center gap-1">{expense} <FaBangladeshiTakaSign /></span></p>

                                <p className="mb-2 flex justify-between">Current Amount : <span className="flex justify-center items-center gap-1">{total}<FaBangladeshiTakaSign /></span></p>

                                <p className="mb-2 flex justify-between text-xl mt-4 font-bold">Tax Amount: <span className="flex justify-center items-center gap-1">{tax} <FaBangladeshiTakaSign /></span></p>
                            </div>


                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div></div>
        </div>
    );
};

export default Tax;
