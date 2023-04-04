import React ,{ useEffect , useState }from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import {toast} from "react-toastify";
import {apiUrl,filterData} from "./data";
import NoData from "./components/NoData";


const App = () => {

const[courses,setcourses]=useState([]);
const [loading, setloading] = useState(true)
const [category, setcategory] = useState(filterData[0].title)

const fetchData=async()=>{
  setloading(true)
  try{
    const res = await fetch (apiUrl);
    const  output=await res.json();
    setcourses(output.data);
    toast.success("Successfully fetched")
  }
  catch(error){
      toast.error("Something went wrong");
      <NoData/>
  }
  setloading(false);
}

useEffect(()=>{
  fetchData();
},[])

  return(
  <div className="min-h-screen flex flex-col bg-bgDark2">
    <div>
        <Navbar/>
    </div>
   
    <div>
        <Filter filterData={filterData} category={category} setcategory={setcategory}/>
    </div>

    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"> 
      {
        loading?(<Spinner/>):( <Cards courses={courses} category={category}/>)
      }
    </div>
  </div>
  );
};

export default App;
