import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PostedBlog from './postedBlog/PostedBlog'

const MyBlogs = () => {
    
    const [value, setValue] = useState('');
    // console.log(value);
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState('');
    const [title, setTitle] = useState('');

    
    const modules = {
        toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote',
            {'align': []},
            {'color': []}, {'background': []}
        ],
            [{'list': 'ordered'}, {'list': 'bullet'},   
            {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            ['clean']
        ],
    }

    const handleChange = (content) =>{
        // add className text


        setValue(content);
        
    }

    const clipboard = {
        matchVisual: false,
    }

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'align', 'color', 'background',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ]

    const handleAddTags = () => {
        // tag in lowercase
        if(tag.length){setTags([...tags, 
            tag.toLowerCase()
        ])}
        setTag('');
    }


    return (
        <div>
            
            {/* Banner Section */}
            <div className=' flex flex-col-reverse md:flex md:flex-row  items-center max-w-screen-lg mx-auto m-4'>
                <div className='flex-1'>
                   
                    <h4 className=' text-3xl font-bold'>Publish Your </h4>

                    <h1 className='text-2xl  md:text-8xl font-bold'>
                        Finance Blogs
                    </h1>
                </div>

                <div className='flex'>
                    <img className='w-full' src={"https://i.ibb.co/RCCJ8zL/blog-banner-img.png"} 
                    alt="paymentImg" />
                </div>
            </div>

            
            {/* Blog Section */}
            <div className='flex justify-center'>
                <div className='flex-1'>
                    <h1 className='text-4xl text-center'>Write Your Blog</h1>
                </div>
            </div>

            {/* Form Section */}
            <div className='flex flex-col justify-center lg:w-1/3 mx-auto bg-green-100 p-10 m-4 rounded-lg'>

                {/* input title */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="input input-bordered border-2 border-gray-300" required />
                </div>

                {/* input tags */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Tags</span>
                    </label>
                    <div className='flex gap-2'>
                    <input type="text" placeholder="Tags" className="input input-bordered border-2 border-gray-300 w-full"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        required 
                    />

                    <div type="submit" className='btn btn-outline btn-accent text-center mx-auto text-green-900' 
                        onClick={handleAddTags} > Add Tags </div>
                    
                    </div>
                </div>

                {/* show all tags */}
                <div className='flex flex-row mt-4 gap-2'>
                    <h5 className='font-semibold mr-2'>Tags : </h5>
                    {tags.map((tag, index) => {

                        return (
                            <div key={index} className='flex gap-2'>
                                <div className='btn btn-sm bg-green-100 rounded-lg'>
                                    {tag}

                                {/* X */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                    onClick={() => {
                                        setTags(tags.filter((item, i) => i !== index))
                                    }}
                                className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </div>
                            </div>
                        )

                    })}
                </div>
            
            </div>


            {/* Quill Editor */}
            <div className='w-full'>
                
                <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={(value) => handleChange(value)}
                    modules={modules}
                    formats={formats}
                    clipboard={clipboard}
                    placeholder='Write your blog...'
                    className='h-[500px] border-2 border-gray-300 rounded-lg p-2  m-10 overflow-y-scroll'

                />

                <div className='w-full text-center mb-10'>
                    <div className='btn btn-outline btn-wide text-xl text-green-700 btn-accent text-center mx-auto'
                    > POST BLOG</div>
                </div>

            </div>

            <PostedBlog blogDetails={value} tags={tags} title={title} />

        </div>
    );
};

export default MyBlogs;