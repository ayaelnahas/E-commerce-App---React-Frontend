import React from 'react'
import ProductImg from '../../img/bag.png';
import { Link } from 'react-router-dom';


const ProductCard = (props) => {
    return (
        <>
            {/* medium item  */}
            <div className="item-medium-1">
                {props.status === "On Sale" ? <div className="item-medium-1__alert">sale</div> : null}
                <div className="item-medium-1__image image"
                    style={{ backgroundImage: `url(${props.ProductImg})` }}>
                    <span className="item-medium-1__action">Add to Cart</span>
                </div>
                <span >
                    <h4>{props.name}</h4>
                    <div className="flex-row">
                        <div>

                            {props.status === "On Sale" ? <><del>{props.priceBefore}</del>
                                <span className="lable">{props.priceAfter}</span></> : <span className="lable">{props.priceBefore}</span>}

                        </div>
                    </div>
                </span>
                <div className="crud-actions">
                    <Link to={`/productDetails/${props.id}`}><i className="far fa-eye"></i></Link>
                    {/* <span ><i className="fas fa-edit"></i></span> */}
                    <a onClick={props.deleteCard}><i className="fas fa-trash-alt"></i></a>
                </div>
            </div>
        </>

    )
}

export default ProductCard
