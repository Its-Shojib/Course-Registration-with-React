import { useState } from "react";
import Cards from "./Main Compo/Cards";
import Cart from "./Main Compo/Cart";
import { useEffect } from "react";


const Main = () => {
    let [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="flex gap-5 max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 pt-5">
            <div className="w-3/4">
                <Cards courses={courses}></Cards>
            </div>
            <div className="w-1/4">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Main;