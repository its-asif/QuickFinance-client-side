import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { AuthContext } from "../../../../AuthProvider/Contextapi";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Crypto = () => {
    const axiosPublic = useAxiosPublic()
    const { AuthUser } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const cryptoSymbol = data.crypto.toUpperCase();
        const exchangeCurrency = 'USD'
        if (cryptoSymbol) {
            try {
                const response = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${cryptoSymbol}&to_currency=${exchangeCurrency}&apikey=7F65SIUO6QKGE5OP`);
                if (!response.ok) {
                    throw new Error('Failed to fetch stock data');
                }
                const CryptoData = await response.json();
                // console.log(CryptoData);
                // cryptoName 
                const cryptoName = await CryptoData['Realtime Currency Exchange Rate']['2. From_Currency Name']
                // crypto price 
                const newPrice = await CryptoData['Realtime Currency Exchange Rate']['5. Exchange Rate']
                // crypto exchange currency 
                // const code = await CryptoData['Realtime Currency Exchange Rate']['3. To_Currency Code']

                const cryptoData = {
                    userEmail: AuthUser?.email,
                    category: "Crypto",
                    asset_name: cryptoName,
                    magnitude: parseFloat(data.amount),
                    purchase_date: data.date,
                    locale: "Global",
                    status: "equal",
                    value: parseFloat(`${newPrice * data.amount}`)
                };
                axiosPublic.post('/api/assets', cryptoData )
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
            <h2 className="flex items-center justify-center gap-1 text-center md:text-lg lg:text-xl font-bold"><PiCurrencyBtcFill className="h-4 w-4 md:h-6 md:w-6" />  Crypto  <span className="primaryColor">Track</span> Manager</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-2">
                <div className="flex flex-col mb-2">
                    <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Crypto Symbol</label>
                    <input
                        {...register('crypto', { required: true, min: 0, })}
                        type="text"
                        name="crypto"

                        className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                        placeholder="e.g. BTC, ETH, XRP"
                        required
                    />
                </div>
                {/* <div className="flex flex-col mb-2">
                    <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Exchange Currency</label>
                    <input
                        {...register('currency', { required: true, min: 0, })}
                        type="text"
                        name="currency"

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