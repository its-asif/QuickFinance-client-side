import { useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { BsCalculatorFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaDonate } from "react-icons/fa";
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
            setZakat(0);
        } else {
            let zakatPercentage = .025
            const sumZakat = totalAmount * zakatPercentage
            const totalZakat = sumZakat.toFixed(2);
            setZakat(totalZakat);
            localStorage.setItem('zakat_money', totalZakat)
        }



    }


    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1500"
        >
            <button className="sharedBtn flex items-center gap-1" onClick={handleClose}><span>Calculate Zakat</span> <BsCalculatorFill /></button>

            <dialog id="my_modal_3" className="modal">

                <div className="modal-box w-11/12 max-w-5xl p-10 rounded-none modalBg">

                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <div>
                        <p className="text-center text-4xl font-bold mb-10">Calculate Zakat</p>
                        <form id="zakatSection" onSubmit={handleCalculate} >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className=" p-4">
                                    <div className="mb-2">
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
                                    <div className="mb-2">
                                        <label className="text-sm mb-2 block">
                                            Balance Held in Bank Accounts
                                        </label>
                                        <div className="relative flex items-center">
                                            <input
                                                name="bankCash"
                                                type="number"
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder="0"

                                            />
                                        </div>
                                    </div>

                                </div>


                                <div className="p-4">
                                    <div className="mb-2">
                                        <label className="text-sm mb-2 block">Other Income</label>
                                        <div className="relative flex items-center">
                                            <input
                                                name="otherCash"
                                                type="number"
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder="0"
                                            />
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <button
                                onClick={() => { document.getElementById('my_modal_2').showModal(), document.getElementById('my_modal_3').close() }} type="submit" className="fullWidthSharedBtn flex items-center gap-1">
                                <span>Calculate Your Zakat</span> <BsCalculatorFill />
                            </button>
                        </form>
                    </div>
                </div>

            </dialog>
            {/* modal body  */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box modalBg">
                    <div>

                        <div className="flex flex-col w-2/3 py-8 mx-auto text-lg">
                            <div className="">
                                <p className="mb-2 flex justify-between">Total Earn : <span className="flex justify-center items-center gap-1">{earn} <FaBangladeshiTakaSign /></span></p>

                                <p className="mb-2 flex justify-between">Total Expense : <span className="flex justify-center items-center gap-1">{expense} <FaBangladeshiTakaSign /></span></p>

                                <p className="mb-2 flex justify-between">Current Amount : <span className="flex justify-center items-center gap-1">{total}<FaBangladeshiTakaSign /></span></p>

                                <p className="mb-2 text-[#0ba360] flex justify-between text-xl mt-4 font-bold">Zakat Amount: <span className="flex justify-center items-center gap-1">{zakat} <FaBangladeshiTakaSign /></span></p>
                            </div>
                            <Link to='/donateZakat'>
                                <div className="mt-6">
                                    <button className="fullWidthSharedBtn ">
                                        <FaDonate className="mr-4" /> Donate Your Zakat
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
    );
};

export default Zakat;
