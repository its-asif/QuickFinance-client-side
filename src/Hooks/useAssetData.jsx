import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../AuthProvider/Contextapi";
import { useContext, useEffect } from "react";
const useAssetData = () => {
    const { AuthUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const { data: assetData = [], isPending: loading, refetch } = useQuery({
        queryKey: ["assetData"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/assets/${AuthUser?.email}`);
            return res.data;
        },
    });
    // console.log(assetData);
    useEffect(() => {
        if (loading == false) {
            console.log(loading);
            for (const updateData of assetData) {
                // real time data for stocks 
                // if (updateData.category === "Stocks") {
                //     // console.log(updateData.asset_name);
                //     try {
                //         // console.log('dhukse');
                //         console.log(updateData.asset_name);
                //         fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${updateData.asset_name}&apikey=1J92GU99QAL1JVP6`)
                //             .then(res => res.json())
                //             .then((stocks) => {
                //                 console.log(stocks)
                //                 if (stocks['Global Quote']['05. price']) {
                //                     const newPrice = stocks['Global Quote']['05. price'];
                //                     const StockStatus = stocks['Global Quote']['09. change'];

                //                     const stocksData = {
                //                         userEmail: AuthUser?.email,
                //                         category: "Stocks",
                //                         asset_name: updateData.asset_name,
                //                         magnitude: updateData.magnitude,
                //                         purchase_date: updateData.purchase_date,
                //                         locale: updateData.locale,
                //                         status: `${StockStatus > 0 ? 'ups' : 'down'}`,
                //                         value: newPrice * updateData.magnitude
                //                     };
                //                     console.log(stocksData);
                //                     axiosPublic.patch(`/api/assets/${updateData._id}`, stocksData)
                //                         .then(res => {
                //                             // console.log(res.status);
                //                             if (res.status === 200) {
                //                                 refetch()
                //                             }
                //                         })
                //                 }
                //             })
                //     }
                //     catch {
                //         console.log('error');
                //     }
                // }
                // if (updateData.category === "Forex" || updateData.category === "Crypto") {
                //     console.log(updateData);
                //     // console.log(updateData.asset_name);
                //     try {
                //         // console.log('dhukse');
                //         console.log(updateData.asset_name);
                //         fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${updateData.asset_name}&to_currency=USD&apikey=OYCCP79A3KATY3HC`)
                //             .then(res => res.json())
                //             .then((BothData) => {
                //                 // console.log(BothData)
                //                 const newPrice = BothData['Global Quote']['05. price'];
                //                 if (newPrice) {
                //                     const newPrice = BothData['Global Quote']['05. price'];
                //                     const newValue = newPrice * updateData.magnitude;
                //                     const oldValue = updateData.value
                //                     const patchData = {
                //                         userEmail: AuthUser?.email,
                //                         category: "Stocks",
                //                         asset_name: updateData.asset_name,
                //                         magnitude: updateData.magnitude,
                //                         purchase_date: updateData.purchase_date,
                //                         locale: updateData.locale,
                //                         status: `${newValue > oldValue ? 'ups' : newValue < oldValue ? 'downs' : 'equal'}`,
                //                         value: newValue
                //                     };
                //                     axiosPublic.patch(`/api/assets/${updateData._id}`, patchData)
                //                         .then(res => {
                //                             // console.log(res.status);
                //                             if (res.status === 200) {
                //                                 refetch()
                //                             }
                //                         })
                //                 }
                //             })

                //     }
                //     catch {
                //         console.log('error');
                //     }
                // }
                if (updateData.category === "Jewelry") {
                    console.log(updateData);
                }
                // if (updateData.category === "Savings") {
                //     console.log(updateData);
                //     // Function to calculate the value of the deposit account
                //     const calculateDepositValue = (amount, interestRate, date) => {
                //         // Assuming the interest is compounded annually
                //         const today = new Date();
                //         const purchaseDate = new Date(date);
                //         const timeDiff = today.getTime() - purchaseDate.getTime();
                //         const timeInYears = timeDiff / (1000 * 3600 * 24 * 365); // Convert milliseconds to years
                //         // console.log(timeInYears);
                //         // if any one choose feature time 
                //         if (timeInYears < 0) {
                //             const value = null;
                //             console.log('sorry');
                //             return value;
                //         }
                //         else {
                //             // Convert interest rate to decimal
                //             const r = parseFloat(interestRate) / 100;

                //             // Calculate the value of the deposit account using compound interest formula
                //             const value = parseFloat(amount) * Math.pow(1 + r, timeInYears);
                //             return value;
                //         }
                //     };
                //     // interest rate pathate hobe 
                //     const depositValue = calculateDepositValue(updateData.amount, updateData.interestRate, updateData.date);
                //     console.log("Value of the deposit account:", depositValue);
                //     if (depositValue) {
                //         const SavingsData = {
                //             userEmail: AuthUser?.email,
                //             category: "Savings",
                //             asset_name: updateData.accType,
                //             magnitude: parseFloat(updateData.amount),
                //             purchase_date: updateData.date,
                //             locale: updateData.bank,
                //             value: parseFloat(depositValue.toFixed(3)),
                //             status: "ups"
                //         }
                //         console.log(SavingsData);
                //         axiosPublic.post('/api/assets', SavingsData)
                //             .then(res => {
                //                 console.log(res.status);
                //                 if (res.status === 200) {
                //                     refetch()
                //                 }
                //             })
                //     }
                // }
            }
        }

    }, [AuthUser, loading])


    return { assetData, loading, refetch };
};

export default useAssetData;
