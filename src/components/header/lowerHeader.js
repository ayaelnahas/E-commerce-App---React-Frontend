import React from 'react'
import { Link } from 'react-router-dom';

const LowerHeader = (props) => {
    return (
        <div className="header__lower container">
            {/* <!-- navigation --> */}
            <nav className="nav">
                <ul className="nav__items list list--hr">
                    {/* <!-- items --> */}
                    <li className="nav__item">
                        <Link className="nav__link" to="/home">Home</Link>
                    </li>
                    <li className="nav__item dropdown ">
                        {/* <!-- title --> */}
                        <span className="nav__link dropdown__header" >
                            Products
                    </span>
                        {/* <!-- items --> */}
                        <div className="dropdown__body">
                            <ul className=" list">
                                <li className="list__item">
                                    <Link className="nav__inner-link" to="/home">Product Listing</Link>
                                </li>
                                <li className="list__item">
                                    <Link className="nav__inner-link" to="/addProduct">Add Product</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav__item">
                        <span className="nav__link" >Contact Us</span>
                    </li>
                    <li className="nav__item">
                        <span className="nav__link" >About Us</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default LowerHeader;