import Card from "./Card";
import PropTypes from 'prop-types';
const Cards = ({ courses, handleAddToCart }) => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-md">
            {
                courses.map(course => <Card key={course.id} course={course}
                    handleAddToCart={handleAddToCart} ></Card>)
            }
        </div>
    );
};
Cards.propTypes = {
    courses: PropTypes.array,
    handleAddToCart: PropTypes.func
};
export default Cards; 