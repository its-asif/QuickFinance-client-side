import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BiBuildingHouse } from "react-icons/bi";
import { AuthContext } from "../../../../AuthProvider/Contextapi";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAssetData from "../../../../Hooks/useAssetData";

const RealState = () => {
    const  { refetch } = useAssetData()
    const axiosPublic = useAxiosPublic()
    const { AuthUser } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const realStateData = {
            userEmail: AuthUser?.email,
            category: data.property,
            asset_name: data.name,
            magnitude: parseFloat(data.size),
            purchase_date: data.date,
            locale: data.location,
            status: 'equal',
            value: parseFloat(data.price)
        }
        axiosPublic.post('/api/assets', realStateData)
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
    return (
        <div className="">
            <h2 className="flex items-center justify-center gap-1 text-center md:text-lg lg:text-xl font-bold"><BiBuildingHouse className="h-4 w-4 md:h-6 md:w-6" />Real <span className="primaryColor">Estate</span> Listings</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-2 flex flex-col justify-center items-center">
                <div className="flex md:flex-row flex-col gap-3 w-full">
                    <div className="flex flex-col mb-2 md:w-[220px] w-full">
                        <label htmlFor="property" className="primaryColor text-sm md:text-base font-bold mb-1">Property Type</label>
                        <select
                            {...register('property', { required: true })}
                            name="property"
                            className="h-10 rounded-md border border-black focus:border-none"
                            defaultValue="" // Add a default value if needed
                        >
                            <option value="">Select Property Type</option>
                            <option value="House">House</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Land">Land</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="flex flex-col mb-4 md:w-[220px] w-full">
                        <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Property Name</label>
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            name="name"
                            className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                            required
                            placeholder="My Home"
                        />
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-3 w-full">
                    <div className="flex flex-col mb-4 md:w-[220px] w-full">
                        <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Location</label>
                        <input
                            {...register('location', { required: true, min: 0 })}
                            type="text"
                            name="location"

                            className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                            placeholder="e.g. New York, Los Angeles, Chicago"
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
                    <div className="flex flex-col mb-2 md:w-[220px] w-full">
                        <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Size/Area(sqft)</label>
                        <input
                            {...register('size', { required: true, min: 0, })}
                            type="number"
                            name="size"
                            className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                            placeholder="e.g. 1000, 200"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4 md:w-[220px] w-full">
                        <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Price(USD)</label>
                        <input
                            {...register('price', { required: true, min: 0 })}
                            type="number"
                            name="price"

                            className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                            placeholder="e.g. 100000 "
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

export default RealState;