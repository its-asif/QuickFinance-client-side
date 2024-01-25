/* eslint-disable react/prop-types */

const UserFinancialDataTable = ({ userFinancialDataTable }) => {
    const { trxType, trxCategory, amount, trxDetails, } = userFinancialDataTable
    return (

        <tr>

            <td>
                <p>{trxType}</p>
            </td>
            <td>{trxCategory}</td>
            <td>{amount}</td>
            <td>
                <p>{trxDetails}</p>
            </td>

        </tr>


    );
};

export default UserFinancialDataTable;