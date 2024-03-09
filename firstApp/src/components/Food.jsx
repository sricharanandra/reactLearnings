
function Food() {

    const food1 = "Biryani"
    const food2 = "Chicken"
    return(
        <ul>
            <li>Shawarma</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )
}

export default Food