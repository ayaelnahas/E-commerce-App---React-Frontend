import React from 'react'
import  imageIcon from '../../img/PersonalImage.png'
import  cartIcon from '../../img/icons/icon-cart-big.svg'
import  PersonalImage from '../../img/PersonalImage.png'


const MiddleHeader = (props) => {
    return (
        <div className="header__middle container">
            {/* <!-- logo --> */}
            <span  className="header__logo-box">
                <img className="header__logo" src="img/logo.png" alt="" />
            </span>
            {/* <!-- user options --> */}
            <div className="header__user-options">
                {/* <!-- login control --> */}
                <div className="dropdown">
                    <div className="dropdown__header">
                        <div className="image image--small image--circle"
                            style={{backgroundImage: `url(${imageIcon})`}}>
                        </div>
                    </div>
                    <div className="dropdown__body">

                    </div>
                </div>
                {/* <!-- shopping card dropdown --> */}
                {/* <!-- dropdown--opened to open --> */}
                <div className="dropdown dropdown--left  ">
                    {/* <!-- header --> */}
                    <div className="dropdown__header">
                        <div className="image image--small" style={{backgroundImage: `url(${cartIcon})`}}>
                            <div className="notification notification--danger">
                                1
                        </div>
                        </div>
                    </div>
                    {/* <!-- body --> */}
                    <div className="dropdown__body">
                        {/* <!-- items --> */}
                        <ul className="dropdown__items list list--vr-separator">
                            <li className="dropdown__item list__item">
                                {/* <!-- item small 2 --> */}
                                <div className="item-small-1">
                                    {/* <!-- item data --> */}
                                    <div className="item-small-1__data">
                                        {/* <!-- title --> */}
                                        <span href="" className="item-small-1__title">Camera X1000</span>
                                        {/* <!-- price --> */}
                                        <span className="item-small-1__description">
                                            1 X $890
                                    </span>
                                    </div>
                                    {/* <!-- item image --> */}
                                    <div className="item-small-1__image-box">
                                        <span  className="item-small-1__image image"
                                            style={{backgroundImage: `url(${PersonalImage})`}}>
                                        </span>
                                        <span  className="item-small-1__action">
                                            <i className="fas fa-times"></i>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown__item list__item">
                                <div className="item-small-1">
                                    {/* <!-- item data --> */}
                                    <div className="item-small-1__data">
                                        {/* <!-- title --> */}
                                        <span href="" className="item-small-1__title">Camera X2000</span>
                                        {/* <!-- price --> */}
                                        <span className="item-small-1__description">
                                            2 X $990
                                    </span>
                                    </div>
                                    {/* <!-- item image --> */}
                                    <div className="item-small-1__image-box">
                                        <span  className="item-small-1__image image"
                                            style={{backgroundImage: "url('img/PersonalImage.png')"}}>
                                        </span>
                                        <span href="" className="item-small-1__action">
                                            <i className="fas fa-times"></i>
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {/* <!-- totals --> */}
                        <div className="separator"></div>
                        <div className="block">
                            <span className="lable">Total:</span>
                            <span className="lable">$2870</span>
                        </div>
                        {/* <!-- actions --> */}
                        <div className="block list list--hr">
                            <span className="list-item btn btn--gray" href="">View Cart</span>
                            <span className="list-item btn btn--primary" href="">Checkout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MiddleHeader;