import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import Stocks from "./Input/Stocks";

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
            case 'news':
                return (
                    <>
                        <h2>News Page Content</h2>
                        <p>This is the content for the News page.</p>
                    </>
                );
            // Add more cases for additional pages
            default:
                return (
                    <>
                        <h2>Default Page Content</h2>
                        <p>This is the default content.</p>
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
                <div className="modal-box w-80 h-80">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {/* to go back*/}
                    <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2" onClick={() => setCurrentPage('default')}>back</button>
                    {/* Content div */}
                    <div id="modalContent">
                        {getContent()}
                    </div>
                    {
                        currentPage === 'default' ? (<div>
                            {/* Buttons to switch between pages */}
                            <button className="btn" onClick={() => showPage('stocks')}>Stocks</button>
                            <button className="btn" onClick={() => showPage('news')}>News</button>
                            {/* Add more buttons for additional pages */}
                        </div>) : ''
                    }
                </div>
            </dialog>
        </div>
    );
};

export default MyAsset;