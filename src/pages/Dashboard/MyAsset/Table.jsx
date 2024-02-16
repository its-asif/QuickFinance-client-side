import { useEffect, useState } from "react";
import './Table.css'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import Stocks from "./Input/Stocks";
const Table = () => {
    const [assetData, setAssetData] = useState(null)
    useEffect(() => {
        fetch("/asset.json")
            .then(res => res.json())
            .then(data => setAssetData(data))
    }, [])
    console.log(assetData);

    return (
        <div className=''>
            <div className="overflow-x-auto shadow-md rounded-md">
                <table className="table rounded-md">
                    {/* head */}
                    <thead className=" trial rounded-md">
                        <tr>
                            <th className=" w-[100px] "></th>
                            <th className="text-white text-[15px]">Category</th>
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
                            assetData?.map((data, idx) => <tr key={idx} className="hover:bg-green-300">
                                <th className="flex items-center  w-[100px] gap-2">
                                    <button onClick={() => { document.getElementById('my_modal_6').showModal() }}>
                                        <MdEdit className="h-4 w-4 md:h-5 md:w-5 text-blue-700 hover:scale-110 hover:cursor-pointer" />
                                    </button>
                                    <MdDelete className="h-4 w-4 md:h-5 md:w-5 text-red-700  hover:scale-110 hover:cursor-pointer" />
                                </th>
                                <td className="">
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
                                <td className="hide-on-small">
                                    <GoDotFill className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 hover:cursor-pointer" />
                                </td>
                                <td>{data.value} USD</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-80 h-[300px] md:h-80 modalBg">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="">
                        <Stocks></Stocks>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Table;