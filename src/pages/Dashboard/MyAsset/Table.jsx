import './Table.css'
import { MdDelete } from "react-icons/md";
import { IoTrendingUpSharp } from "react-icons/io5";
import { IoTrendingDownSharp } from "react-icons/io5";
import { RiEqualLine } from "react-icons/ri";
import Spinner from "./Spinner/Spinner";
import useAssetData from "../../../Hooks/useAssetData";
import Swal from 'sweetalert2';
// import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
const Table = () => {
    const { assetData, loading, refetch } = useAssetData()
    // const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    // console.log(assetData);
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0ba360",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/assets/${id}`)
                    .then(res => {
                        // console.log(res.status);
                        if (res.status === 200) {
                            Swal.fire({
                                title: "Successful",
                                text: "Your Asset Deleted from Portfolio",
                                icon: "success",
                                confirmButtonColor: "#0ba360",
                                confirmButtonText: 'DONE'
                            });
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
        });
    }
    return (
        <div className=''>
            <div className="overflow-x-auto shadow-md rounded-md">
                {
                    loading ? <div className='flex justify-center items-center w-full h-[50vh]'><Spinner></Spinner></div> :
                        <table className="table rounded-md">
                            {/* head */}
                            <thead className=" trial rounded-md">
                                <tr>
                                    <th className=" w-[100px] "></th>
                                    <th className="text-white text-[15px] hide-on-small">Category</th>
                                    <th className="text-white text-[15px]">Asset</th>
                                    <th className="text-white text-[15px] hide-on-tablet">Magnitude</th>
                                    <th className="text-white text-[15px] hide-on-tablet">Purchase Date</th>
                                    <th className="text-white text-[15px] hide-on-small">Locale</th>
                                    <th className="text-white text-[15px] hide-on-small w-[80px] ">Status</th>
                                    <th className="text-white text-[15px]">Value</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* row */}
                                {
                                    assetData?.map((data, idx) => <tr key={idx} className="hover:bg-green-300 group" >
                                        <th className="flex items-center  w-[100px] gap-2">
                                            <MdDelete onClick={() => handleDelete(data._id)} className="h-4 w-4 md:h-5 md:w-5 text-red-500  hover:scale-110 hover:cursor-pointer" />
                                        </th>
                                        <td className="hide-on-small">
                                            {data.category}
                                        </td>
                                        <td>{data.asset_name}</td>
                                        <td className="hide-on-tablet">
                                            {data.magnitude}
                                            {
                                                data.category === "Real Estate"
                                                    ? ' sqft'
                                                    : (
                                                        data.category === "Savings"
                                                            ? ' USD'
                                                            : (
                                                                data.category === "Forex"
                                                                    ? ` ${data.asset_name}`
                                                                    : (
                                                                        data.category === "Jewelry"
                                                                            ? ' grams'
                                                                            : ''
                                                                    )
                                                            )
                                                    )
                                            }
                                        </td>

                                        <td className="hide-on-tablet">{data.purchase_date}</td>
                                        <td className="hide-on-small">{data.locale}</td>
                                        <td className="hide-on-small flex items-center justify-start gap-1">
                                            {
                                                data.status === "ups" ?
                                                    <IoTrendingUpSharp className="h-4 w-4 md:h-5 md:w-5 text-green-500 hover:cursor-pointer" />
                                                    : data.status === 'down' ?
                                                        <IoTrendingDownSharp className="h-4 w-4 md:h-5 md:w-5 text-red-500 hover:cursor-pointer" />
                                                        : <RiEqualLine className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 hover:cursor-pointer" />
                                            }
                                        </td>
                                        <td>{data.value} USD</td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                }
            </div>
        </div>
    );
};

export default Table;