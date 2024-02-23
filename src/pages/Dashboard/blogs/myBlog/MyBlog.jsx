import { useEffect, useState } from "react";
import DashboardHeader from "../../../../Components/header/DashboardHeader";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const MyBlog = () => {
    const axiosPublic = useAxiosPublic();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosPublic.get('/api/blogs')
        .then(res => {
            setBlogs(res.data);
            setLoading(false);
        })

    }, [])
    
    console.log(blogs)

    if(loading) return (<div>Loading...</div>)

    return (
        <div>
            <DashboardHeader smallTitle={"See Your"} largeTitle={"Blogs"} imgSrc={"https://i.ibb.co/RCCJ8zL/blog-banner-img.png"} />
            
            {/* card - blog list */}
            <div className="container mt-5 mx-20">
                {
                    blogs.map(blog => (
                        <div key={blog._id} className="card mb-4">
                            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                                <Link to={`/blogs/${blog._id}`} class="block w-full h-full">
                                    <img alt="blog photo" src={blog.blogImg} className="object-cover w-full max-h-40"/>
                                    <div className="w-full p-4 bg-white dark:bg-gray-800">
                                        {/* <p class="font-medium text-indigo-500 text-md">
                                            Article
                                        </p> */}
                                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                            {blog.title}
                                        </p>
                                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                                            {/* first convert it to html then show first 20 words */}
                                            {blog.content.replace(/<[^>]*>?/gm, '').split(' ').slice(0, 20).join(' ')}...
                                        </p>
                                        <div className="flex flex-wrap items-center mt-4 justify-starts">
                                            {/* <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                                                #Car
                                            </div>
                                            <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                                                #Money
                                            </div> */}
                                            {
                                                blog.tags.map(tag => (
                                                    <div key={tag.id} className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                                                        {tag}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    <div className="flex items-center m-4">
                                        <a href="#" className="relative block">
                                            <img alt="profil" src={blog.userImg} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                        </a>
                                        <div className="flex flex-col justify-between ml-4 text-sm">
                                            <p className="text-gray-800 dark:text-white">
                                                {blog.userName}
                                            </p>
                                            <p className="text-gray-400 dark:text-gray-300">
                                                {/* 20 mars 2029 - 6 min read */}
                                                {/* "2024-02-21T17:23:35.625Z" */}
                                                {/* count word in blog.content then divide it and give an appoximate min read */}
                                                {new Date(blog.createdAt).toLocaleDateString()} - {Math.floor(blog.content.split(' ').length / 150)} min read
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyBlog;