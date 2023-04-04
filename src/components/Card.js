import React,{useState} from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
const Card = (props) => {
    let course=props.course;
    let likedCourse=props.likedCourse;
    let setlikedCourse=props.setlikedCourse;
    let info=course.description
    const [readMore, setReadMore] = useState(false);
    const description= readMore ? info:`${info.substring(0,100)}....`;
    function readMoreHandler(){
        setReadMore(!readMore);
    }

    function clickHandler(){
        if(likedCourse.includes(course.id)){
            setlikedCourse((prev)=>prev.filter((cid)=>(cid!==course.id)));
            toast.warning("Like Removed")
        }
        else{
            // setlikedCourse((prev)=>prev.push(course.id));
            // 
            if(likedCourse.length===0){
                setlikedCourse([course.id]);
                toast.success("Like Added")
            }
            else{
                setlikedCourse((prev)=>[...prev,course.id])
                toast.success("Like Added")
            }
        }
    }
    // let clicked=true;
  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url} alt="" />
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 top-[140px] flex justify-center items-center  '>
                <button onClick={clickHandler}>
                {
                        (likedCourse.includes(course.id)?(<FcLike fontSize="1.95rem"/>):(<FcLikePlaceholder fontSize="1.95rem"/>))
                    }
                </button>
            </div>
        </div>
        <div>
            <p className='text-white font-semibold text-lg leading-6 px-4 py-4 pb-0'>{course.title}</p>
            <p className='text-white px-4 py-2'>{description}
            <span className='text-[#ff4c4c] cursor-pointer' onClick={readMoreHandler}>
                {readMore ? '      Show Less' : 'Read More'}
            </span></p>
        </div>
    </div>
  )
}

export default Card