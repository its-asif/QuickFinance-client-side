import { useForm } from "react-hook-form";

const RealState = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        reset()
    }
    return (
        <div className="">
            <h2 className="text-center md:text-lg lg:text-xl font-bold">Real <span className="primaryColor">Estate</span> Listings</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-2 flex flex-col justify-center items-center border">
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
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                            <option value="condo">Land</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
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
                </div>
                <div className="flex md:flex-row flex-col gap-3 w-full">
                    <div className="flex flex-col mb-2 md:w-[220px] w-full">
                        <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Size/Area</label>
                        <input
                            {...register('size', { required: true, min: 0, })}
                            type="text"
                            name="size"

                            className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                            placeholder="e.g. 1000 sqft, 200 acres"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4 md:w-[220px] w-full">
                        <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Price</label>
                        <input
                            {...register('price', { required: true, min: 0 })}
                            type="number"
                            name="price"

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

export default RealState;