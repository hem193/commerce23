import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <ul className="nav d-flex justify-content-between shadow-lg mb-2">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            LOGIN
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">
            REGISTER
          </NavLink>
        </li>
      </ul>
    </>
  );
}
