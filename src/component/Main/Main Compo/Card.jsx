import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';
const Card = ({ course,handleAddToCart}) => {
    let {  course_name, credit, price, details, img } = course;

    return (
        <div>
            <div className="card card-compact space-y-3 my-5">
                <figure>
                    <img className="w-full" src={img} alt={course_name} />
                </figure>
                <h2 className="text-lg font-semibold">{course_name}</h2>
                <p>{details}</p>
                <div className="flex justify-between">
                    <div className="flex justify-start">
                        <img src="/dollar-sign 1.jpg" alt="" />
                        <p>Price: {price}</p>
                    </div>
                    <div className="flex justify-start">
                        <img src="Frame.jpg" alt="" />
                        <p>Credit: {credit}hr</p>
                    </div>

                </div>
                <button onClick={()=>handleAddToCart(course)} className=" bg-blue-500 text-white py-2 rounded-md">Select</button>
                <ToastContainer />
            </div>

        </div>
    );
};
Card.propTypes = {
    course:PropTypes.object,
    handleAddToCart:PropTypes.func
};
export default Card;