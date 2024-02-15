import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import Stocks from "./Input/Stocks";
import { IoMdArrowBack } from "react-icons/io";
import RealState from "./Input/RealState";
const MyAsset = () => {
    const [currentPage, setCurrentPage] = useState('default');
    const showPage = (page) => {
        setCurrentPage(page);
    };
    const getContent = () => {
        switch (currentPage) {
            case 'stocks':
                return (
                    <>
                        <Stocks></Stocks>
                    </>
                );
            case 'realState':
                return (
                    <>
                        <RealState/>
                    </>
                );
            // Add more cases for additional pages
            default:
                return (
                    <>
                        <h2 className="text-center md:text-lg lg:text-xl font-bold">Choose <span className="primaryColor">Asset</span> Category</h2>
                    </>
                );
        }
    };
    return (
        <div className="w-full h-full p-4 border-2 border-red-600">
            {/* buttno  */}
            <div className="flex justify-end w-full">
                <button className="sharedBtn " onClick={() => { document.getElementById('my_modal_5').showModal(), setCurrentPage('default') }}>
                    Add Asset
                    <MdAssignmentAdd size={15} className="mx-1" />
                </button>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-80 h-[300px] md:h-80 modalBg">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {/* to go back*/}
                    {/* Content div */}
                    <div className="">
                        <div id="modalContent">
                            {getContent()}
                        </div>
                        {
                            currentPage === 'default' ? (
                                <div className="py-2 grid grid-cols-2 gap-2">
                                    {/* Buttons to switch between pages */}
                                    <button className="py-3 hover:scale-105 transition md:text-base text-sm  rounded-md font-bold text-white bgForAsset" onClick={() => showPage('stocks')}>Stocks</button>
                                    <button className="py-3 hover:scale-105 transition md:text-base text-sm  rounded-md font-bold text-white bgForAsset" onClick={() => showPage('realState')}>Real Estate</button>
                                    <button className="py-3 hover:scale-105 transition md:text-base text-sm  rounded-md font-bold text-white bgForAsset" onClick={() => showPage('news')}>Cryptocurrencies</button>
                                    <button className="py-3 hover:scale-105 transition md:text-base text-sm  rounded-md font-bold text-white bgForAsset" onClick={() => showPage('stocks')}>Forex</button>
                                    <button className="py-3 hover:scale-105 transition md:text-base text-sm  rounded-md font-bold text-white bgForAsset" onClick={() => showPage('news')}>Jewelry</button>
                                    <button className="py-3 hover:scale-105 transition md:text-base text-sm  rounded-md font-bold text-white bgForAsset" onClick={() => showPage('stocks')}>Savings</button>
                                    <button className="py-3 hover:scale-105 transition md:text-base text-sm  rounded-md font-bold text-white bgForAsset" onClick={() => showPage('stocks')}>Vehicles</button>
                                </div>
                            ) :
                                <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2" onClick={() => setCurrentPage('default')}>
                                    <IoMdArrowBack size={15} />
                                </button>
                        }
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyAsset;