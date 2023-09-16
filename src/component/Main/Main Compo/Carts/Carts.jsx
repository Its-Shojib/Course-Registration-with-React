import Cart from "./Cart";
import PropTypes from 'prop-types';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Carts = ({ selectedCourse }) => {
    /* Calculate the credit and total price */
    let totalCredit = 0;
    let totalPrice = 0;
    selectedCourse.forEach(element => {
        totalCredit += element.credit;
        totalPrice += element.price;
    });
    let creditRemaining = 20;

    return (
        <div className="px-2 space-y-3">
            <h1 className="text-lg text-blue-500 font-semibold pt-3">Credit Hour Remaining: {creditRemaining - totalCredit} hr</h1>
            <hr />
            <h2 className="text-2xl font-bold ">Course Name</h2>
            <div className="p-5 h-48 overflow-y-scroll bg-gray-200 rounded-xl">
                {/* Cart Section */}
                <ol className='list-decimal'>
                    {
                        selectedCourse.map((course, idx) => <Cart key={idx} course={course}></Cart>)
                    }
                </ol>
            </div>
            <hr />
            <ToastContainer />
            <h2 className="text-xl font-semibold ">Total Credit Hour : {totalCredit}</h2>
            <hr />
            <h2 className="text-xl font-semibold ">Total Price: {totalPrice} USD</h2>
        </div>             
    );
};
Carts.propTypes = {
    selectedCourse: PropTypes.array,
};
export default Carts;
