
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";



const PayTax = () => {
  const { AuthUser } = useAuth();
  const handleDonateTax = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log("log data ", form);
    const amount = parseFloat(form.amount.value);
    const currency_type = form.currency_type.value;
    const organizer_name = form.organizer_name.value;
    const name = form.name.value;
    const address = form.address.value;
    const post_code = parseFloat(form.post_code.value);
    const phone_no = parseFloat(form.phone_no.value);
    const email = AuthUser?.email;

    const data = {
      amount,
      currency_type,
      organizer_name,
      trxType: 'tax',
      name,
      address,
      post_code,
      phone_no,
      email,


    }

    console.log(data);
    axios.post('https://quick-finance-server-side.vercel.app/api/payments', data)
      .then((res) => {
        window.location.replace(res?.data?.url)
        console.log(res.data);

      })




  }
  const storageAmount = localStorage.getItem('tax_money');

  return (
    <div className='overflow-x-hidden'>
      <div className={`bg-cover pt-10  bg-[url('/tax.jpg')] bg-opacity-60  bg-no-repeat bg-center shadow-lg overflow-hidden hero min-h-screen `}>
        <div className={` hero-content flex-col lg:flex-row`}>
          <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-center lg:text-left bg-black bg-opacity-50 rounded-xl text-white p-8">
            <h1 className="text-5xl lg:text-5xl font-bold ">Navigating Your Tax
              <br />
              <span className='text-white'>Responsibilities with Ease <br /> and Confidence</span></h1>
            <p className="py-6 lg:text-3xl  text-white">Ensure Your Tax Obligation with Confidence through Trusted Channels, Providing Support and Stability to Communities in Need.</p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleDonateTax} className="card-body ">
              <div className="lg:flex gap-5  items-center">
                <div className="form-control">
                  <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                    <span className="">Tax paying Amount</span>
                  </label>
                  <input type="number" name='amount' defaultValue={storageAmount} min={0.00} placeholder="Donated Amount" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" required />
                </div>
                <div className="form-control">
                  <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                    <span className="">Currency</span>
                  </label>
                  <select type="text" name='currency_type' placeholder="Currency" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" required >

                    <option value="BDT">BDT</option>
                    <option value="USD">USD</option>


                  </select>
                </div>
              </div>
              <div >
                <div className="form-control">
                  <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                    <span className="">Tax Collections Organization</span>
                  </label>
                  <select type="text" name='organizer_name' placeholder="Tax Donations Organization" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" required >

                    <option value="BD TAX">BD TAX </option>


                  </select>
                </div>
                <div className="form-control">
                  <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                    <span className="">Your Name</span>
                  </label>
                  <input type="text" name='name' placeholder="Your Name" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" required />
                </div>
              </div>
              <div className="form-control">
                <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                  <span className="">Your Address</span>
                </label>
                <input type="text" name='address' placeholder="Your Address" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" required />
              </div>
              <div className="form-control">
                <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                  <span className="">Post Code</span>
                </label>
                <input type="number" name='post_code' placeholder="Your Post Code" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" required />
              </div>
              <div className="form-control">
                <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                  <span className="">Phone No:</span>
                </label>
                <input type="number" name='phone_no' placeholder="Phone Number" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" required />
              </div>
              <div className="form-control mt-6">
                <button className="sharedBtn">Pay Your TAX</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayTax;