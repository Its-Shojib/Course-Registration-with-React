import Card from "./Card";

const Cards = ({ courses, handleAddToCart}) => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-md">
            {
                courses.map(course => <Card key={course.id} course={course} handleAddToCart={handleAddToCart}></Card>)
            }
        </div>
    );
};

export default Cards; 