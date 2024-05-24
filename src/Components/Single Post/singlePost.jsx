import { Avatar } from 'antd'
import {ClockCircleOutlined, EyeOutlined, MessageOutlined} from "@ant-design/icons"
import postRender from '../../Helpers/postRender'
const SinglePost = () => {

    let postData = [
        {
            type: "paragraph",
            content: "কথায় বলে, সবুরে মেওয়া ফলে। ধৈর্য ধরে কাজ করলে অবশ্যই আপনি সফলতা পাবেন।কিন্তু কিছু কিছু সময়ে ধৈর্য ধারণ করা বেশ কঠিন হয়ে যায়। কেউ কেউ জন্মগতভাবেই ধৈর্যশীল হয়ে থাকে, আবার কারোর কারোর ধৈর্য একদম কম থাকে! অল্পতেই ধৈর্য হারিয়ে যায় আপনারও? জীবনে প্রতিকূলতা আসবে, তাই বলে অধৈর্য হলে চলবে না। চলুন জেনে নেই ধৈর্য বাড়ানোর কিছু কৌশল যেগুলো আপনার জীবনকে অনেকটাই সহজ করবে।"
        },
        {
            type: "headers",
            contents: [
                {title: "আত্মবিশ্বাসী হয়ে উঠুন",content:"আত্মবিশ্বাস শুধু ধৈর্য বাড়ায় তা নয়, সফলতা অর্জনেও সাহায্য করে। তাই নিজে নিজের প্রতি আত্মবিশ্বাসী হয়ে উঠুন। আত্মবিশ্বাস আপনার সফলতা চাবিকাঠি।"},
                {title: "ভালো শ্রোতা হওয়ার চেষ্টা করুন",content:"আপনি কি আরেকজনের কথা শেষ হওয়া পর্যন্ত অপেক্ষা করছেন? আমরা অনেকেই আরেকজনের কথা শেষ না হওয়া পর্যন্ত অপেক্ষা করতে চায় না, নিজেরটা আগে বলতে চাই বা কথার মাঝে ব্যাঘাত ঘটায়। এখানে কিন্তু আপনি ধৈর্যশীলের পরিচয় দিচ্ছেন না! অন্যের কথা শোনার চেষ্টা করুন; বিষয় যা-ই হোক না কেন, সে কী বলছে তা বোঝার চেষ্টা করুন। ভালো শ্রোতা হয়ে উঠুন। ধৈর্য বৃদ্ধি করার আরেকটি সহজ উপায় হলো ভালো শ্রোতা হওয়া।"},
                {title: "অল্পতেই ধৈর্য না হারিয়ে মেনে নিতে শিখুন",content:"যে পরিস্থিতি আপনি পরিবর্তন করতে পারবেন না, আপনার নিয়ন্ত্রণের বাইরে; সেটি মেনে নিতে পারা একটি বড় গুণ। এই কৌশলটি আপনার ধৈর্য বৃদ্ধিতে সাহায্য করবে। বিশেষ করে প্রতিদিনের বিভিন্ন ঝামেলা সহজে এড়াতে পারবেন।কোনো অন্যায় মেনে নেওয়ার কথা বলছি না। আপনার স্কিল কাজে লাগিয়ে সিচুয়েশন সামাল দেওয়ার ট্রাই করুন। অধিকাংশ সময় আমরা অধৈর্য হয়ে পড়ি, কারণ আমরা পরিস্থিতি দ্রুত পরিবর্তন করতে চাই, সবকিছু নিজের মতো করে পেতে চাই। কিছু ক্ষেত্রে আপনাকে কম্প্রোমাইজ করতে হবে। সব পরিস্থিতি আপনি পরিবর্তন করতে পারবেন না, বরং সেগুলো গ্রহণ করতে শিখুন।"},
            ]
        },
        {
            type: "list",
            number: "1",
            description: "রাসূল সা. ইরশাদ করেন: “আল্লাহ তাআলা তোমাদের উপর রমযান শরীফের রোযা ফরয করেছেন।আর রাতের নামায অর্থাৎ, তারাবীহকে আমি তোমাদের জন্য সুন্নত করেছি। সুতরাং যে ব্যক্তি ঈমানী প্রেরণা ও সওয়াবের উদ্দেশ্যে এ মাসে রোযা রাখবে এবং তারাবীহ নামায পড়বে, সে ব্যক্তি গুনাহ থেকে এরূপ মুক্ত হয়ে যাবে যেন আজই তার মা তাকে প্রসব করেছেন।” (সুনানে নাসায়ী,হাদীস নং:২২১০)",
        },
        {
            type: "paragraph",
            content: "কথায় বলে, সবুরে মেওয়া ফলে। ধৈর্য ধরে কাজ করলে অবশ্যই আপনি সফলতা পাবেন।কিন্তু কিছু কিছু সময়ে ধৈর্য ধারণ করা বেশ কঠিন হয়ে যায়। কেউ কেউ জন্মগতভাবেই ধৈর্যশীল হয়ে থাকে, আবার কারোর কারোর ধৈর্য একদম কম থাকে! অল্পতেই ধৈর্য হারিয়ে যায় আপনারও? জীবনে প্রতিকূলতা আসবে, তাই বলে অধৈর্য হলে চলবে না। চলুন জেনে নেই ধৈর্য বাড়ানোর কিছু কৌশল যেগুলো আপনার জীবনকে অনেকটাই সহজ করবে।"
        },
    ]


    return(
        <>
        <div className='w-2/5 mx-auto px-auto'>
            <img className='w-full my-16 ' src="https://doislah.com/wp-content/uploads/2022/08/Default-image-800x400.jpg"/>
           <a href='./categories/ibadat'> <span className='px-2 py-1 bg-green-500 text-sm  rounded text-white cursor-pointer'>Ibadat</span></a>
            <p className='text-4xl my-6 font-bold'>সবর (ধৈর্য ) লাভ করার উপায় </p>
            <div>
            <Avatar size={32} src={"https://secure.gravatar.com/avatar/f85509f3663713feaf658cbe045e6fef?s=50&d=mm&r=g"} />
            <span className='text-sm ml-2'>আল্লামা আব্দুল</span> 
            <span className='text-sm ml-2 text-gray-500'><ClockCircleOutlined /> 23 May, 202</span> 
            <span className='text-sm ml-2 text-gray-500'><EyeOutlined /> 15</span>
            <span className='text-sm ml-2 text-gray-500'><MessageOutlined /> 15</span>
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