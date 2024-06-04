import { Avatar } from 'antd'
import {ClockCircleOutlined, EyeOutlined, MessageOutlined} from "@ant-design/icons"
import postRender from '../../Helpers/postRender'
import ProgressBar from 'react-progressbar-circle';
import ScrollProgress from '../Scroll Progress/progress';

const SinglePost = (postData) => {
  

    return(
        <>
    <ScrollProgress></ScrollProgress>
        <div className='w-2/5 mx-auto px-auto'>
            <img className='w-full my-16 ' src="https://doislah.com/wp-content/uploads/2022/08/Default-image-800x400.jpg"/>
           <a href='./categories/ibadat'> <span className='px-2 py-1 bg-green-500 text-sm  rounded text-white cursor-pointer'>Ibadat</span></a>
            <p className='text-4xl my-6 font-bold'>সবর (ধৈর্য ) লাভ করার উপায় </p>
            <div>
            <Avatar size={32} src={"https://secure.gravatar.com/avatar/f85509f3663713feaf658cbe045e6fef?s=50&d=mm&r=g"} />
            <span className='text-sm ml-2'>{postData[1].content.author}</span> 
            <span className='text-sm ml-2 text-gray-500'><ClockCircleOutlined />{postData[1].content.date}</span> 
            <span className='text-sm ml-2 text-gray-500'><EyeOutlined /> {postData[1].content.views}</span>
            <span className='text-sm ml-2 text-gray-500'><MessageOutlined /> {postData[1].content.comments.length}</span>
            </div>
            <div className='mt-6'>
               {
                postData.map((item, index) => {
                    //console.log(postRender(item))
                    return(postRender(item))
                })
                
               }
               
            </div>

        </div>
        </>
    )
}


export default SinglePost