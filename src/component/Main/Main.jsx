import { useState } from "react";
import Cards from "./Main Compo/Cards";
import Carts from "./Main Compo/Carts";
import { useEffect } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
    let [courses, setCourses] = useState([]);
    let [selectedCourse, setSelectedCourse] = useState([]);

    let handleAlreadyToast = () =>{
        toast("Already Exist");
    }
    let handleOutOfCreditToast = () =>{
        toast("Out of Credit");
    }

    let handleAddToCart = (course) => {
        let alreadyExist = selectedCourse.find(item => item.id === course.id);
        let cost = course.credit;
        selectedCourse.forEach(item=>{
            cost = cost + item.credit;
        })
        if (cost <= 20) {
            if(alreadyExist){
                handleAlreadyToast();
            }
            else{
                let newSelected = [...selectedCourse, course]
                setSelectedCourse(newSelected);  
            }
        }
        else{
            return handleOutOfCreditToast();
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