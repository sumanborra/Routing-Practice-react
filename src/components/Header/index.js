// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <div className="container-header">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="image-logo-nav-bar"
        />
        <p className="wave-text">Wave</p>
      </div>
      <ul className="list-container">
        <li>
          <Link to="/" className="link-style">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link-style">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link-style">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Header
