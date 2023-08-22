import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>404 PAGE NOT FOUND</h1>
      <Link className="btn btn-lg btn-primary" to="/">Return to Home</Link>
    </div>
  )
}

export default PageNotFound
