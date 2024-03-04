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
            // console.log(loading);
            for (const updateData of assetData) {
                // real time data for stocks 
                if (updateData.category === "Stocks") {
                    // console.log(updateData.asset_name);
                    try {
                        // console.log('dhukse');
                        // console.log(updateData.asset_name);

                        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${updateData.asset_name}&apikey=${import.meta.env.DATA_STOCKS}`)
                            .then(res => res.json())
                            .then((stocks) => {
                                console.log(stocks)
                                const ApiLimit = stocks['Information']
                                if (ApiLimit) {
                                    console.log('Api limit over');
                                }
                                else {


                                    const newPrice = stocks['Global Quote']['05. price'];
                                    if (newPrice) {
                                        const StockStatus = stocks['Global Quote']['09. change'];

                                        const stocksData = {
                                            userEmail: AuthUser?.email,
                                            category: "Stocks",
                                            asset_name: updateData.asset_name,
                                            magnitude: updateData.magnitude,
                                            purchase_date: updateData.purchase_date,
                                            locale: updateData.locale,
                                            status: `${StockStatus > 0 ? 'ups' : 'down'}`,
                                            value: newPrice * updateData.magnitude
                                        };
                                        // console.log(stocksData);
                                        axiosPublic.patch(`/api/assets/${updateData._id}`, stocksData)
                                            .then(res => {
                                                // console.log(res.status);
                                                if (res.status === 200) {
                                                    refetch()
                                                }
                                            })
                                    }
                                }
                            })
                    }
                    catch {
                        console.log('error');
                    }
                }
                if (updateData.category === "Forex" || updateData.category === "Crypto") {
                    // console.log(updateData);
                    // console.log(updateData.asset_name);
                    try {
                        // console.log('dhukse');
                        // console.log(updateData.asset_name);
                        fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${updateData.asset_name}&to_currency=CNY&apikey=${import.meta.env.DATA_FOREX_CRYPTO}`)
                            .then(res => res.json())
                            .then((BothData) => {
                                // console.log(BothData)
                                const ApiLimit = BothData['Information']
                                if (ApiLimit) {
                                    console.log('Api limit over');
                                }
                                else {
                                    const newPrice = BothData['Global Quote']['5. Exchange Rate'];
                                    if (newPrice) {
                                        const newValue = newPrice * updateData.magnitude;
                                        const oldValue = updateData.value
                                        const patchData = {
                                            userEmail: AuthUser?.email,
                                            category: "Stocks",
                                            asset_name: updateData.asset_name,
                                            magnitude: updateData.magnitude,
                                            purchase_date: updateData.purchase_date,
                                            locale: updateData.locale,
                                            status: `${newValue > oldValue ? 'ups' : newValue < oldValue ? 'downs' : 'equal'}`,
                                            value: newValue
                                        };
                                        axiosPublic.patch(`/api/assets/${updateData._id}`, patchData)
                                            .then(res => {
                                                // console.log(res.status);
                                                if (res.status === 200) {
                                                    refetch()
                                                }
                                            })
                                    }
                                }
                            })

                    }
                    catch {
                        console.log('error');
                    }
                }
                if (updateData.category === "Jewelry") {
                    console.log(updateData.category);
                    try {
                        var myHeaders = new Headers();
                        // myHeaders.append("x-access-token", "goldapi-15aqdqrlsxkw9dx-io");
                        myHeaders.append("x-access-token", "goldapi-dvvsltbj6n1w-io");
                        myHeaders.append("Content-Type", "application/json");

                        var requestOptions = {
                            method: 'GET',
                            headers: myHeaders,
                            redirect: 'follow'
                        };
                        // console.log(JewelryData);
                        fetch(`https://www.goldapi.io/api/${updateData.JewelrySymbol}/USD`, requestOptions)
                            .then(res => res.json())
                            .then((JewelryData) => {
                                // Get the selected karat from the form data
                                const selectedKarat = updateData.Karats;
                                // Access the price of the selected karat from the fetched jewelry data
                                const KaratsPrice = JewelryData[selectedKarat];
                                // console.log(KaratsPrice);
                                // calculate value 
                                const CurrentValue = parseFloat(updateData.weight) * parseFloat(KaratsPrice)
                                // compar3e values for Status
                                const purchaseAmount = parseFloat(updateData.amount)
                                // console.log(purchaseAmount);
                                // karat data nite hobe 
                                const jewelryData = {
                                    userEmail: AuthUser?.email,
                                    category: "Jewelry",
                                    asset_name: updateData.jewelry,
                                    karat: selectedKarat,
                                    magnitude: parseFloat(updateData.weight),
                                    purchase_date: updateData.date,
                                    locale: "Home",
                                    status: `${purchaseAmount > CurrentValue ? 'down' : CurrentValue > purchaseAmount ? 'ups' : 'equal'}`,
                                    value: CurrentValue
                                };
                                axiosPublic.patch(`/api/assets/${updateData._id}`, jewelryData)
                                    .then(res => {
                                        // console.log(res.status);
                                        if (res.status === 200) {
                                            refetch()
                                        }
                                    })
                            })
                    }
                    catch {
                        (error) => {
                            console.log(error);
                        }
                    }
                }
                if (updateData.category === "Savings") {
                    // console.log(updateData);
                    // Function to calculate the value of the deposit account
                    const calculateDepositValue = (amount, interestRate, date) => {
                        // Assuming the interest is compounded annually
                        const today = new Date();
                        const purchaseDate = new Date(date);
                        const timeDiff = today.getTime() - purchaseDate.getTime();
                        const timeInYears = timeDiff / (1000 * 3600 * 24 * 365); // Convert milliseconds to years
                        // console.log(timeInYears);
                        // if any one choose feature time 
                        if (timeInYears < 0) {
                            const value = null;
                            // console.log('sorry');
                            return value;
                        }
                        else {
                            // Convert interest rate to decimal
                            const r = parseFloat(interestRate) / 100;

                            // Calculate the value of the deposit account using compound interest formula
                            const value = parseFloat(amount) * Math.pow(1 + r, timeInYears);
                            return value;
                        }
                    };
                    // interest rate pathate hobe 
                    const depositValue = calculateDepositValue(updateData.magnitude, updateData.interestRate, updateData.purchase_date);
                    // console.log("Value of the deposit account:", depositValue);
                    if (depositValue) {
                        const SavingsData = {
                            userEmail: AuthUser?.email,
                            category: "Savings",
                            asset_name: updateData.asset_name,
                            magnitude: parseFloat(updateData.magnitude),
                            purchase_date: updateData.purchase_date,
                            locale: updateData.locale,
                            value: parseFloat(depositValue.toFixed(3)),
                            status: "ups"
                        }
                        console.log(SavingsData);
                        axiosPublic.patch(`/api/assets/${updateData._id}`, SavingsData)
                            .then(res => {
                                // console.log(res.status);
                                if (res.status === 200) {
                                    refetch()
                                }
                            })
                    }
                }
            }
        }

    }, [AuthUser, loading])


    return { assetData, loading, refetch };
};

export default useAssetData;
