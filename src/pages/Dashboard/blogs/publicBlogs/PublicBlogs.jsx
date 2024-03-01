import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Spinner from "../../MyAsset/Spinner/Spinner";

const PublicBlogs = () => {

    const axiosPublic = useAxiosPublic();
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);


    
    useEffect(() => {
        axiosPublic.get('/api/blogs')
        .then(res => {
            setBlogs(res.data);
            setFilteredBlogs(res.data);
            setLoading(false);
        })

    }, [])

    useEffect(() => {
        const tags = blogs.map(blog => blog.tags).flat();
        setTags([...new Set(tags)]);

        // sort by latest
        setFilteredBlogs([...blogs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
    }, [blogs])
    
    // console.log(blogs)

    // sorting by date and likes
    const handleSort = (e) => {
        if(e.target.value === 'latest') {
            setFilteredBlogs([...blogs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
        } else if(e.target.value === 'oldest') {
            setFilteredBlogs([...blogs].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)))
        } else if(e.target.value === 'likes') {
            setFilteredBlogs([...blogs].sort((a, b) => b.likes - a.likes))
        }
    }


    // filter by tags
    const handleFilter = (e) => {
        if(e.target.value === 'all') {
            setFilteredBlogs(blogs)
        } else {
            setFilteredBlogs(blogs.filter(blog => blog.tags.includes(e.target.value)))
        }
    }

    if(loading) return <div className="h-screen"><Spinner /></div>

    return (
        <div className="py-16">

            <div className="text-center">
                <h1 className="text-5xl font-semibold text-gray-800 dark:text-white my-10">
                    Read our latest blogs
                </h1>
            </div>


            {/* filter and sort */}
            <div className="flex gap-6 items-center container mx-auto my-4">


                {/* filter */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Filter by Tags:</span>
                    </div>
                    <select 
                        className="select select-bordered"
                        onChange={handleFilter}
                        name="filter"
                        id="filter"
                        >
                        <option value="all" selected>All</option>
                        {
                            tags.map(tag => (
                                <option key={tag} value={tag}>{tag}</option>
                            ))
                        }
                    </select>
                </label>

                {/* sorting */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Sort by:</span>
                    </div>

                    <select 
                        onChange={handleSort} 
                        name="sort" id="sort" 
                        className="select select-bordered">
                        <option value="latest" selected>Latest</option>
                        <option value="oldest">Oldest</option>
                        <option value="likes">Likes</option>
                    </select>
                </label>
            </div>



            {/* card - blog list */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10
             container mt-5 mx-auto ">
                {
                    filteredBlogs.map(blog => (
                        <div key={blog._id} className="
                            overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-full
                            dark:bg-gray-800 dark:text-white dark:border-gray-600
                            bg-white text-gray-800 border-gray-200 border-2
                        ">
                            <div className="
                                relative overflow-hidden h-full w-full
                            ">
                                <Link to={`/blogs/${blog._id}`} className="flex flex-col w-full h-full ">
                                    <img alt="blog photo" src={blog.blogImg} className="object-cover w-full h-60"/>
                                    <div className="w-full p-4 bg-white dark:bg-gray-800 ">
                                        {/* <p className="font-medium text-indigo-500 text-md">
                                            Article
                                        </p> */}
                                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                            {blog.title}
                                        </p>
                                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                                            {blog.content.replace(/<[^>]*>?/gm, '').split(' ').slice(0, 20).join(' ')}...
                                        </p>

                                        {/* tags */}
                                        <div className="flex flex-wrap items-center mt-4 justify-start gap-2">
                                            {
                                                blog.tags.map(tag => (
                                                    <div key={tag.id} className="text-xs py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                                                        <Link to={`/blog/tag/${tag}`}> {tag}</Link>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    <div className="flex items-center m-4 mt-auto">
                                        <a href="#" className="relative block">
                                            <img alt="profil" src={blog.userImg} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                        </a>
                                        <div className="flex flex-col justify-between ml-4 text-sm">
                                            <p className="text-gray-800 dark:text-white">
                                                {blog.userName}
                                            </p>
                                            <p className="text-gray-400 dark:text-gray-300">
                                                {new Date(blog.createdAt).toLocaleDateString()} - Likes: { blog.likes} 
                                                {/* {Math.floor(blog.content.split(' ').length / 150)} min read */}
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

export default PublicBlogs;