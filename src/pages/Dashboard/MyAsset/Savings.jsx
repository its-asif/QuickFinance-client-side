import { useForm } from "react-hook-form";

const Savings = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        reset()
    }
    // todo 
    // research for savings  Savings Tracker Service
    return (
        <div className="">
            <h2 className="text-center md:text-lg lg:text-xl font-bold">Savings  <span className="primaryColor">Tracker</span> Service</h2>
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