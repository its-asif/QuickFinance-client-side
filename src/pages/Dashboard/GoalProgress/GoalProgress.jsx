
import moment from 'moment';
import useAuth from '../../../Hooks/useAuth';
import goalImg from '/goal.png'

const GoalProgress = () => {

    const { AuthUser } = useAuth();

    // Determine the appropriate greeting based on the current time
    let greeting = (null);
    const hour = moment().hour();
    if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }
    const date = moment().format('LL');
    return (
        <div className="max-w-screen-xl mx-auto py-10 px-10">

            {/* greeting part of GoalProgress */}
            <div className="text-center">
                <div className="flex justify-center items-center">
                    <img className="w-[50px] hidden md:flex rounded-full  mr-2" src={AuthUser?.photoURL} alt="" />
                    <h1 className="md:text-2xl font-medium">
                        <span className="text-[#399b53]">{greeting}, </span> {AuthUser?.displayName}
                    </h1>

                </div>
                <div className='text-center'>
                    {date}
                </div>
            </div>
            {/*End  greeting part */}

            <div className=' flex flex-col-reverse md:flex md:flex-row justify-between items-center max-w-screen-md mx-auto'>
                <div className='flex-1'>
                    <h4 className='text-xl font-bold'>Plan Your </h4>
                    <h1 className='ml-3 text-2xl  md:text-4xl font-bold'>
                        Future
                    </h1>
                    <h1 className='ml-3 text-2xl md:text-5xl font-bold'>
                        Goals
                    </h1>
                </div>

                <div className='flex-1'>
                    <img className='' src={goalImg} alt="" />
                </div>
            </div>

        </div>
    );
};

export default GoalProgress;
