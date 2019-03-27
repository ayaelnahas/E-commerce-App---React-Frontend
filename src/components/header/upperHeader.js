import React from 'react'

const UpperHeader = (props) => {
    return (
        <div className="header__upper">
            {/* <!-- container --> */}
            <div className="container">
                {/* <!-- contact info --> */}
                <ul className="list list--hr list--hr-separator">
                    <li className="list__item">
                        <span className="info">
                            {/* <!-- icon --> */}
                            <i className="info__icon far fa-dot-circle"></i>
                            {/* <!-- info --> */}
                            <span className="info__data">1234 Street Name, City Name</span>
                        </span>
                    </li>
                    <li className="list__item">
                        <span   className="info">
                            {/* <!-- icon --> */}
                            <i className="info__icon fab fa-whatsapp"></i>
                            {/* <!-- info --> */}
                            <span className="info__data">123-456-7890</span>
                        </span>
                    </li>
                    <li className="list__item">
                        <span   className="info">
                            {/* <!-- icon --> */}
                            <i className="info__icon far fa-envelope"></i>
                            {/* <!-- info --> */}
                            <span className="info__data">mail@domain.com</span>
                        </span>
                    </li>
                </ul>
                {/* <!-- side menu --> */}
                <ul className="list list--hr">
                    <li className="list__item">
                        <span   className="link">
                            {/* <!-- icon --> */}
                            <i className="link__icon fas fa-angle-right"></i>
                            {/* <!-- info --> */}
                            About Us
                        </span>
                    </li>
                    <li className="list__item">
                        <span   className="link">
                            {/* <!-- icon --> */}
                            <i className="link__icon fas fa-angle-right"></i>
                            {/* <!-- info --> */}
                            Contact Us
                        </span>
                    </li>
                    {/* <!-- languges --> */}
                    <li className="list__item">
                        {/* <!-- drop down --> */}
                        {/* <!-- to oppen dropdown dropdown--opened --> */}
                        <div className="dropdown ">
                            {/* <!-- header --> */}
                            <div className="dropdown__header">
                                <span   className="link">
                                    <img className="flag flag-us" src="" alt="" />
                                    English
                                </span>
                                <i className="fas fa-angle-down"></i>
                            </div>

                            {/* <!-- items --> */}
                            <div className="dropdown__body">
                                <ul className="dropdown__items list">
                                    <li className="dropdown__item list__item">
                                        <span   className="link">
                                            <img className="flag flag-us" src="" alt="" />
                                            English
                                        </span>
                                    </li>
                                    <li className="dropdown__item list__item">
                                        <span   className="link">
                                            <img className="flag flag-es" src="" alt="" />
                                            Español
                                        </span>
                                    </li>
                                    <li className="dropdown__item list__item">
                                        <span   className="link">
                                            <img className="flag flag-fr" src="" alt="" />
                                            Française
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default UpperHeader;