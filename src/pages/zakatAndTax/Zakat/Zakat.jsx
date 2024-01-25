import { useState } from "react";


const Zakat = () => {

    const [earn, setEarn] = useState(null)
    const [expense, setExpense] = useState(null)
    const [total, setTotal] = useState(null)
    const [zakat, setZakat] = useState(null)

    const handleClose = () => {
        document.getElementById('my_modal_3').showModal()
        setEarn(0)
        setExpense(0)
        setTotal(0)
        setZakat(0)
        const form = document.getElementById('zakatSection');
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



        if (totalAmount < 52000) {
            setZakat('Not Applicable');
        } else {
            let zakatPercentage = .025
            const sumZakat = totalAmount * zakatPercentage
            const totalZakat = sumZakat.toFixed(2);
            setZakat(totalZakat);
        }



    }


    return (
        <div>
            <button className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-[#399b53] bg-[#399b53] btn hover:bg-transparent hover:text-black transition-all duration-300" onClick={handleClose}>Calculate Your Zakat</button>

            <dialog id="my_modal_3" className="modal">

                <div className="modal-box w-11/12 max-w-5xl p-10 rounded-none">

                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <div>
                        <p className="text-center text-4xl font-bold mb-10">Calculate Zakat</p>
                        <form id="zakatSection" onSubmit={handleCalculate} className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                                            placeholder="0"

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
                                <p className="mb-2 text-xl mt-4 border-2 border-gray-600 p-2">Zakat : {zakat}</p>
                                <input type="submit" value="Calculate" className="mt-16 btn w-full bg-blue-400 rounded-none" />
                            </div>
                        </form>
                    </div>

                    <p className="mt-4">* If your total savings are 52,000 BDT or more, you are required to pay Zakat. The Zakat amount is calculated as 2.5% of your total savings.</p>

                </div>

            </dialog>
        </div>
    );
};

export default Zakat;