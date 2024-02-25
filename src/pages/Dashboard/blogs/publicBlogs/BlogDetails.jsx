import ReactQuill from "react-quill";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import useAuth from "../../../../Hooks/useAuth";
import toast from "react-hot-toast";


const BlogDetails = () => {
    const axiosPublic = useAxiosPublic();
    const {AuthUser} = useAuth();
    const { blogId } = useParams();
    const [blogDetails, setBlogDetails] = useState({});
    const [loading, setLoading] = useState(true);
    // console.log(blogDetails);
    const [liked, setLiked] = useState(false);
    



    // handle like
    const handleLike = () => {
        if(!AuthUser){
            toast.error('You need to login to like this blog');
            return;
        }

        axiosPublic.patch(`/api/blogs/like/${blogId}`, {userEmail: AuthUser?.email})
        .then(res => {
            setLiked(!liked);
            console.log(res.data);
        })


    }


    useEffect(() => {
        axiosPublic.get(`/api/blogs/blog/${blogId}`)
        .then(res => {
            setBlogDetails(res.data);
            setLoading(false);

            // check if user liked this blog
            if(res.data.likedBy.includes(AuthUser.email)){
                setLiked(true);
            }
        })
    }, [ liked ])

    if(loading) return (<div>Loading...</div>)

    return (
        <div className="pt-28 max-w-3xl mx-auto">
            <div className=" 
                container mx-auto
            ">


                <div className='mb-20'>


                {/* show user details */}
                <div className="flex justify-between items-center mb-6">
                <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                    <div className="flex-shrink-0">
                        <img src={blogDetails.userImg}
                        className="size-12 rounded-full"
                        alt="" />
                    </div>

                    <div className="grow">
                    <div className="flex justify-between items-center gap-x-2">
                        <div>
                        
                        <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                            <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                                {blogDetails.userName}
                            </span>

                            </div>
                        </div>
                        

                        <ul className="text-xs text-gray-500">
                            <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                            {
                                new Date(blogDetails.createdAt).toLocaleDateString()
                            }
                            </li>
                            <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                             {/* likes */}
                                {blogDetails.likes} likes
                            </li>
                        </ul>
                        </div>

                        
                        <div>
                            
                            {liked ?
                                <div className='flex flex-row justify-center items-center gap-4'>
                                    <button 
                                        onClick={handleLike}
                                        className='btn btn-sm btn-primary'
                                    >
                                        <BiLike className='text-2xl'/> Liked
                                    </button>
                                </div>
                                :
                                <div className='flex flex-row justify-center items-center gap-4'>
                                    <button 
                                        onClick={handleLike}
                                        className='btn btn-sm btn-secondary'
                                    >
                                        <BiLike className='text-2xl'/> Like
                                    </button> 
                                </div>
                            }

                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>


                    {/* show title */}
                    <div className="text-4xl font-bold text-center my-4">{blogDetails.title}</div>


                    {/* show all tags */}
                    <div className='flex justify-center gap-2'>
                        {blogDetails.tags.map((tag, index) => {
                            return <div key={index} className=' m-2 btn btn-sm rounded-lg'> 
                                        <Link to={`/blog/tag/${tag}`}> {tag}</Link>
                                    </div>
                        })}
                    </div>
                    
                    
                    {/* show content */}
                    <ReactQuill
                        value={blogDetails.content}
                        readOnly={true}
                        theme="bubble"
                    />


                    
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;