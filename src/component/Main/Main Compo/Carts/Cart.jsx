import PropTypes from 'prop-types';
const Cart = ({ course }) => {
    let { course_name } = course;
    /* Return Course Name Only */
    return (
        <>
            <li>{course_name}</li>
        </>
    );
};
Cart.propTypes = {
    course: PropTypes.object
};
export default Cart;