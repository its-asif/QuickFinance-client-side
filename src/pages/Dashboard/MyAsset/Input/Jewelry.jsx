import { useForm } from "react-hook-form";
import { AiFillGolden } from "react-icons/ai";

const Jewelry = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        reset()
    }

    return (
        <div className="">   
            <h2 className="flex items-center justify-center gap-1 text-center md:text-lg lg:text-xl font-bold"><AiFillGolden className="h-4 w-4 md:h-6 md:w-6" /> Jewelry  <span className="primaryColor">Asset</span> Manager</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-2 flex flex-col justify-center items-center">
                <div className="flex md:flex-row flex-col gap-3 w-full">
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Jewelry Type</label>
                        <input
                            {...register('jewelry', { required: true, min: 0 })}
                            type="text"
                            name="jewelry"

                            className="h-10 rounded-md border border-black focus:border-none placeholder:px-2"
                            placeholder="e.g., ring, necklace, bracelet"
                            required
                        />
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-3 w-full">
                <div className="flex flex-col mb-2 md:w-[220px] w-full">
                        <label htmlFor="property" className="primaryColor text-sm md:text-base font-bold mb-1">Property Type</label>
                        <select
                            {...register('material', { required: true })}
                            name="material"
                            className="h-10 rounded-md border border-black focus:border-none"
                            defaultValue="" // Add a default value if needed
                        >
                            <option value="">Select Material Type</option>
                            <option value="Gold<">Gold</option>
                            <option value="Silver">Silver</option>
                            <option value="Diamond">Diamond</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="flex flex-col mb-4 md:w-[220px] w-full">
                        <label htmlFor="amount" className="primaryColor text-sm md:text-base font-bold mb-1">Value</label>
                        <input
                            {...register('value', { required: true, min: 0 })}
                            type="number"
                            name="value"

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

export default Jewelry;