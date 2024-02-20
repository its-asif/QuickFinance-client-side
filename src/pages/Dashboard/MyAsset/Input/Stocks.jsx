import { useForm } from "react-hook-form";
import { AiOutlineStock } from "react-icons/ai";

const Stocks = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const stocksData = {
            category: "Stocks",
            asset_name: data.stock,
            magnitude: data.quantity,
            purchase_date: data.date,
            locale: "US",
            value: "000"
        };
        console.log(stocksData);
        reset()
    }
    return (
        <div className="">
            <h2 className="flex items-center justify-center gap-1 text-center md:text-lg lg:text-xl font-bold"><AiOutlineStock className="h-4 w-4 md:h-6 md:w-6" />Stock <span className="primaryColor">Asset</span> Manage</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-2">
                <div className="flex flex-col mb-2">
                    <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Stock Symbol</label>
                    <input
                        {...register('stock', { required: true, min: 0, })}
                        type="text"
                        name="stock"

                        className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                        placeholder="e.g. IBM, AAPL, AMZN"
                        required
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Purchase Date</label>
                    <input
                        {...register('date', { required: true})}
                        type="date"
                        name="date"
                        className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
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

export default Stocks;