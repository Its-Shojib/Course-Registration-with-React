import PropTypes from 'prop-types';
const Cart = ({ course }) => {
    let { course_name } = course;

    return (
        <>
            <li>{course_name}</li>
        </>
    );
};
Cart.propTypes = {
    course: PropTypes.object,
};
export default Cart;