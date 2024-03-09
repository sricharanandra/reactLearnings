import PropTypes from "prop-types"
function Student(props) {
    return(
        <div className="student">
            
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Status: {props.isStudent ? "Yes" : "Graduated"}</p>
        </div>
    )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}   
export default Student