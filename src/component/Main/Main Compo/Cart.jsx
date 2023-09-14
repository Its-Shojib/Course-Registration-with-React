import PropTypes from 'prop-types';
const Cart = ({course}) => {
    let {course_name} = course;

    return (
        <div className='p-2'>
            <h3>{ course_name}</h3>
        </div>
    );
};
Cart.propTypes = {
    course: PropTypes.object,
     
  };
export default Cart;