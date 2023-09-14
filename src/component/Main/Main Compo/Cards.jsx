import Card from "./Card";

const Cards = ({ courses }) => {
    return (
        <div className=" grid grid-cols-3 gap-5">
            {
                courses.map(course => <Card key={course.id} course={course}></Card>)
            }
        </div>
    );
};

export default Cards;