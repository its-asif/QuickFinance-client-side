/* eslint-disable react-hooks/exhaustive-deps */
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import useBudgetData from "../../../Hooks/useBudgetData";
// import BudgetData from "./BudgetData";

const BudgetPlanning = () => {

    const axiosPublic = useAxiosPublic();
    const { AuthUser } = useAuth();
    const userEmail = AuthUser?.email;
    const { budgetPlanningData, refetch } = useBudgetData(userEmail);
    console.log(budgetPlanningData[0]);

    useEffect(() => {
        if (budgetPlanningData[0]) {
            const { homePay, partnerPay, bonusPay, investmentsPay, familyPay, otherPay,
                carInsurance, homeContentsInsurance, personalLifeInsurance, healthInsurance,
                carLoan, creditCardInterest, otherLoans, payingOffDebt, charityDonations, otherInsuranceFinancial,
                mortgageRent, bodyCorporateFees, councilRates, furnitureAppliances,
                electricity, gas, water, internet, payTV, homePhone, mobile, otherHomeUtilities,
                supermarket, fruitAndVegMarket, fishShop, deliAndBakery, petFood, otherGroceries, totalGroceries,
                cosmeticsToiletries, hairBeauty, medicinesPharmacy, glassesEyeCare,
                dental, doctorsMedical, hobbies, clothingShoes, jewelleryAccessories,
                computersGadgets, sportsGym, education, petCareVet, otherPersonalMedical,
                coffeeTea, lunchesBought, takeAwaySnacks, drinksAlcohol,
                barsClubs, restaurants, books, newspaperMagazines,
                moviesMusic, holidays, celebrationsGifts, otherEntertainment, busTrainFerry, petrol, roadTollsParking, repairsMaintenance, fines,
                airfares, otherTransportAuto, babyProducts, toys, babysitting, childcare,
                sportsActivities, schoolFees, excursions,
                schoolUniforms, otherSchoolNeeds, otherChildren, planName } = budgetPlanningData[0]

            setHomePay(homePay);
            setPartnerPay(partnerPay);
            setBonusPay(bonusPay);
            setInvestmentsPay(investmentsPay);
            setFamilyPay(familyPay);
            setOtherPay(otherPay);
            setCarInsurance(carInsurance);
            setHomeContentsInsurance(homeContentsInsurance);
            setPersonalLifeInsurance(personalLifeInsurance);
            setHealthInsurance(healthInsurance);
            setCarLoan(carLoan);
            setCreditCardInterest(creditCardInterest);
            setOtherLoans(otherLoans);
            setPayingOffDebt(payingOffDebt);
            setCharityDonations(charityDonations);
            setOtherInsuranceFinancial(otherInsuranceFinancial);
            setMortgageRent(mortgageRent);
            setBodyCorporateFees(bodyCorporateFees);
            setCouncilRates(councilRates);
            setFurnitureAppliances(furnitureAppliances);
            setElectricity(electricity);
            setGas(gas);
            setWater(water);
            setInternet(internet);
            setPayTV(payTV);
            setHomePhone(homePhone);
            setMobile(mobile);
            setOtherHomeUtilities(otherHomeUtilities);
            setSupermarket(supermarket);
            setFruitAndVegMarket(fruitAndVegMarket);
            setFishShop(fishShop);
            setDeliAndBakery(deliAndBakery);
            setPetFood(petFood);
            setOtherGroceries(otherGroceries);
            setTotalGroceries(totalGroceries);
            setCosmeticsToiletries(cosmeticsToiletries);
            setHairBeauty(hairBeauty);
            setMedicinesPharmacy(medicinesPharmacy);
            setGlassesEyeCare(glassesEyeCare);
            setDental(dental);
            setDoctorsMedical(doctorsMedical);
            setHobbies(hobbies);
            setClothingShoes(clothingShoes);
            setJewelleryAccessories(jewelleryAccessories);
            setComputersGadgets(computersGadgets);
            setSportsGym(sportsGym);
            setEducation(education);
            setPetCareVet(petCareVet);
            setOtherPersonalMedical(otherPersonalMedical);
            setCoffeeTea(coffeeTea);
            setLunchesBought(lunchesBought);
            setTakeAwaySnacks(takeAwaySnacks);
            setDrinksAlcohol(drinksAlcohol);
            setBarsClubs(barsClubs);
            setRestaurants(restaurants);
            setBooks(books);
            setNewspaperMagazines(newspaperMagazines);
            setMoviesMusic(moviesMusic);
            setHolidays(holidays);
            setCelebrationsGifts(celebrationsGifts);
            setOtherEntertainment(otherEntertainment);
            setBusTrainFerry(busTrainFerry);
            setPetrol(petrol);
            setRoadTollsParking(roadTollsParking);
            setRepairsMaintenance(repairsMaintenance);
            setFines(fines);
            setAirfares(airfares);
            setOtherTransportAuto(otherTransportAuto);
            setBabyProducts(babyProducts);
            setToys(toys);
            setBabysitting(babysitting);
            setChildcare(childcare);
            setSportsActivities(sportsActivities);
            setSchoolFees(schoolFees);
            setExcursions(excursions);
            setSchoolUniforms(schoolUniforms);
            setOtherSchoolNeeds(otherSchoolNeeds);
            setOtherChildren(otherChildren);
            setPlanName(planName)
        }
    }, [budgetPlanningData])

    const [totalIncome, setTotalIncome] = useState(0);
    const [totalInsuranceFinancial, setTotalInsuranceFinancial] = useState(0);
    const [totalHomeUtilities, setTotalHomeUtilities] = useState(0);
    const [totalGroceries, setTotalGroceries] = useState(0);
    const [totalPersonalMedical, setTotalPersonalMedical] = useState(0);
    const [totalEntertainment, setTotalEntertainment] = useState(0);
    const [totalTransportAuto, setTotalTransportAuto] = useState(0);
    const [totalChildren, setTotalChildren] = useState(0);

    const [summary, setSummary] = useState('');

    const [planName, setPlanName] = useState('')
    // Income Section 
    const [homePay, setHomePay] = useState(0);
    const [partnerPay, setPartnerPay] = useState(0);
    const [bonusPay, setBonusPay] = useState(0);
    const [investmentsPay, setInvestmentsPay] = useState(0);
    const [familyPay, setFamilyPay] = useState(0);
    const [otherPay, setOtherPay] = useState(0);

    // Insurance & Financial Section
    const [carInsurance, setCarInsurance] = useState(0);
    const [homeContentsInsurance, setHomeContentsInsurance] = useState(0);
    const [personalLifeInsurance, setPersonalLifeInsurance] = useState(0);
    const [healthInsurance, setHealthInsurance] = useState(0);
    const [carLoan, setCarLoan] = useState(0);
    const [creditCardInterest, setCreditCardInterest] = useState(0);
    const [otherLoans, setOtherLoans] = useState(0);
    const [payingOffDebt, setPayingOffDebt] = useState(0);
    const [charityDonations, setCharityDonations] = useState(0);
    const [otherInsuranceFinancial, setOtherInsuranceFinancial] = useState(0);

    // Home & utilities section 
    const [mortgageRent, setMortgageRent] = useState(0);
    const [bodyCorporateFees, setBodyCorporateFees] = useState(0);
    const [councilRates, setCouncilRates] = useState(0);
    const [furnitureAppliances, setFurnitureAppliances] = useState(0);
    const [electricity, setElectricity] = useState(0);
    const [gas, setGas] = useState(0);
    const [water, setWater] = useState(0);
    const [internet, setInternet] = useState(0);
    const [payTV, setPayTV] = useState(0);
    const [homePhone, setHomePhone] = useState(0);
    const [mobile, setMobile] = useState(0);
    const [otherHomeUtilities, setOtherHomeUtilities] = useState(0);

    // Groceries section 
    const [supermarket, setSupermarket] = useState(0);
    const [fruitAndVegMarket, setFruitAndVegMarket] = useState(0);
    const [fishShop, setFishShop] = useState(0);
    const [deliAndBakery, setDeliAndBakery] = useState(0);
    const [petFood, setPetFood] = useState(0);
    const [otherGroceries, setOtherGroceries] = useState(0);

    // Personal & Medical section
    const [cosmeticsToiletries, setCosmeticsToiletries] = useState(0);
    const [hairBeauty, setHairBeauty] = useState(0);
    const [medicinesPharmacy, setMedicinesPharmacy] = useState(0);
    const [glassesEyeCare, setGlassesEyeCare] = useState(0);
    const [dental, setDental] = useState(0);
    const [doctorsMedical, setDoctorsMedical] = useState(0);
    const [hobbies, setHobbies] = useState(0);
    const [clothingShoes, setClothingShoes] = useState(0);
    const [jewelleryAccessories, setJewelleryAccessories] = useState(0);
    const [computersGadgets, setComputersGadgets] = useState(0);
    const [sportsGym, setSportsGym] = useState(0);
    const [education, setEducation] = useState(0);
    const [petCareVet, setPetCareVet] = useState(0);
    const [otherPersonalMedical, setOtherPersonalMedical] = useState(0);

    // Entertainment & Eat-out section
    const [coffeeTea, setCoffeeTea] = useState(0);
    const [lunchesBought, setLunchesBought] = useState(0);
    const [takeAwaySnacks, setTakeAwaySnacks] = useState(0);
    const [drinksAlcohol, setDrinksAlcohol] = useState(0);
    const [barsClubs, setBarsClubs] = useState(0);
    const [restaurants, setRestaurants] = useState(0);
    const [books, setBooks] = useState(0);
    const [newspaperMagazines, setNewspaperMagazines] = useState(0);
    const [moviesMusic, setMoviesMusic] = useState(0);
    const [holidays, setHolidays] = useState(0);
    const [celebrationsGifts, setCelebrationsGifts] = useState(0);
    const [otherEntertainment, setOtherEntertainment] = useState(0);

    // Transport & Auto section
    const [busTrainFerry, setBusTrainFerry] = useState(0);
    const [petrol, setPetrol] = useState(0);
    const [roadTollsParking, setRoadTollsParking] = useState(0);
    const [repairsMaintenance, setRepairsMaintenance] = useState(0);
    const [fines, setFines] = useState(0);
    const [airfares, setAirfares] = useState(0);
    const [otherTransportAuto, setOtherTransportAuto] = useState(0);

    // Children section
    const [babyProducts, setBabyProducts] = useState(0);
    const [toys, setToys] = useState(0);
    const [babysitting, setBabysitting] = useState(0);
    const [childcare, setChildcare] = useState(0);
    const [sportsActivities, setSportsActivities] = useState(0);
    const [schoolFees, setSchoolFees] = useState(0);
    const [excursions, setExcursions] = useState(0);
    const [schoolUniforms, setSchoolUniforms] = useState(0);
    const [otherSchoolNeeds, setOtherSchoolNeeds] = useState(0);
    const [otherChildren, setOtherChildren] = useState(0);



    useEffect(() => {
        const updateSummary = () => {
            if (totalIncome < (totalInsuranceFinancial + totalHomeUtilities + totalHomeUtilities + totalGroceries + totalPersonalMedical + totalEntertainment + totalTransportAuto + totalChildren)) {
                setSummary(`You are spending more than you earn.`);
            } else if (totalIncome === (totalInsuranceFinancial + totalHomeUtilities)) {
                setSummary('');
            } else {
                setSummary(`Your budget is in surplus.`);
            }
        };

        updateSummary();
    }, [totalIncome, totalInsuranceFinancial, totalHomeUtilities, totalGroceries, totalPersonalMedical, totalEntertainment, totalTransportAuto, totalChildren]);



    const setFieldState = (field, setter) => (e) => {
        setter(parseFloat(e.target.value) || 0);
    };

    const calculateTotals = () => {
        // Calculate total for Income section
        const incomeValues = [homePay, partnerPay, bonusPay, investmentsPay, familyPay, otherPay];
        const incomeTotal = incomeValues.reduce((acc, value) => acc + value, 0);

        // Calculate total for Insurance & Financial section
        const insuranceFinancialValues = [
            carInsurance, homeContentsInsurance, personalLifeInsurance, healthInsurance,
            carLoan, creditCardInterest, otherLoans, payingOffDebt, charityDonations, otherInsuranceFinancial
        ];
        const insuranceFinancialTotal = insuranceFinancialValues.reduce((acc, value) => acc + value, 0);

        // Calculate total for Home & Utilities section
        const homeUtilitiesValues = [
            mortgageRent, bodyCorporateFees, councilRates, furnitureAppliances,
            electricity, gas, water, internet, payTV, homePhone, mobile, otherHomeUtilities
        ];
        const homeUtilitiesTotal = homeUtilitiesValues.reduce((acc, value) => acc + value, 0);

        // Calculate total for Groceries section
        const groceriesValues = [
            supermarket, fruitAndVegMarket, fishShop,
            deliAndBakery, petFood, otherGroceries
        ];
        const groceriesTotal = groceriesValues.reduce((acc, value) => acc + value, 0);

        // Calculate total for Personal & Medical section
        const personalMedicalValues = [
            cosmeticsToiletries, hairBeauty, medicinesPharmacy, glassesEyeCare,
            dental, doctorsMedical, hobbies, clothingShoes, jewelleryAccessories,
            computersGadgets, sportsGym, education, petCareVet, otherPersonalMedical,
        ];
        const personalMedicalTotal = personalMedicalValues.reduce((acc, value) => acc + value, 0);

        // Calculate total for Entertainment & Eat-out section
        const entertainmentValues = [
            coffeeTea, lunchesBought, takeAwaySnacks, drinksAlcohol,
            barsClubs, restaurants, books, newspaperMagazines,
            moviesMusic, holidays, celebrationsGifts, otherEntertainment,
        ];
        const entertainmentTotal = entertainmentValues.reduce((acc, value) => acc + value, 0);

        // Calculate total for Transport & Auto section
        const transportAutoValues = [
            busTrainFerry, petrol, roadTollsParking,
            repairsMaintenance, fines,
            airfares, otherTransportAuto,
        ];
        const transportAutoTotal = transportAutoValues.reduce((acc, value) => acc + value, 0);

        // Calculate total for Children section
        const childrenValues = [
            babyProducts, toys, babysitting, childcare,
            sportsActivities, schoolFees, excursions,
            schoolUniforms, otherSchoolNeeds, otherChildren,
        ];
        const childrenTotal = childrenValues.reduce((acc, value) => acc + value, 0);


        setTotalIncome(parseFloat(incomeTotal.toFixed(2)));
        setTotalInsuranceFinancial(parseFloat(insuranceFinancialTotal.toFixed(2)));
        setTotalHomeUtilities(parseFloat(homeUtilitiesTotal.toFixed(2)));
        setTotalGroceries(parseFloat(groceriesTotal.toFixed(2)));
        setTotalPersonalMedical(parseFloat(personalMedicalTotal.toFixed(2)));
        setTotalEntertainment(parseFloat(entertainmentTotal.toFixed(2)));
        setTotalTransportAuto(parseFloat(transportAutoTotal.toFixed(2)));
        setTotalChildren(parseFloat(childrenTotal.toFixed(2)));

    };

    useEffect(() => {
        calculateTotals();
    }, [
        homePay, partnerPay, bonusPay, investmentsPay, familyPay, otherPay,
        carInsurance, homeContentsInsurance, personalLifeInsurance, healthInsurance,
        carLoan, creditCardInterest, otherLoans, payingOffDebt, charityDonations, otherInsuranceFinancial,
        mortgageRent, bodyCorporateFees, councilRates, furnitureAppliances,
        electricity, gas, water, internet, payTV, homePhone, mobile, otherHomeUtilities,
        supermarket, fruitAndVegMarket, fishShop, deliAndBakery, petFood, otherGroceries, totalGroceries,
        cosmeticsToiletries, hairBeauty, medicinesPharmacy, glassesEyeCare,
        dental, doctorsMedical, hobbies, clothingShoes, jewelleryAccessories,
        computersGadgets, sportsGym, education, petCareVet, otherPersonalMedical,
        coffeeTea, lunchesBought, takeAwaySnacks, drinksAlcohol,
        barsClubs, restaurants, books, newspaperMagazines,
        moviesMusic, holidays, celebrationsGifts, otherEntertainment, busTrainFerry, petrol, roadTollsParking, repairsMaintenance, fines,
        airfares, otherTransportAuto, babyProducts, toys, babysitting, childcare,
        sportsActivities, schoolFees, excursions,
        schoolUniforms, otherSchoolNeeds, otherChildren
    ]);

    document.addEventListener("wheel", function(event){
        if(document.activeElement.type === "number"){
            document.activeElement.blur();
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const planName =  AuthUser?.email.split('@')[0];
        const budgetData = {
            // General Information
            planName: planName,
            userEmail,

            // Income
            homePay,
            partnerPay,
            bonusPay,
            investmentsPay,
            familyPay,
            otherPay,

            // Insurance
            carInsurance,
            homeContentsInsurance,
            personalLifeInsurance,
            healthInsurance,
            carLoan,
            creditCardInterest,
            otherLoans,
            payingOffDebt,
            charityDonations,
            otherInsuranceFinancial,

            // Housing Expenses
            mortgageRent,
            bodyCorporateFees,
            councilRates,
            furnitureAppliances,

            // Utilities
            electricity,
            gas,
            water,
            internet,
            payTV,
            homePhone,
            mobile,
            otherHomeUtilities,

            // Groceries
            supermarket,
            fruitAndVegMarket,
            fishShop,
            deliAndBakery,
            petFood,
            otherGroceries,
            totalGroceries,

            // Personal Care
            cosmeticsToiletries,
            hairBeauty,
            medicinesPharmacy,
            glassesEyeCare,
            dental,
            doctorsMedical,

            // Personal and Leisure
            hobbies,
            clothingShoes,
            jewelleryAccessories,
            computersGadgets,
            sportsGym,
            education,
            petCareVet,
            otherPersonalMedical,

            // Food and Drinks
            coffeeTea,
            lunchesBought,
            takeAwaySnacks,
            drinksAlcohol,

            // Entertainment
            barsClubs,
            restaurants,
            books,
            newspaperMagazines,
            moviesMusic,
            holidays,
            celebrationsGifts,
            otherEntertainment,

            // Transportation
            busTrainFerry,
            petrol,
            roadTollsParking,
            repairsMaintenance,
            fines,
            airfares,
            otherTransportAuto,

            // Children and Family
            babyProducts,
            toys,
            babysitting,
            childcare,
            sportsActivities,
            schoolFees,
            excursions,
            schoolUniforms,
            otherSchoolNeeds,
            otherChildren,
        };


        console.log(budgetData);

        try {
            const budgetDataRes = await axiosPublic.post("/api/budget", budgetData);
            console.log(budgetDataRes.data);

            if (budgetDataRes?.data.modifiedCount !== 0) {
                // show success popup
                Swal.fire({
                    position: "top-right",
                    icon: "success",
                    title: "Budget updated successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                refetch()
            }
        } catch (error) {
            console.error("Error submitting budget data:", error);
        }
    };

    const renderInputField = (label, value, onChange, frequencyOptions) => (
        <div className='grid grid-cols-1 lg:grid-cols-3 text-center items-center border-2 border-b-0 py-3'>
            <label htmlFor={label}>
                {label}
            </label>
            <div className='flex gap-4 mx-4 md:mx-0 my-2 md:my-0'>
                <input
                    onChange={onChange}
                    id={label}
                    name={label}
                    type="number"
                    value={value}
                    className="input input-bordered w-2/3 focus:border-0 rounded-none"
                />
                <select name={`${label}Frequency`} className="select focus:border-0 w-2/3 select-bordered rounded-none">
                    {frequencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <p>{value} Tk</p>
        </div>
    );

    const incomeFields = [
        { label: 'Your salary', value: homePay || '', onChange: setFieldState('homePay', setHomePay) },
        { label: 'Your partner take-home pay', value: partnerPay || '', onChange: setFieldState('partnerPay', setPartnerPay) },
        { label: 'Bonuses & overtime', value: bonusPay || '', onChange: setFieldState('bonusPay', setBonusPay) },
        { label: 'Income from savings & investments', value: investmentsPay || '', onChange: setFieldState('investmentsPay', setInvestmentsPay) },
        { label: 'Family benefit payments', value: familyPay || '', onChange: setFieldState('familyPay', setFamilyPay) },
        { label: 'Other', value: otherPay || '', onChange: setFieldState('otherPay', setOtherPay) },
    ];

    const insuranceFinancialFields = [
        { label: 'Car Insurance', value: carInsurance || '', onChange: setFieldState('carInsurance', setCarInsurance) },
        { label: 'Home Contents Insurance', value: homeContentsInsurance || '', onChange: setFieldState('homeContentsInsurance', setHomeContentsInsurance) },
        { label: 'Personal Life Insurance', value: personalLifeInsurance || '', onChange: setFieldState('personalLifeInsurance', setPersonalLifeInsurance) },
        { label: 'Health Insurance', value: healthInsurance || '', onChange: setFieldState('healthInsurance', setHealthInsurance) },
        { label: 'Car Loan', value: carLoan || '', onChange: setFieldState('carLoan', setCarLoan) },
        { label: 'Credit Card Interest', value: creditCardInterest || '', onChange: setFieldState('creditCardInterest', setCreditCardInterest) },
        { label: 'Other Loans', value: otherLoans || '', onChange: setFieldState('otherLoans', setOtherLoans) },
        { label: 'Paying Off Debt', value: payingOffDebt || '', onChange: setFieldState('payingOffDebt', setPayingOffDebt) },
        { label: 'Charity Donations', value: charityDonations || '', onChange: setFieldState('charityDonations', setCharityDonations) },
        { label: 'Other', value: otherInsuranceFinancial || '', onChange: setFieldState('otherInsuranceFinancial', setOtherInsuranceFinancial) },
    ];

    const homeUtilitiesFields = [
        { label: 'Mortgage & Rent', value: mortgageRent || '', onChange: setFieldState('mortgageRent', setMortgageRent) },
        { label: 'Body Corporate Fees', value: bodyCorporateFees || '', onChange: setFieldState('bodyCorporateFees', setBodyCorporateFees) },
        { label: 'Council Rates', value: councilRates || '', onChange: setFieldState('councilRates', setCouncilRates) },
        { label: 'Furniture & Appliances', value: furnitureAppliances || '', onChange: setFieldState('furnitureAppliances', setFurnitureAppliances) },
        { label: 'Electricity', value: electricity || '', onChange: setFieldState('electricity', setElectricity) },
        { label: 'Gas', value: gas || '', onChange: setFieldState('gas', setGas) },
        { label: 'Water', value: water || '', onChange: setFieldState('water', setWater) },
        { label: 'Internet', value: internet || '', onChange: setFieldState('internet', setInternet) },
        { label: 'Pay TV', value: payTV || '', onChange: setFieldState('payTV', setPayTV) },
        { label: 'Home Phone', value: homePhone || '', onChange: setFieldState('homePhone', setHomePhone) },
        { label: 'Mobile', value: mobile || '', onChange: setFieldState('mobile', setMobile) },
        { label: 'Other', value: otherHomeUtilities || '', onChange: setFieldState('otherHomeUtilities', setOtherHomeUtilities) },
    ];

    const groceriesFields = [
        { label: 'Supermarket', value: supermarket || '', onChange: setFieldState('supermarket', setSupermarket) },
        { label: 'Fruit & Veg Market', value: fruitAndVegMarket || '', onChange: setFieldState('fruitAndVegMarket', setFruitAndVegMarket) },
        { label: 'Fish Shop', value: fishShop || '', onChange: setFieldState('fishShop', setFishShop) },
        { label: 'Deli & Bakery', value: deliAndBakery || '', onChange: setFieldState('deliAndBakery', setDeliAndBakery) },
        { label: 'Pet Food', value: petFood || '', onChange: setFieldState('petFood', setPetFood) },
        { label: 'Other', value: otherGroceries || '', onChange: setFieldState('otherGroceries', setOtherGroceries) },
    ]

    const personalMedicalFields = [
        { label: 'Cosmetics & Toiletries', value: cosmeticsToiletries || '', onChange: setFieldState('cosmeticsToiletries', setCosmeticsToiletries) },
        { label: 'Hair & Beauty', value: hairBeauty || '', onChange: setFieldState('hairBeauty', setHairBeauty) },
        { label: 'Medicines & Pharmacy', value: medicinesPharmacy || '', onChange: setFieldState('medicinesPharmacy', setMedicinesPharmacy) },
        { label: 'Glasses & Eye Care', value: glassesEyeCare || '', onChange: setFieldState('glassesEyeCare', setGlassesEyeCare) },
        { label: 'Dental', value: dental || '', onChange: setFieldState('dental', setDental) },
        { label: 'Doctors & Medical', value: doctorsMedical || '', onChange: setFieldState('doctorsMedical', setDoctorsMedical) },
        { label: 'Hobbies', value: hobbies || '', onChange: setFieldState('hobbies', setHobbies) },
        { label: 'Clothing & Shoes', value: clothingShoes || '', onChange: setFieldState('clothingShoes', setClothingShoes) },
        { label: 'Jewellery & Accessories', value: jewelleryAccessories || '', onChange: setFieldState('jewelleryAccessories', setJewelleryAccessories) },
        { label: 'Computers & Gadgets', value: computersGadgets || '', onChange: setFieldState('computersGadgets', setComputersGadgets) },
        { label: 'Sports & Gym', value: sportsGym || '', onChange: setFieldState('sportsGym', setSportsGym) },
        { label: 'Education', value: education || '', onChange: setFieldState('education', setEducation) },
        { label: 'Pet Care & Vet', value: petCareVet || '', onChange: setFieldState('petCareVet', setPetCareVet) },
        { label: 'Other', value: otherPersonalMedical || '', onChange: setFieldState('otherPersonalMedical', setOtherPersonalMedical) },
    ];
    // Entertainment & Eat-out section
    const entertainmentFields = [
        { label: 'Coffee & Tea', value: coffeeTea || '', onChange: setFieldState('coffeeTea', setCoffeeTea) },
        { label: 'Lunches - Bought', value: lunchesBought || '', onChange: setFieldState('lunchesBought', setLunchesBought) },
        { label: 'Take-away & Snacks', value: takeAwaySnacks || '', onChange: setFieldState('takeAwaySnacks', setTakeAwaySnacks) },
        { label: 'Drinks & Alcohol', value: drinksAlcohol || '', onChange: setFieldState('drinksAlcohol', setDrinksAlcohol) },
        { label: 'Bars & Clubs', value: barsClubs || '', onChange: setFieldState('barsClubs', setBarsClubs) },
        { label: 'Restaurants', value: restaurants || '', onChange: setFieldState('restaurants', setRestaurants) },
        { label: 'Books', value: books || '', onChange: setFieldState('books', setBooks) },
        { label: 'Newspaper & Magazines', value: newspaperMagazines || '', onChange: setFieldState('newspaperMagazines', setNewspaperMagazines) },
        { label: 'Movies & Music', value: moviesMusic || '', onChange: setFieldState('moviesMusic', setMoviesMusic) },
        { label: 'Holidays', value: holidays || '', onChange: setFieldState('holidays', setHolidays) },
        { label: 'Celebrations & Gifts', value: celebrationsGifts || '', onChange: setFieldState('celebrationsGifts', setCelebrationsGifts) },
        { label: 'Other', value: otherEntertainment || '', onChange: setFieldState('otherEntertainment', setOtherEntertainment) },
    ];

    // Transport & Auto section
    const transportAutoFields = [
        { label: 'Bus & Train & Ferry', value: busTrainFerry || '', onChange: setFieldState('busTrainFerry', setBusTrainFerry) },
        { label: 'Petrol', value: petrol || '', onChange: setFieldState('petrol', setPetrol) },
        { label: 'Road Tolls & Parking', value: roadTollsParking || '', onChange: setFieldState('roadTollsParking', setRoadTollsParking) },
        { label: 'Repairs & Maintenance', value: repairsMaintenance || '', onChange: setFieldState('repairsMaintenance', setRepairsMaintenance) },
        { label: 'Fines', value: fines || '', onChange: setFieldState('fines', setFines) },
        { label: 'Airfares', value: airfares || '', onChange: setFieldState('airfares', setAirfares) },
        { label: 'Other', value: otherTransportAuto || '', onChange: setFieldState('otherTransportAuto', setOtherTransportAuto) },
    ];

    // Children section
    const childrenFields = [
        { label: 'Baby Products', value: babyProducts || '', onChange: setFieldState('babyProducts', setBabyProducts) },
        { label: 'Toys', value: toys || '', onChange: setFieldState('toys', setToys) },
        { label: 'Babysitting', value: babysitting || '', onChange: setFieldState('babysitting', setBabysitting) },
        { label: 'Childcare', value: childcare || '', onChange: setFieldState('childcare', setChildcare) },
        { label: 'Sports & Activities', value: sportsActivities || '', onChange: setFieldState('sportsActivities', setSportsActivities) },
        { label: 'School Fees', value: schoolFees || '', onChange: setFieldState('schoolFees', setSchoolFees) },
        { label: 'Excursions', value: excursions || '', onChange: setFieldState('excursions', setExcursions) },
        { label: 'School Uniforms', value: schoolUniforms || '', onChange: setFieldState('schoolUniforms', setSchoolUniforms) },
        { label: 'Other School Needs', value: otherSchoolNeeds || '', onChange: setFieldState('otherSchoolNeeds', setOtherSchoolNeeds) },
        { label: 'Other', value: otherChildren || '', onChange: setFieldState('otherChildren', setOtherChildren) },
    ];


    const frequencyOptions = ['Monthly']; // Add other frequency options if needed

    return (
        <div className="mx-2 pt-10 md:mx-20 mt-4">
            <form onSubmit={handleSubmit} className=' '>
                <div className="space-y-3">
                    {/* <div className="mb-6 ml-10 md:ml-0">
                        <label htmlFor='planName' className=''>
                            Your Name
                        </label>
                        <div className='mt-2'>
                            <input
                                required
                                id='planName' name="planName" defaultValue={planName} type="text" className="input input-bordered w-2/3 focus:border-0 rounded-none"
                            />
                        </div>
                    </div> */}

                    <div className="collapse bg-base-200 mb-2 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            <h1 className="py-2 px-4 flex flex-col md:flex-row justify-between">
                                <span>Income</span>
                                <p>{totalIncome} Tk</p>
                            </h1>
                        </div>
                        <div className="collapse-content px-8">
                            {incomeFields.map(({ label, value, onChange }) => renderInputField(label, value, onChange, frequencyOptions))}
                        </div>
                    </div>

                    <div className="collapse bg-base-200 rounded-none mb-2">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            <h1 className="py-2 px-4 flex flex-col md:flex-row justify-between">
                                <span>Insurance & financial</span>
                                <p>{totalInsuranceFinancial} Tk</p>
                            </h1>
                        </div>
                        <div className="collapse-content px-8">
                            {insuranceFinancialFields.map(({ label, value, onChange }) => renderInputField(label, value, onChange, frequencyOptions))}
                        </div>
                    </div>
                    {/* Home & Utilities Section */}
                    <div className="collapse bg-base-200 rounded-none mb-2">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            <h1 className="py-2 px-4 flex flex-col md:flex-row justify-between">
                                <span>Home & Utilities</span>
                                <p>{totalHomeUtilities} Tk</p>
                            </h1>
                        </div>
                        <div className="collapse-content px-8">
                            {homeUtilitiesFields.map(({ label, value, onChange }) => renderInputField(label, value, onChange, frequencyOptions))}
                        </div>
                    </div>

                    <div className="collapse bg-base-200 rounded-none mb-2">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            <h1 className="py-2 px-4 flex flex-col md:flex-row justify-between">
                                <span>Groceries</span>
                                <p>{totalGroceries} Tk</p>
                            </h1>
                        </div>
                        <div className="collapse-content px-8">
                            {groceriesFields.map(({ label, value, onChange }) => renderInputField(label, value, onChange, frequencyOptions))}
                        </div>
                    </div>

                    <div className="collapse bg-base-200 rounded-none mb-2">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            <h1 className="py-2 px-4 flex flex-col md:flex-row justify-between">
                                <span>Personal & Medical</span>
                                <p>{totalPersonalMedical} Tk</p>
                            </h1>
                        </div>
                        <div className="collapse-content px-8">
                            {personalMedicalFields.map(({ label, value, onChange }) => renderInputField(label, value, onChange, frequencyOptions))}
                        </div>
                    </div>
                </div>

                <div className="collapse bg-base-200 rounded-none mb-2">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        <h1 className="py-2 px-4 flex flex-col md:flex-row justify-between">
                            <span>Entertainment & Eat-out</span>
                            <p>{totalEntertainment} Tk</p>
                        </h1>
                    </div>
                    <div className="collapse-content px-8">
                        {entertainmentFields.map(({ label, value, onChange }) => renderInputField(label, value, onChange, frequencyOptions))}
                    </div>
                </div>

                <div className="collapse bg-base-200 rounded-none mb-2">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        <h1 className="py-2 px-4 flex flex-col md:flex-row justify-between">
                            <span>Transport & Auto</span>
                            <p>{totalTransportAuto} Tk</p>
                        </h1>
                    </div>
                    <div className="collapse-content px-8">
                        {transportAutoFields.map(({ label, value, onChange }) => renderInputField(label, value, onChange, frequencyOptions))}
                    </div>
                </div>

                <div className="collapse bg-base-200 rounded-none mb-2">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        <h1 className="py-2 px-4 flex flex-col md:flex-row justify-between">
                            <span>Children</span>
                            <p>{totalChildren} Tk</p>
                        </h1>
                    </div>
                    <div className="collapse-content px-8">
                        {childrenFields.map(({ label, value, onChange }) => renderInputField(label, value, onChange, frequencyOptions))}
                    </div>
                </div>

                <input type="submit" value="Save Data" className="btn w-full bg-[#399b53] text-white my-4" />





                <div data-aos="fade-up" data-aos-duration="1000">
                    <Chart
                        width={'100%'}
                        height={'400px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Category', 'Total'],
                            ['Income', totalIncome],
                            ['Insurance & Financial', totalInsuranceFinancial],
                            ['Home & Utilities', totalHomeUtilities],
                            ['Groceries', totalGroceries],
                            ['Personal & Medical', totalPersonalMedical],
                            ['Entertainment & Eat-out', totalEntertainment],
                            ['Transport & Auto', totalTransportAuto],
                            ['Children', totalChildren],
                        ]}
                        options={{
                            title: 'Income vs Expense',
                            sliceVisibilityThreshold: 0.01,
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>
                <h1 className="text-gray-50 pl-8 mt-2 py-6 pr-[60px]  bg-blue-400">
                    <div className="text-2xl font-medium flex flex-col md:flex-row justify-between">
                        <span className="">Summary</span>
                        <p className=""> {totalIncome - (totalInsuranceFinancial + totalHomeUtilities + totalGroceries + totalPersonalMedical + totalEntertainment + totalTransportAuto + totalChildren)} Tk </p>
                    </div>
                    <h1 className="mt-2 text-xl">{summary}</h1>
                </h1>

            </form>
            {/* {
                budgetPlanningData?.map(budgetData => <BudgetData budgetData={budgetData} key={budgetData._id}></BudgetData>)

            } */}
        </div>
    );
};

export default BudgetPlanning;
