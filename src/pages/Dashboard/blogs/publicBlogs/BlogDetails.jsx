import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";


const BlogDetails = () => {
    const axiosPublic = useAxiosPublic();
    const { blogId } = useParams();
    const [blogDetails, setBlogDetails] = useState({});
    const [loading, setLoading] = useState(true);
    console.log(blogDetails);


    useEffect(() => {
        axiosPublic.get(`/api/blogs/blog/${blogId}`)
        .then(res => {
            setBlogDetails(res.data);
            setLoading(false);
        })
    }, [])

    if(loading) return (<div>Loading...</div>)

    return (
        <div className="pt-28">
            <div className=" 
                container mx-auto
            ">


                <div className='mb-20'>
                    {/* show title */}
                    <div className="text-4xl font-bold text-center my-4">{blogDetails.title}</div>

                    {/* show all tags */}
                    <div className='flex justify-center gap-2'>
                        {blogDetails.tags.map((tag, index) => {
                            return <div key={index} className=' m-2 btn btn-sm rounded-lg'>{tag}</div>
                        })}
                    </div>
                    
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