import { useState } from "react";
import Cards from "./Main Compo/Cards";
import Carts from "./Main Compo/Carts";
import { useEffect } from "react";


const Main = () => {
    let [courses, setCourses] = useState([]);
    let [selectedCourse, setSelectedCourse] = useState([]);
    let [count,setCount] = useState(0);

    let handleAddToCart = (course) => {
        let alreadyExist = selectedCourse.find(item => item.id === course.id);
        if (!alreadyExist) {
            let newSelected = [...selectedCourse, course]
            setSelectedCourse(newSelected);
            setCount(count+1);
        }

    }
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="flex gap-5 flex-col-reverse bg-gray-200 rounded-md md:flex-row max-w-screen-xl mx-auto px-4 md:px-8 pt-5">
            <div className="w-full md:w-3/4 bg-white rounded-md">
                <Cards courses={courses} handleAddToCart={handleAddToCart}></Cards>
            </div>
            <div className=" w-full md:w-1/4 bg-white rounded-md">
                <Carts selectedCourse={selectedCourse}></Carts>
            </div>
        </div>
    );
};

export default Main;