import { useEffect, useState } from "react";
import './Table.css'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const Table = () => {
    const [assetData, setAssetData] = useState(null)
    useEffect(() => {
        fetch("/asset.json")
            .then(res => res.json())
            .then(data => setAssetData(data))
    }, [])
    console.log(assetData);

    return (
        <div className='border border-red-600'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className=" trial rounded-md">
                        <tr>
                            <th className=" w-[100px] "></th>
                            <th className="text-white text-[15px]">Category</th>
                            <th className="text-white text-[15px]">Asset</th>
                            <th className="text-white text-[15px] hide-on-tablet">Magnitude</th>
                            <th className="text-white text-[15px] hide-on-tablet">Purchase Date</th>
                            <th className="text-white text-[15px] hide-on-small">Locale</th>
                            <th className="text-white text-[15px]">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            assetData?.map((data, idx) => <tr key={idx} className="hover:bg-green-300">
                                <th className="flex items-center border w-[100px] gap-2">
                                    <MdEdit className="h-4 w-4 md:h-5 md:w-5 text-blue-700 hover:scale-110 hover:cursor-pointer" />
                                    <MdDelete className="h-4 w-4 md:h-5 md:w-5 text-red-700  hover:scale-110 hover:cursor-pointer"/>
                                </th>
                                <td className="border">
                                    {data.category}
                                </td>
                                <td>{data.asset_name}</td>
                                <td className="hide-on-tablet">{data.magnitude}</td>
                                <td className="hide-on-tablet">{data.purchase_date}</td>
                                <td className="hide-on-small">{data.locale}</td>
                                <td>{data.value}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;