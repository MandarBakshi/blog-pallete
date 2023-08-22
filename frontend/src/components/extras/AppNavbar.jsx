import { Link } from "react-router-dom"

function AppNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container">
    <Link className="navbar-brand" to="/">Blog Pallete</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#responsiveNav" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="responsiveNav">
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Home</Link>
        {/* <Link className="nav-link" to="#">Features</Link> */}
        <Link className="nav-link" to="/posts">Posts</Link>
        <Link className="nav-link" to="/about">About</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default AppNavbar
