import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import Stocks from "./Input/Stocks";
import { IoMdArrowBack } from "react-icons/io";
import RealState from "./Input/RealState";
import Crypto from "./Input/Cryptocurrencies";
import Forex from "./Input/Forex";
import Jewelry from "./Input/Jewelry";
import { BiBuildingHouse } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { FaSackDollar } from "react-icons/fa6";
import { AiFillGolden } from "react-icons/ai";
import { BsBank2 } from "react-icons/bs";
import Table from "./Table";
import Savings from "./Input/Savings";
import DashboardHeader from "../../../Components/header/DashboardHeader";
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
                        <RealState />
                    </>
                );
            case 'cryptocurrencies':
                return (
                    <>
                        <Crypto />
                    </>
                );
            case 'forex':
                return (
                    <>
                        <Forex />
                    </>
                );
            case 'jewelry':
                return (
                    <>
                        <Jewelry />
                    </>
                );
            case 'savings':
                return (
                    <>
                        <Savings />
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
        <div className="w-full h-full p-4 ">

            {/* Banner section */}
            <DashboardHeader smallTitle={"Your Asset"} largeTitle={"Portfolio"} imgSrc={"https://i.ibb.co/rcpy1HF/asset.png"} />



            {/* buttno  */}
            <div className="flex justify-end w-full">
                <button className="sharedBtn " onClick={() => { document.getElementById('my_modal_5').showModal(), setCurrentPage('default') }}>
                    Add Asset
                    <MdAssignmentAdd size={15} className="mx-1" />
                </button>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box  modalBg">
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
                                    <button className="flex items-center justify-center gap-1 py-3 hover:scale-105 transition md:text-base text-sm  rounded-md font-bold text-white bgForAsset" onClick={() => showPage('stocks')}>
                                        <AiOutlineStock className="h-6 w-6 md:h-8 md:w-8" />
                                        <span>Stocks</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-1 py-3 hover:scale-105 transition md:text-base text-sm  rounded-md font-bold text-white bgForAsset" onClick={() => showPage('realState')}>
                                        <BiBuildingHouse  className="h-6 w-6 md:h-8 md:w-8" />
                                        <span>Real Estate</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-1 py-3 hover:scale-105 transition md:text-base text-sm  rounded-md font-bold text-white bgForAsset" onClick={() => showPage('cryptocurrencies')}>
                                        <PiCurrencyBtcFill className="h-6 w-6 md:h-8 md:w-8" />
                                        <span>Crypto</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-1 py-3 hover:scale-105 transition md:text-base text-sm  rounded-md font-bold text-white bgForAsset" onClick={() => showPage('forex')}>
                                        <FaSackDollar className="h-6 w-6 md:h-8 md:w-8" />
                                        <span>Forex</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-1 py-3 hover:scale-105 transition md:text-base text-sm  rounded-md font-bold text-white bgForAsset" onClick={() => showPage('jewelry')}>
                                        <AiFillGolden className="h-6 w-6 md:h-8 md:w-8" />
                                        <span>Jewelry</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-1 py-3 hover:scale-105 transition md:text-base text-sm  rounded-md font-bold text-white bgForAsset" onClick={() => showPage('savings')}>
                                        <BsBank2 className="h-6 w-6 md:h-8 md:w-8" />
                                        <span>Savings</span>
                                    </button>
                                    {/* <button className="flex items-center justify-center gap-1 py-3 hover:scale-105 transition md:text-base text-sm  rounded-md font-bold text-white bgForAsset" onClick={() => showPage('stocks')}>Vehicles</button> */}
                                </div>
                            ) :
                                <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2" onClick={() => setCurrentPage('default')}>
                                    <IoMdArrowBack size={15} />
                                </button>
                        }
                    </div>
                </div>
            </dialog>
            {/* table  */}
            <div className="my-6">
                <Table/>
            </div>
        </div>
    );
};

export default MyAsset;