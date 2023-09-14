

const Card = ({ course }) => {
    let { id, course_name, credit, price, details, img } = course;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="" />
                </figure>
                <h2>{course_name}</h2>
                <p>{details}</p>
                <p>{credit}</p>
                <p>{price}</p>
                <button className="btn btn-primary">Select</button>
            </div>

        </div>
    );
};

export default Card;