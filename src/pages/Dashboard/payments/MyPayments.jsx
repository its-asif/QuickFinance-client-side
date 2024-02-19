import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";

const MyPayments = () => {
    const axiosPublic = useAxiosPublic();
    const { AuthUser } = useAuth();
    const [paymentData, setPaymentData] = useState([]);

    useEffect(() => {
        axiosPublic.get(`/api/payments/${AuthUser?.email}`)
        .then(res => {
            setPaymentData(res.data);
        })
    }, [AuthUser?.email])

    // heading 
    const tableHeadings = (
        <tr>
            <th>S.N</th>
            <th>Payment Date</th>
            <th>Payment Type</th>
            <th>Trx. ID</th>
            <th>Trx. Status</th>
            <th>Organization name</th>
        </tr>
    ); 



    return (
        <div>

            {/* Banner Section */}
            <div className=' flex flex-col-reverse md:flex md:flex-row justify-between items-center max-w-screen-md mx-auto m-4'>
                <div className='flex-1'>
                    <h4 className='ml-1 text-3xl font-bold'>See Your </h4>
                   

                    <h1 className='text-2xl  md:text-8xl font-bold'>
                        Payments
                    </h1>
                </div>

                <div className='flex-1'>
                    <img className='max-w-96' src={"https://i.ibb.co/sybZCX6/cash-payment-concept-illustration-114360-3320-removebg-preview.png"} 
                    
                    alt="paymentImg" />
                </div>
            </div>



            {/* Table - payment list */}
            <div className="overflow-x-auto px-16">
                <table className="table">
                    {/* head */}
                    <thead>
                        {tableHeadings}
                    </thead>
                    <tbody>
                        {/* body */}
                        {
                            paymentData?.map((payment, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            {
                                                new Date(payment.createdAt).toLocaleDateString()
                                            }
                                        </td>
                                        <td>{payment.trxType}</td>
                                        <td>{payment.tran_id}</td>
                                        <td>
                                            {
                                                payment.payment_status === "true" ? 
                                                <span className="btn btn-sm bg-green-200 text-green-700">Success</span> :
                                                <span className="btn btn-sm bg-red-200 text-red-700">Failed</span>
                                            
                                            }
                                        </td>
                                        <td>{payment.organizer_name}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPayments;