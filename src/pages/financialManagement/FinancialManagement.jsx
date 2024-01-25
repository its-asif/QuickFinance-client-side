import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "./../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import UserFinancialDataTable from "./userFinancialDataTable/UserFinancialDataTable";
import useFinanceData from "../../hooks/useFinanceData";


const FinancialManagement = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();

    // To Do -- change the email after authentication part complete
    const email = "teamundefined@gmail.com"

    const [financialManagementData, , refetch] = useFinanceData()
    const userFinancialData = financialManagementData.filter(data => data.userEmail === email);
    console.log(userFinancialData);

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
                title: "Task Added",
                showConfirmButton: false,
                timer: 1500
            });
            refetch()
            reset();
        }

    }

    return (
        <div>
            <div className="pt-32 pb-32">

                {/* Add List */}
                <div className="text-center">
                    <div className={`btn btn-wide font-semibold text-lg ${isFormOpen ? "btn-error text-white" : "btn-warning"}`}
                        onClick={() => setIsFormOpen(!isFormOpen)}
                    >
                        {isFormOpen ? 'Close Form' : 'Add a Management Task'}
                    </div>
                </div>

                {/* Form - input listname, description, id(auto) */}
                {isFormOpen &&


                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-5 md:mx-auto mt-12">
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    {...register('userEmail', { required: true })}
                                    type="email"
                                    name="userEmail"
                                    id="userEmail"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="userEmail" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Email</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    {...register('trxCategory', { required: true })}
                                    type="text"
                                    name="trxCategory"
                                    id="trxCategory"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="trxCategory" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Transaction Category</label>
                            </div>

                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                {...register('trxDetails')}
                                type="text"
                                name="trxDetails"
                                id="trxDetails"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            />
                            <label htmlFor="trxDetails" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Transaction Details</label>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    {...register('amount', { required: true, min: 0 })}
                                    type="number"
                                    name="amount"
                                    id="amount"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="amount" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Amount</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <select
                                    {...register('trxType', { required: true })}
                                    required
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    name="trxType"
                                    id="trxType"
                                >
                                    <option disabled selected>Select Transaction Type</option>
                                    <option value="expense">Expense</option>
                                    <option value="income">Income</option>
                                </select>
                            </div>

                        </div>
                        <input
                            type="submit"
                            value="Add Transaction"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:focus:ring-blue-800"
                        />
                    </form>


                }
                <div className="overflow-x-auto">
                    <table className="table max-w-3xl mx-auto text-center mt-10">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Trx Type</th>
                                <th>Trx Category</th>
                                <th>Trx Amount</th>
                                <th>Trx Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
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
    );
};

export default FinancialManagement;