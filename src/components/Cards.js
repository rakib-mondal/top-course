import React ,{useState} from 'react'
import Card from './Card';
import NoData from './NoData';
const Cards = (props) => {
  let courses=props.courses;
  let category=props.category;
  // courses=[] ---> To test when there is no data fetched and NoData Component is fetched
  const [likedCourse, setlikedCourse] = useState([]);

    let allCourses=[];
    const getCourses=()=>{
      if(category==="All"){
        Object.values(courses).forEach(coursecategory=>{
            coursecategory.forEach(course=>{
                allCourses.push(course);
            })
        });
        return  allCourses;
      }
      else{
        return courses[category]
      }
    }

// console.log(courses)
  return (
    <div className='flex justify-center flex-wrap gap-4 mb-4'>
    {
    courses.length!==0?(getCourses().map((course)=>{
       return <Card key={course.id} course={course} likedCourse={likedCourse} setlikedCourse={setlikedCourse}/>
    })):(<NoData/>)
    }
    </div>
  )
}

export default Cards