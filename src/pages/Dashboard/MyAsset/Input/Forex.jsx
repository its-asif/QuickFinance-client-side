import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaSackDollar } from "react-icons/fa6";
import { AuthContext } from "../../../../AuthProvider/Contextapi";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAssetData from "../../../../Hooks/useAssetData";

const Forex = () => {
    const  { refetch } = useAssetData()
    const axiosPublic = useAxiosPublic()
    const { AuthUser } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        // console.log(data);
        const Currency = data.currency.toUpperCase();
        const exchangeCurrency = 'USD'
        if (Currency) {
            try {
                const response = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${Currency}&to_currency=${exchangeCurrency}&apikey=7F65SIUO6QKGE5OP`);
                if (!response.ok) {
                    throw new Error('Failed to fetch stock data');
                }
                const CryptoData = await response.json();
                // console.log(CryptoData);
                // cryptoName 
                const CurrencyName = await CryptoData['Realtime Currency Exchange Rate']['2. From_Currency Name']
                // crypto price 
                const newPrice = await CryptoData['Realtime Currency Exchange Rate']['5. Exchange Rate']
                // crypto exchange currency 
                // const code = await CryptoData['Realtime Currency Exchange Rate']['3. To_Currency Code']

                const forexData = {
                    userEmail: AuthUser?.email,
                    category: "Forex",
                    asset_name: CurrencyName,
                    magnitude: parseFloat(data.amount),
                    purchase_date: data.date,
                    locale: "Home",
                    status: "equal",
                    value: parseFloat(`${newPrice * data.amount}`)
                };
                axiosPublic.post('/api/assets', forexData )
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
                (error) => {
                    console.log(error);
                }
            }
        }

    }

    return (
        <div className="">
            <h2 className="flex items-center justify-center gap-1 text-center md:text-lg lg:text-xl font-bold"><FaSackDollar className="h-4 w-4 md:h-6 md:w-6" /> Forex  <span className="primaryColor">Trade</span> Tracker</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-2">
                <div className="flex flex-col mb-2">
                    <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Currency</label>
                    <input
                        {...register('currency', { required: true, min: 0, })}
                        type="text"
                        name="currency"

                        className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                        placeholder="e.g., EUR, USD, GBP, JPY"
                        required
                    />
                </div>
                {/* <div className="flex flex-col mb-2">
                    <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Exchange Currency</label>
                    <input
                        {...register('exg_currency', { required: true, min: 0, })}
                        type="text"
                        name="exg_currency"

                        className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                        placeholder="e.g. USD, CNY, BDT"
                        required
                    />
                </div> */}
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
                    <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Amount</label>
                    <input
                        {...register('amount', { required: true, min: 0 })}
                        type="number"
                        name="amount"

                        className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                        placeholder="e.g  1000, 200"
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

export default Forex;