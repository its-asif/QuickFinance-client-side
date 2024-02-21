

const DashboardHeader = ({smallTitle, largeTitle, imgSrc}) => {
    return (
        <div className=' flex flex-col md:flex-row gap-20 justify-center w-md mx-auto '>
                <div className='flex flex-col justify-center '>
                    <h4 className='ml-1 text-3xl font-bold'>{smallTitle}</h4>
                   

                    <h1 className= 'text-2xl  md:text-8xl font-bold'>
                        {largeTitle.split(' ').map((word, index) => {
                            return <span key={index} className='block'>{word}</span>
                        })}
                    </h1>
                </div>

                <div className='flex'>
                    <img className=' max-h-96 w-full' src={imgSrc} 
                    
                    alt="" />
                </div>
            </div>
    );
};

export default DashboardHeader;