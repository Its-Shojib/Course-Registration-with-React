import Cart from "./Cart";
const Carts = ({ selectedCourse }) => {
    return (
        <div className="text-center">
            <h1 className="text-xl text-blue-500 font-bold pt-3">Credit Hour Remaining:</h1>
            <h2>Course Name</h2>
            {
                selectedCourse.map((course,idx) => <Cart key={idx} course={course}></Cart>)
            }

        </div>
    );
};

export default Carts;
