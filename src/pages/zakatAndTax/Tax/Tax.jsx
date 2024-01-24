import { useState } from "react";

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
        }
    };

    return (
        <div>
            <button className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-[#399b53] bg-[#399b53] btn hover:bg-transparent hover:text-black transition-all duration-300" onClick={handleClose}>Calculate Your Tax</button>

            <dialog id="my_modal_3_" className="modal">
                <div className="modal-box w-11/12 max-w-5xl p-10 rounded-none">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <form id="taxSection" onSubmit={handleCalculate}>
                        <p className="text-center text-4xl font-bold mb-10">Calculate Tax</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="bg-green-300 p-4">
                                <div className="mb-2">
                                    <label className="text-sm mb-2 block">Cash at Home</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="homeCash"
                                            type="number"
                                            className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="text-sm mb-2 block">Balance Held in Bank Accounts</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="bankCash"
                                            type="number"
                                            className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="text-sm mb-2 block">Investment</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="investmentCash"
                                            type="number"
                                            className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-300 p-4">
                                <div className="mb-2">
                                    <label className="text-sm mb-2 block">Other Income</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="otherCash"
                                            type="number"
                                            className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="text-sm mb-2 block">Deduct Debts</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="debtCash"
                                            type="number"
                                            className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="text-sm mb-2 block">Deduct Expenses</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="expenseCash"
                                            type="number"
                                            className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-300 p-4">
                                {/* Input fields for location, gender, and age */}
                                <div className="mb-2">
                                    <label className="text-sm mb-2 block">Location</label>
                                    <div className="relative flex items-center">
                                        <select
                                            name="location"
                                            required
                                            className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                                        >
                                            <option value="Dhaka">Dhaka</option>
                                            <option value="Chattogram">Chattogram</option>
                                            <option value="other city corporation areas">Other City Corporation Areas</option>
                                            <option value="non-city corporation areas">Non-City Corporation Areas</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="text-sm mb-2 block">Gender</label>
                                    <div className="relative flex items-center">
                                        <select
                                            name="gender"
                                            required
                                            className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                                        >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="text-sm mb-2 block">Age</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="age"
                                            type="number"
                                            required
                                            className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="text-lg font-bold bg-gray-200 p-4">
                                <p className="mb-2">Total Earn : {earn}</p>
                                <p className="mb-2">Total Expense : {expense}</p>
                                <p className="mb-2">Current Amount : {total}</p>
                                <p className="mb-2 text-xl mt-4 border-2 border-gray-600 p-2">Tax : {tax}</p>
                                <input type="submit" value="Calculate" className="mt-16 btn w-full bg-blue-400 rounded-none" />
                            </div>
                        </div>
                    </form>

                    <div>
                        <div className="max-w-6xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
                            <h2 className="text-2xl font-bold mb-4">Income Tax Brackets</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="border p-4 rounded-md">
                                    <p className="font-bold mb-2">Up to BDT 350,000</p>
                                    <p>Nil</p>
                                </div>
                                <div className="border p-4 rounded-md">
                                    <p className="font-bold mb-2">Over BDT 350,000 up to 450,000 (next BDT 100,000)</p>
                                    <p>5%</p>
                                </div>
                                <div className="border p-4 rounded-md">
                                    <p className="font-bold mb-2">Over BDT 450,000 up to 750,000 (next BDT 300,000)</p>
                                    <p>10%</p>
                                </div>
                                <div className="border p-4 rounded-md">
                                    <p className="font-bold mb-2">Over BDT 750,000 up to 1,150,000 (next BDT 400,000)</p>
                                    <p>15%</p>
                                </div>
                                <div className="border p-4 rounded-md">
                                    <p className="font-bold mb-2">Over BDT 1,150,000 up to 1,650,000 (next BDT 500,000)</p>
                                    <p>20%</p>
                                </div>
                                <div className="border p-4 rounded-md">
                                    <p className="font-bold mb-2">Over BDT 1,650,000</p>
                                    <p>25%</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold my-4">Additional Rules</h2>
                            <ul className="list-disc pl-4">
                                <li>Threshold for females and taxpayers older than 65 increased to BDT 400,000</li>
                                <li>Consolidated tax exemption: Lesser of BDT 450,000 or one-third of annual salary</li>
                                <li>Minimum tax for individuals with income exceeding BDT 350,000:</li>
                                <ul className="list-disc pl-4">
                                    <li>BDT 5,000 if living in Dhaka and Chattogram city corporation areas</li>
                                    <li>BDT 4,000 if living in other city corporation areas</li>
                                    <li>BDT 3,000 if living in non-city corporation areas</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </dialog>

            <div></div>
        </div>
    );
};

export default Tax;
