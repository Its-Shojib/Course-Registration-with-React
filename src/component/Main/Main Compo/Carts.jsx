import Cart from "./Cart";
import PropTypes from 'prop-types';
const Carts = ({ selectedCourse }) => {
    let totalCredit = 0;
    let totalPrice = 0;
    selectedCourse.forEach(element => {
        totalCredit += element.credit;
        totalPrice += element.price;
    });
    let creditRemaining = 20;
    return (
        <div className="px-2 space-y-3">
            <h1 className="text-xl text-blue-500 font-bold pt-3">Credit Hour Remaining: {creditRemaining - totalCredit}</h1>
            <hr />
            <h2 className="text-2xl font-bold ">Course Name</h2>
            <div className=" h-40 overflow-y-auto bg-gray-200 rounded-xl">
                {
                    selectedCourse.map((course, idx) => <Cart key={idx} course={course}></Cart>)
                }
            </div>
            <hr />
            <h2 className="text-xl font-bold ">Total Credit Hour : {totalCredit}</h2>
            <hr />
            <h2 className="text-xl font-bold ">Total Price: {totalPrice} USD</h2>

        </div>
    );
};
Carts.propTypes = {
    selectedCourse: PropTypes.array,
};
export default Carts;
