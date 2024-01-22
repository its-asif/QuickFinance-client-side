import { useState } from "react";

const Tax = () => {

    const [earn, setEarn] = useState(null)
    const [expense, setExpense] = useState(null)
    const [total, setTotal] = useState(null)
    const [tax, setTax] = useState(null)

    const handleClose = () => {
        document.getElementById('my_modal_3_').showModal()
        setEarn(0)
        setExpense(0)
        setTotal(0)
        setTax(0)
        const form = document.getElementById('taxSection');
        if (form) {
            form.reset();
        }


    }

    const handleCalculate = e => {
        e.preventDefault()
        const form = e.target
        const homeCash = parseFloat(form.homeCash.value) || 0
        const bankCash = parseFloat(form.bankCash.value) || 0
        const investmentCash = parseFloat(form.investmentCash.value) || 0
        const otherCash = parseFloat(form.otherCash.value) || 0
        const debtCash = parseFloat(form.debtCash.value) || 0
        const expenseCash = parseFloat(form.expenseCash.value) || 0

        const totalEarn = homeCash + bankCash + investmentCash + otherCash
        setEarn(totalEarn)

        const totalExpense = debtCash + expenseCash
        setExpense(totalExpense)

        const totalAmount = totalEarn - totalExpense
        setTotal(totalAmount)



        if (totalAmount <= 350000) {
            setTax('Not Applicable');
        } else if (totalAmount > 350000 && totalAmount <= 450000) {
            const sumTax = (totalAmount - 350000) * 0.05;
            const totalTax = sumTax.toFixed(2);
            setTax(totalTax);
        } else if (totalAmount > 450000 && totalAmount <= 750000) {
            const sumTax = (totalAmount - 450000) * 0.10 + (100000 * 0.05);
            const totalTax = sumTax.toFixed(2);
            setTax(totalTax);
        } else if (totalAmount > 750000 && totalAmount <= 1150000) {
            const sumTax = (totalAmount - 750000) * 0.15 + (300000 * 0.10) + (100000 * 0.05);
            const totalTax = sumTax.toFixed(2);
            setTax(totalTax);
        } else if (totalAmount > 1150000 && totalAmount <= 1650000) {
            const sumTax = (totalAmount - 1150000) * 0.20 + (400000 * 0.15) + (300000 * 0.10) + (100000 * 0.05);
            const totalTax = sumTax.toFixed(2);
            setTax(totalTax);
        } else {
            const sumTax = (totalAmount - 1650000) * 0.25 + (500000 * 0.20) + (400000 * 0.15) + (300000 * 0.10) + (100000 * 0.05);
            const totalTax = sumTax.toFixed(2);
            setTax(totalTax);
        }



    }


    return (
        <div>
            <button className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-[#399b53] bg-[#399b53] btn hover:bg-transparent hover:text-black transition-all duration-300" onClick={handleClose}>Calculate Your Tax</button>

            <dialog id="my_modal_3_" className="modal">

                <div className="modal-box w-11/12 max-w-5xl p-10 rounded-none">

                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <form id="taxSection" onSubmit={handleCalculate}>
                        <p className="text-center text-4xl font-bold mb-10">Calculate Tax</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                                    <label className="text-sm mb-2 block">
                                        Balance Held in Bank Accounts
                                    </label>
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

                            <div className="text-lg font-bold bg-gray-200 p-4">
                                <p className="mb-2">Total Earn : {earn}</p>
                                <p className="mb-2">Total Expense : {expense}</p>
                                <p className="mb-2">Current Amount : {total} </p>
                                <p className="mb-2 text-xl mt-4 border-2 border-gray-600 p-2">Tax : {tax}</p>
                                <input type="submit" value="Calculate" className="mt-16 btn w-full bg-blue-400 rounded-none" />
                            </div>
                        </div>
                    </form>

                    <div>
                        <div className="max-w-6xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
                            <h2 className="text-2xl font-bold mb-4">Income Tax Brackets</h2>
                            <ul className="flex flex-col space-y-4">
                                <li className="flex justify-between">
                                    <span>Up to BDT 350,000</span>
                                    <span>Nil</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Over BDT 350,000 up to 450,000 (next BDT 100,000)</span>
                                    <span>5%</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Over BDT 450,000 up to 750,000 (next BDT 300,000)</span>
                                    <span>10%</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Over BDT 750,000 up to 1,150,000 (next BDT 400,000)</span>
                                    <span>15%</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Over BDT 1,150,000 up to 1,650,000 (next BDT 500,000)</span>
                                    <span>20%</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Over BDT 1,650,000</span>
                                    <span>25%</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </dialog>

            <div>

            </div>
        </div>
    );
};

export default Tax;