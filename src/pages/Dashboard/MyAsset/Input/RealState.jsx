import { useForm } from "react-hook-form";

const RealState = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        reset()
    }
    return (
        <div className="">
            <h2 className="text-center md:text-lg lg:text-xl font-bold">Stock <span className="primaryColor">Asset</span> Manage</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-2">
                <div className="flex flex-col mb-2">
                    <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Property Type</label>
                    <input
                        {...register('stock', { required: true, min: 0 ,})}
                        type="text"
                        name="stock"

                        className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                        placeholder="e.g. IBM, AAPL, AMZN"
                        required
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Quantity</label>
                    <input
                        {...register('quantity', { required: true, min: 0 })}
                        type="number"
                        name="quantity"

                        className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                        placeholder="e.g 5, 10, 100 "
                        required
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Stock Symbol</label>
                    <input
                        {...register('stock', { required: true, min: 0 ,})}
                        type="text"
                        name="stock"

                        className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                        placeholder="e.g. IBM, AAPL, AMZN"
                        required
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Quantity</label>
                    <input
                        {...register('quantity', { required: true, min: 0 })}
                        type="number"
                        name="quantity"

                        className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                        placeholder="e.g 5, 10, 100 "
                        required
                    />
                </div>
                <button className="fullWidthSharedBtn" type="submit">
                    Add
                </button>
            </form>

            {/* <button onClick={() => { document.getElementById('my_modal_5').close(), console.log('Working') }}>Add</button> */}
        </div>
    );
};

export default RealState;