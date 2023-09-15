import Cards from "./Main Compo/Cards/Cards";
import Carts from "./Main Compo/Carts/Carts";
import { useEffect } from "react";
import { useState } from "react";

/* Import Toast Asset */
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    /* Declare The states */
    let [courses, setCourses] = useState([]);
    let [selectedCourse, setSelectedCourse] = useState([]);

    /* Toast Function for Already Added */
    let handleAlreadyToast = () => {
        toast("Already added this Course!");
    }
    /* Toast Function for Out of Credit*/
    let handleOutOfCreditToast = () => {
        toast("Out of total Credit!");
    }
    /* Add into cart Function and Call the Toast*/
    let handleAddToCart = (course) => {
        let alreadyExist = selectedCourse.find(item => item.id === course.id);
        let cost = course.credit;
        selectedCourse.forEach(item => {
            cost = cost + item.credit;
        })
        if (cost <= 20) {

            if (alreadyExist) {
                handleAlreadyToast();
                <ToastContainer />
            }
            else {
                let newSelected = [...selectedCourse, course]
                setSelectedCourse(newSelected);
            }
        }
        else {
            handleOutOfCreditToast();
            <ToastContainer />
        }
    }
    /* Load data using UseEffect */
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    /* Call Cards and Carts */
    return (
        <div className="flex gap-5 flex-col-reverse bg-gray-200 rounded-md md:flex-row max-w-screen-xl mx-auto px-4 md:px-8 pt-5">
            {/* Call Cards Section */}
            <div className="w-full md:w-3/4 bg-white rounded-md">
                <Cards courses={courses} handleAddToCart={handleAddToCart}></Cards>
            </div>
            {/* Call Carts Section */}
            <div className=" w-full md:w-1/4 bg-white h-fit rounded-md">
                <Carts selectedCourse={selectedCourse}></Carts>
            </div>
        </div>
    );
};

export default Main;