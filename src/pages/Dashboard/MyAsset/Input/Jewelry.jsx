import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiFillGolden } from "react-icons/ai";
import { AuthContext } from "../../../../AuthProvider/Contextapi";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAssetData from "../../../../Hooks/useAssetData";

const Jewelry = () => {
    const  { refetch } = useAssetData()
    const axiosPublic = useAxiosPublic()
    const { AuthUser } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();

    // handle submit 
    const onSubmit = async (data) => {
        // console.log('I am clicked');
        // console.log(data);
        const JewelrySymbol = data.material
        // reset()
        if (JewelrySymbol) {
            try {
                var myHeaders = new Headers();
                myHeaders.append("x-access-token", "goldapi-15aqdqrlsxkw9dx-io");
                myHeaders.append("Content-Type", "application/json");

                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };
                const response = await fetch(`https://www.goldapi.io/api/${JewelrySymbol}/USD`, requestOptions)
                if (!response.ok) {
                    throw new Error('Failed to fetch Commodities data');
                }
                const JewelryData = await response.json();
                // console.log(JewelryData);
                // Get the selected karat from the form data
                const selectedKarat = data.Karats;
                // console.log(selectedKarat);

                // Access the price of the selected karat from the fetched jewelry data
                const KaratsPrice = JewelryData[selectedKarat];
                // console.log(KaratsPrice);
                // calculate value 
                const CurrentValue = parseFloat(data.weight) * parseFloat(KaratsPrice)
                // compar3e values for Status
                const purchaseAmount =  parseFloat(data.amount)
                // console.log(purchaseAmount);
                // karat data nite hobe 
                const jewelryData = {
                    userEmail: AuthUser?.email,
                    category: "Jewelry",
                    asset_name: data.jewelry,
                    JewelrySymbol: data.material,
                    karat: selectedKarat,
                    magnitude: parseFloat(data.weight),
                    purchase_date: data.date,
                    locale: "Home",
                    status: `${purchaseAmount > CurrentValue? 'down': CurrentValue > purchaseAmount ? 'ups' :'equal'}`,
                    value: CurrentValue
                };
                axiosPublic.post('/api/assets', jewelryData)
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
            <h2 className="flex items-center justify-center gap-1 text-center md:text-lg lg:text-xl font-bold">
                <AiFillGolden className="h-4 w-4 md:h-6 md:w-6" /> Jewelry  <span className="primaryColor">Asset</span> Manager
            </h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-2 flex flex-col justify-center items-center">
                <div className="flex md:flex-row flex-col gap-3  w-full">
                    <div className="flex flex-col mb-4 md:w-[220px] w-full">
                        <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Jewelry Type</label>
                        <input
                            {...register('jewelry', { required: true })}
                            type="text"
                            name="jewelry"

                            className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                            placeholder="e.g., ring, necklace, bracelet"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4 md:w-[220px] w-full">
                        <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Purchase Date</label>
                        <input
                            {...register('date', { required: true })}
                            type="date"
                            name="date"
                            className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                            required
                        />
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-3 w-full">
                    <div className="flex flex-col mb-4 md:w-[220px] w-full">
                        <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Amount</label>
                        <input
                            {...register('amount', { required: true })}
                            type="number"
                            name="amount"
                            className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                            placeholder="e.g. 100000"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4 md:w-[220px] w-full">
                        <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Weight (grams)</label>
                        <input
                            {...register('weight', { required: true })}
                            type="text"
                            name="weight"

                            className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                            placeholder="e.g. 100000"
                            required
                        />
                    </div>
                </div>

                <div className="flex md:flex-row flex-col gap-3 w-full">
                    <div className="flex flex-col mb-2 md:w-[220px] w-full">
                        <label htmlFor="property" className="primaryColor text-sm md:text-base font-bold mb-1">Material Type</label>
                        <select
                            {...register('material', { required: true })}
                            name="material"
                            className="h-10 rounded-md border border-black focus:border-none"
                            defaultValue="" // Add a default value if needed
                        >
                            <option value="">Select Material Type</option>
                            <option value="XAU">Gold</option>
                            <option value="XAG">Silver</option>
                            <option value="XPT">Platinum</option>
                            <option value="XPD">Palladium</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="flex flex-col mb-2 md:w-[220px] w-full">
                        <label htmlFor="property" className="primaryColor text-sm md:text-base font-bold mb-1">Karats</label>
                        <select
                            {...register('Karats', { required: true })}
                            name="Karats"
                            className="h-10 rounded-md border border-black focus:border-none"
                            defaultValue="" // Add a default value if needed
                        >
                            <option value="">Select Karats</option>
                            <option value="price_gram_10K">10 K</option>
                            <option value="price_gram_14k">14 k</option>
                            <option value="price_gram_16k">16 k</option>
                            <option value="price_gram_18k">18 k</option>
                            <option value="price_gram_20k">20 k</option>
                            <option value="price_gram_21k">21 k</option>
                            <option value="price_gram_22k">22 k</option>
                            <option value="price_gram_24k">24 k</option>
                            {/* Add more options as needed */}
                        </select>
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

export default Jewelry;