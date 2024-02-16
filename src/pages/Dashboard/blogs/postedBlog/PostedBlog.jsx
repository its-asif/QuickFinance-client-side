import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const PostedBlog = ({blogDetails, tags, title}) => {

    return (
        <div>
            {/* title */}
            <div className="text-4xl text-center mb-6">Preview Blog</div>
            

            {/* Preview section */}
            <div className='border-2 border-gray-200 mx-10 mb-20'>
                {/* show title */}
                <div className="text-4xl font-bold text-center my-4">{title}</div>

                {/* show all tags */}
                <div className='flex justify-center gap-2'>
                    {tags.map((tag, index) => {
                        return <div key={index} className=' m-2 btn btn-sm rounded-lg'>{tag}</div>
                    })}
                </div>
                 
                <ReactQuill
                    value={blogDetails}
                    readOnly={true}
                    theme="bubble"
                />
            </div>


        </div>
    );
};

export default PostedBlog;