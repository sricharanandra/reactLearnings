
function Button() {
    const handleClick = (e) => e.target.textContent = "Clicked"
    const doubleClick  = (e) => e.target.textContent = "Stop Clicking"
    
    return (
                <button onClick={(e) => handleClick(e)} onDoubleClick={(e) => doubleClick(e)}>Click me</button>
            )
}

export default Button;