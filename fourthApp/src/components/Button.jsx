
function Button() {
    const handleClick = (e) => e.target.textContent = "Clicked"
    const doubleClick  = (e) => e.target.style.display = "none"
    
    return (   <>
                <button onClick={(e) => handleClick(e)} onDoubleClick={(e) => doubleClick(e)}>Click me</button>
                </>            
            )

}

export default Button;