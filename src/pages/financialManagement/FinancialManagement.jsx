import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UserFinancialDataTable from "./userFinancialDataTable/UserFinancialDataTable";
import useAuth from "../../Hooks/useAuth";
import bg from "/finance.jpg"
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useFinanceData from "../../Hooks/useFinanceData";
import DashboardHeader from "../../Components/header/DashboardHeader";

const FinancialManagement = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const { loading, AuthUser } = useAuth();

    const email = AuthUser?.email;

    const { financialManagementData, refetch } = useFinanceData()
    const userFinancialData = financialManagementData.filter(data => data.userEmail === email);
    // console.log(financialManagementData);

    const onSubmit = async (data) => {

        const financialItem = {
            userEmail: data.userEmail,
            trxType: data.trxType,
            trxCategory: data.trxCategory,
            amount: data.amount,
            trxDetails: data.trxDetails,
        };
        const financialItemRes = await axiosPublic?.post('/api/transactions', financialItem);
        console.log(financialItemRes.data)
        if (financialItemRes?.data.userEmail) {
            // show success popup
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Transaction Added",
                showConfirmButton: false,
                timer: 1500
            });
            // console.log(financialItemRes.data)
            refetch()
        }

    }

    if (loading) {
        return <h1 className="pt-32 text-lg">Loading...</h1>
    }

    return (

        <div className={` `}>

            {/* Banner section */}
            <div className="md:ml-20">
            <DashboardHeader smallTitle={"Calculate Your"} largeTitle={"Transactions"} imgSrc={"https://i.ibb.co/jzv23G8/saving.png"} />
            </div>

            <div className="pt-10 pb-32 z-[3] md:mx-32">

                <div className="bg-white bg-opacity-95 max-w-screen-lg py-5 shadow-xl rounded-xl opacity-96 mx-auto">
                    {/* Add List */}
                    <div className="text-center ">
                        <div className={`btn md:btn-wide font-semibold text-lg ${isFormOpen ? "btn bg-red-500 hover:bg-red-600  text-white" : "btn-warning"}`}
                            onClick={() => setIsFormOpen(!isFormOpen)}
                        >
                            {isFormOpen ? 'Close Form' : 'Add Transaction'}
                        </div>
                    </div>

                    {/* Form - input listname, description, id(auto) */}
                    {isFormOpen &&


                        <form onSubmit={handleSubmit(onSubmit)} className="mx-5 md:mx-auto p-8 mt-12">
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        {...register('userEmail', { required: true })}
                                        type="email"
                                        name="userEmail"
                                        id="userEmail"
                                        value={email}
                                        readOnly
                                        className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                                        placeholder=" "
                                        required
                                    />
                                    <label htmlFor="userEmail" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">User Email</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <select
                                        {...register('trxType', { required: true })}
                                        required
                                        className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                                        name="trxType"
                                        id="trxType"
                                    >
                                        <option disabled selected>Select Transaction Type</option>
                                        <option value="expense">Expense</option>
                                        <option value="income">Income</option>
                                    </select>
                                </div>

                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    {...register('amount', { required: true, min: 0 })}
                                    type="number"
                                    name="amount"
                                    id="amount"

                                    className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="amount" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Amount</label>
                            </div>

                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        {...register('trxDetails')}
                                        type="text"
                                        name="trxDetails"
                                        id="trxDetails"
                                        className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                                        placeholder=" "
                                    />
                                    <label htmlFor="trxDetails"
                                        className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                                    >Transaction Details <small>(eg: BreakFast, ABC Office)</small></label>
                                </div>


                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        {...register('trxCategory', { required: true })}
                                        type="text"
                                        name="trxCategory"
                                        id="trxCategory"
                                        className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                                        placeholder=" "
                                        required
                                    />
                                    <label htmlFor="trxCategory" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                                    >Transaction Category <small>(eg: Food, Salary)</small></label>
                                </div>

                            </div>

                            <input
                                type="submit"
                                value="Add Transaction"
                                className="text-white bg-[#399b53] hover:bg-[#399c54] focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:focus:ring-green-500"
                            />
                        </form>


                    }
                    <div className="overflow-x-auto ">
                        <table className="table  mx-auto text-center mt-10" >
                            {/* head */}
                            <thead className="font-semibold md:text-base">
                                <tr>

                                    <th>Trx Type</th>
                                    <th>Trx Category</th>
                                    <th>Trx Amount</th>
                                    <th>Trx Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* rows */}
                                {
                                    userFinancialData.map(userFinancialDataTable => <UserFinancialDataTable key={userFinancialDataTable._id} userFinancialDataTable={userFinancialDataTable}></UserFinancialDataTable>)
                                }

                            </tbody>


                        </table>
                    </div>
                    <div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FinancialManagement;