


// const BudgetData = ({ budgetData }) => {
//     const { _id, planName, userEmail, homePay, partnerPay, bonusPay, investmentsPay, familyPay, otherPay, carInsurance, homeContentsInsurance, personalLifeInsurance, healthInsurance, carLoan, creditCardInterest, otherLoans, payingOffDebt, charityDonations, otherInsuranceFinancial, mortgageRent, bodyCorporateFees, councilRates, furnitureAppliances, electricity, gas, water, internet, payTV, homePhone, mobile, otherHomeUtilities, supermarket, fruitAndVegMarket, fishShop, deliAndBakery, petFood, otherGroceries, totalGroceries, cosmeticsToiletries, hairBeauty, medicinesPharmacy, glassesEyeCare, dental, doctorsMedical, hobbies, clothingShoes, jewelleryAccessories, computersGadgets, sportsGym, education, petCareVet, otherPersonalMedical, coffeeTea, lunchesBought, takeAwaySnacks, drinksAlcohol, barsClubs, restaurants, books, newspaperMagazines, moviesMusic, holidays, celebrationsGifts, otherEntertainment, busTrainFerry, petrol, roadTollsParking, repairsMaintenance, fines, airfares, otherTransportAuto, babyProducts, toys, babysitting, childcare, sportsActivities, schoolFees, excursions, schoolUniforms, otherSchoolNeeds, otherChildren } = budgetData;


//     return (
//         <div className="">
//             <h1>ID: {_id}</h1>
//             <h1>Plan Name: {planName}</h1>
//             <h1>User Email: {userEmail}</h1>

//             {/* Income */}
//             <h1>Home Pay: {homePay}</h1>
//             <h1>Partner Pay: {partnerPay}</h1>
//             <h1>Bonus Pay: {bonusPay}</h1>
//             <h1>Investments Pay: {investmentsPay}</h1>
//             <h1>Family Pay: {familyPay}</h1>
//             <h1>Other Pay: {otherPay}</h1>

//             {/* Insurance & Financial */}
//             <h1>Car Insurance: {carInsurance}</h1>
//             <h1>Home Contents Insurance: {homeContentsInsurance}</h1>
//             <h1>Personal Life Insurance: {personalLifeInsurance}</h1>
//             <h1>Health Insurance: {healthInsurance}</h1>
//             <h1>Car Loan: {carLoan}</h1>
//             <h1>Credit Card Interest: {creditCardInterest}</h1>
//             <h1>Other Loans: {otherLoans}</h1>
//             <h1>Paying Off Debt: {payingOffDebt}</h1>
//             <h1>Charity Donations: {charityDonations}</h1>
//             <h1>Other Insurance & Financial: {otherInsuranceFinancial}</h1>

//             {/* Home & Utilities */}
//             <h1>Mortgage/Rent: {mortgageRent}</h1>
//             <h1>Body Corporate Fees: {bodyCorporateFees}</h1>
//             <h1>Council Rates: {councilRates}</h1>
//             <h1>Furniture & Appliances: {furnitureAppliances}</h1>

//             {/* Utilities */}
//             <h1>Electricity: {electricity}</h1>
//             <h1>Gas: {gas}</h1>
//             <h1>Water: {water}</h1>
//             <h1>Internet: {internet}</h1>
//             <h1>Pay TV: {payTV}</h1>
//             <h1>Home Phone: {homePhone}</h1>
//             <h1>Mobile: {mobile}</h1>
//             <h1>Other Home Utilities: {otherHomeUtilities}</h1>

//             {/* Groceries */}
//             <h1>Supermarket: {supermarket}</h1>
//             <h1>Fruit & Veg Market: {fruitAndVegMarket}</h1>
//             <h1>Fish Shop: {fishShop}</h1>
//             <h1>Deli & Bakery: {deliAndBakery}</h1>
//             <h1>Pet Food: {petFood}</h1>
//             <h1>Other Groceries: {otherGroceries}</h1>
//             <h1>Total Groceries: {totalGroceries}</h1>

//             {/* Personal & Medical */}
//             <h1>Cosmetics & Toiletries: {cosmeticsToiletries}</h1>
//             <h1>Hair & Beauty: {hairBeauty}</h1>
//             <h1>Medicines & Pharmacy: {medicinesPharmacy}</h1>
//             <h1>Glasses & Eye Care: {glassesEyeCare}</h1>
//             <h1>Dental: {dental}</h1>
//             <h1>Doctors & Medical: {doctorsMedical}</h1>

//             <h1>Internet: {internet}</h1>
//             {/* Personal and Leisure */}
//             <h1>Hobbies: {hobbies}</h1>
//             <h1>Clothing & Shoes: {clothingShoes}</h1>
//             <h1>Jewellery & Accessories: {jewelleryAccessories}</h1>
//             <h1>Computers & Gadgets: {computersGadgets}</h1>
//             <h1>Sports & Gym: {sportsGym}</h1>
//             <h1>Education: {education}</h1>
//             <h1>Pet Care & Vet: {petCareVet}</h1>
//             <h1>Other Personal Medical: {otherPersonalMedical}</h1>

//             {/* Food and Drinks */}
//             <h1>Coffee & Tea: {coffeeTea}</h1>
//             <h1>Lunches - Bought: {lunchesBought}</h1>
//             <h1>Take-away & Snacks: {takeAwaySnacks}</h1>
//             <h1>Drinks & Alcohol: {drinksAlcohol}</h1>

//             {/* Entertainment */}
//             <h1>Bars & Clubs: {barsClubs}</h1>
//             <h1>Restaurants: {restaurants}</h1>
//             <h1>Books: {books}</h1>
//             <h1>Newspaper & Magazines: {newspaperMagazines}</h1>
//             <h1>Movies & Music: {moviesMusic}</h1>
//             <h1>Holidays: {holidays}</h1>
//             <h1>Celebrations & Gifts: {celebrationsGifts}</h1>
//             <h1>Other Entertainment: {otherEntertainment}</h1>

//             {/* Transportation */}
//             <h1>Bus & Train & Ferry: {busTrainFerry}</h1>
//             <h1>Petrol: {petrol}</h1>
//             <h1>Road Tolls & Parking: {roadTollsParking}</h1>
//             <h1>Repairs & Maintenance: {repairsMaintenance}</h1>
//             <h1>Fines: {fines}</h1>
//             <h1>Airfares: {airfares}</h1>
//             <h1>Other Transport & Auto: {otherTransportAuto}</h1>

//             {/* Children and Family */}
//             <h1>Baby Products: {babyProducts}</h1>
//             <h1>Toys: {toys}</h1>
//             <h1>Babysitting: {babysitting}</h1>
//             <h1>Childcare: {childcare}</h1>
//             <h1>Sports & Activities: {sportsActivities}</h1>
//             <h1>School Fees: {schoolFees}</h1>
//             <h1>Excursions: {excursions}</h1>
//             <h1>School Uniforms: {schoolUniforms}</h1>
//             <h1>Other School Needs: {otherSchoolNeeds}</h1>
//             <h1>Other Children: {otherChildren}</h1>

//         </div>
//     );
// };

// export default BudgetData;