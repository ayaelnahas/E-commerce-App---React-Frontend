
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '../../components/header/header'
import image2 from '../../img/pic2.jpg';
import image3 from '../../img/pic3.jpg';

class ProductDetails extends Component {

    componentDidMount() {
        this.props.showCardDetails(this.props.match.params.id);
        //console.log(this.props.product);
    }
    render() {

        return (
            <>
                <Header></Header>
                <div className="product-details container">
                    <section className="product-details__main">
                        {/* <!-- images slider --> */}
                        <div className="slider">
                            <div className="slider__items">
                                <div className="slider__item active" style={{ backgroundImage: `url(${image3})` }}></div>
                                <div className="slider__item" style={{ backgroundImage: `url(${image2})` }}></div>
                                <div className="slider__item" style={{ backgroundImage: `url(${image3})` }}></div>
                            </div>
                            <div className="slider__indicators">
                                <span className="slider__indicator active"></span>
                                <span className="slider__indicator"></span>
                                <span className="slider__indicator"></span>
                            </div>
                        </div>
                        {/* <!-- product info --> */}
                        <div className="product-details__info">
                            <h1>{this.props.product.name}</h1>
                            <div className="rating">
                                <div className="rating__stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                <div className="rating__data">
                                    2 reviews
                    </div>
                            </div>
                            <div className="product-details__amount">
                                ${this.props.product.priceBefore}
                            </div>
                            <p className="product-details__desc">
                                {this.props.product.description}.
                         </p>
                            <div className="product-details__add">
                                <div className="increment-control">
                                    <span href="#" className="increment-control__action">-</span>
                                    <input type="text" className="form-control" title="Qty" value="1" onChange={()=>{}}/>
                                    <span href="#" className="increment-control__action">+</span>
                                </div>
                                <button href="#" className="btn btn--primary">Add to cart</button>
                            </div>
                            <div className="product-details__meta">
                                Categories: <span rel="tag" href="#">Accessories</span>, <span rel="tag" href="#">Bags</span>.
                </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        product: state.product
    }
}
const mapDispatchToProps = dispatch => {
    return {
        showCardDetails: (id) => dispatch({ type: "VIEW_PRODUCT_DETAILS", id: id }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)