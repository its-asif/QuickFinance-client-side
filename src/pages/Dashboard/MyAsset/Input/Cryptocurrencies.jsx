import { useForm } from "react-hook-form";
import { PiCurrencyBtcFill } from "react-icons/pi";

const Crypto = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const cryptoData = {
            category: "Crypto",
            asset_name: data.crypto,
            magnitude: data.amount,
            purchase_date: data.date,
            locale: "US",
            value: "000"
        };
        console.log(cryptoData);
        reset()
    }
    // todo 
    // amount will be number but its text for float number 
    return (
        <div className="">
            <h2 className="flex items-center justify-center gap-1 text-center md:text-lg lg:text-xl font-bold"><PiCurrencyBtcFill className="h-4 w-4 md:h-6 md:w-6" />  Crypto  <span className="primaryColor">Track</span> Manager</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-2">
                <div className="flex flex-col mb-2">
                    <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Crypto Symbol</label>
                    <input
                        {...register('crypto', { required: true, min: 0 ,})}
                        type="text"
                        name="crypto"

                        className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                        placeholder="e.g. BTC, ETH, XRP"
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
                    <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Amount</label>
                    <input
                        {...register('amount', { required: true, min: 0 })}
                        type="text"
                        name="amount"

                        className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                        placeholder="e.g  1.5 BTC"
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

export default Crypto;