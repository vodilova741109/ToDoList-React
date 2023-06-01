import { Link } from "react-router-dom"

export const NotFound = ()=>{
    return (
        <div className="container">
              <h1>Not Faund</h1>
              <Link to="/">To Home</Link>
        </div>
      
    )
}