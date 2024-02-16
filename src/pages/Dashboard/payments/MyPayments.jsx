
const MyPayments = () => {

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

    // demo data
    const paymentData = [
        {
            id: 1,
            paymentDate: '2021-12-12',
            paymentType: 'Zakat',
            trxId: '123456asdf',
            trxStatus: 'Success',
            orgName: 'Al-Khair'
        },
        {
            id: 2,
            paymentDate: '2021-12-12',
            paymentType: 'Zakat',
            trxId: '123456asdf',
            trxStatus: 'Success',
            orgName: 'Al-Khair'
        },
        {
            id: 3,
            paymentDate: '2021-12-12',
            paymentType: 'Zakat',
            trxId: '123456asdf',
            trxStatus: 'Failed',
            orgName: 'Al-Khair'
        },
        {
            id: 4,
            paymentDate: '2021-12-12',
            paymentType: 'Zakat',
            trxId: '123456asdf',
            trxStatus: 'Success',
            orgName: 'Al-Khair'
        },
    ];


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
                            paymentData.map((item, index) => (
                                <tr key={index} 
                                // className={ !(item.trxStatus === 'Success') && `bg-red-50`}
                                >
                                    <td>{index+1}</td>
                                    <td>{item.paymentDate}</td>
                                    <td>{item.paymentType}</td>
                                    <td>{item.trxId}</td>
                                    <td>
                                        {
                                            item.trxStatus === 'Success' ? 
                                            <span className='btn btn-sm bg-green-200 text-green-700 w-20 hover:cursor-default hover:bg-green-200 hover:border-0 '>{item.trxStatus}</span> :
                                            <span className='btn btn-sm bg-red-200 text-red-700 w-20 hover:cursor-default hover:bg-red-200 hover:border-0 '>{item.trxStatus}</span>
                                        
                                        }
                                    </td>
                                    <td>{item.orgName}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPayments;