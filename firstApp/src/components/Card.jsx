import profilePicture from "./assets/icon_viewers.png"

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePicture} alt="pfp"></img>
            <h2 className="card-title">SREUS</h2>
            <p className="card-text">I play games.</p>
        </div>
    ) 
}

export default Card