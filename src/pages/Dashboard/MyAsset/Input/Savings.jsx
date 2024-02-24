import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BsBank2 } from "react-icons/bs";
import { AuthContext } from "../../../../AuthProvider/Contextapi";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Savings = () => {
    const { AuthUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {

        // Function to calculate the value of the deposit account
        const calculateDepositValue = (amount, interestRate, date) => {
            // Assuming the interest is compounded annually
            const today = new Date();
            const purchaseDate = new Date(date);
            const timeDiff = today.getTime() - purchaseDate.getTime();
            const timeInYears = timeDiff / (1000 * 3600 * 24 * 365); // Convert milliseconds to years
            // console.log(timeInYears);
            // if any one choose feature time 
            if (timeInYears < 0) {
                const value = null;
                console.log('sorry');
                return value;
            }
            else {
                // Convert interest rate to decimal
                const r = parseFloat(interestRate) / 100;

                // Calculate the value of the deposit account using compound interest formula
                const value = parseFloat(amount) * Math.pow(1 + r, timeInYears);
                return value;
            }
        };

        const depositValue = calculateDepositValue(data.amount, data.interestRate, data.date);
        // console.log("Value of the deposit account:", depositValue);
        if (depositValue) {
            const SavingsData = {
                userEmail: AuthUser?.email,
                category: "Savings",
                asset_name: data.accType,
                magnitude: parseFloat(data.amount),
                purchase_date: data.date,
                locale: data.bank,
                value: parseFloat(depositValue.toFixed(3)),
                status: "ups"
            }
            console.log(SavingsData);
            axiosPublic.post('/api/assets', SavingsData)
            .then(res => {
                console.log(res.status);
                if (res.status === 200) {
                    document.getElementById('my_modal_5').close();
                    Swal.fire({
                        title: "Successful",
                        text: "Your Asset Added to Portfolio",
                        icon: "success",
                        confirmButtonColor: "#0ba360",
                        confirmButtonText: 'DONE'
                    });
                    reset()

                }
                else {
                    Swal.fire({
                        title: "oh!",
                        text: "Some Error Occurred",
                        icon: "error",
                        confirmButtonColor: "#0ba360",
                        confirmButtonText: 'DONE'
                    });
                }
            })
        }

    }
    // todo 
    // research for savings  Savings Tracker Service
    return (
        <div className="">
            <h2 className="flex items-center justify-center gap-1 text-center md:text-lg lg:text-xl font-bold"><BsBank2 className="h-4 w-4 md:h-6 md:w-6" /> Savings  <span className="primaryColor">Tracker</span> Service</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-2 flex flex-col justify-center items-center">
                <div className="flex md:flex-row flex-col gap-3 w-full">
                    <div className="flex flex-col mb-4 md:w-[220px] w-full">
                        <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Bank Name</label>
                        <input
                            {...register('bank', { required: true, min: 0 })}
                            type="text"
                            name="bank"

                            className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                            placeholder="e.g., Bangladesh Bank"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4 md:w-[220px] w-full">
                        <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Interest Rate (Annually)</label>
                        <input
                            {...register('interestRate', { required: true, min: 0 })}
                            type="number"
                            name="interestRate"

                            className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                            placeholder="e.g. 4 , 5, 6"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col mb-4 w-full">
                    <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Purchase Date</label>
                    <input
                        {...register('date', { required: true })}
                        type="date"
                        name="date"
                        className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                        required
                    />
                </div>
                <div className="flex md:flex-row flex-col gap-3 w-full">
                    <div className="flex flex-col mb-2 md:w-[220px] w-full">
                        <label htmlFor="property" className="primaryColor text-sm md:text-base font-bold mb-1">Account Type</label>
                        <select
                            {...register('accType', { required: true })}
                            name="accType"
                            className="h-10 rounded-md border border-black focus:border-none"
                            defaultValue="" // Add a default value if needed
                        >
                            <option value="">Select Account Type</option>
                            <option value="Savingse">Savings</option>
                            <option value="Deposit">Deposit</option>
                            <option value="Retirement">Retirement </option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="flex flex-col mb-4 md:w-[220px] w-full">
                        <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Amount</label>
                        <input
                            {...register('amount', { required: true, min: 0 })}
                            type="number"
                            name="amount"

                            className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                            placeholder="e.g. 100000"
                            required
                        />
                    </div>
                </div>
                <button className="fullWidthSharedBtn" type="submit">
                    Add
                </button>
            </form>

            {/* <button onClick={() => { document.getElementById('my_modal_5').close(), console.log('Working') }}>Add</button> */}
        </div>
    );
};

export default Savings;