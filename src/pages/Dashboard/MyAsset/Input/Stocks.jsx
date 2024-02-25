import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineStock } from "react-icons/ai";
import { AuthContext } from "../../../../AuthProvider/Contextapi";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAssetData from "../../../../Hooks/useAssetData";

const Stocks = () => {
    const  { refetch } = useAssetData()
    const axiosPublic = useAxiosPublic()
    const { AuthUser } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const stockName = data.stock.toUpperCase();
        if (stockName) {
            try {
                const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockName}&apikey=${import.meta.env.DATA_POST}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch stock data');
                }
                const StocksData = await response.json();
                const newPrice = await StocksData['Global Quote']['05. price'];
                const StockStatus = await StocksData['Global Quote']['09. change'];


                const stocksData = {
                    userEmail: AuthUser?.email,
                    category: "Stocks",
                    asset_name: data.stock.toUpperCase(),
                    magnitude: parseFloat(data.quantity),
                    purchase_date: data.date,
                    locale: "US",
                    status: `${StockStatus > 0 ? 'ups' : 'down'}`,
                    value: newPrice * data.quantity
                };
                axiosPublic.post('/api/assets', stocksData )
                .then(res => {
                    // console.log(res.status);
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
                        refetch()
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
            catch {
                console.log('error');
            }
        }



    }
    return (
        <div className="">
            <h2 className="flex items-center justify-center gap-1 text-center md:text-lg lg:text-xl font-bold"><AiOutlineStock className="h-4 w-4 md:h-6 md:w-6" />Stock <span className="primaryColor">Asset</span> Manage</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-2">
                <div className="flex flex-col mb-2">
                    <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1 uppercase">Stock Symbol</label>
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
                        {...register('date', { required: true })}
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