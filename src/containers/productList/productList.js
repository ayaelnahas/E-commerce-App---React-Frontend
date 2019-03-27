
import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProductCard from '../../components/productCard/productCard'
import ItemListTool from '../../components/item_listing_tool/item_listing_tool'
import Paging from '../../components/paging/paging'
import Header from '../../components/header/header';
import Categories from '../../components/categories/categories';

class ProductList extends Component {

    render() {
        const indexOfLastTodo = this.props.currentPage * this.props.cardsPerPage;
        const indexOfFirstTodo = indexOfLastTodo - this.props.cardsPerPage;
        const currentCardList = this.props.products.slice(indexOfFirstTodo, indexOfLastTodo);
        return (
            <>
                <Header></Header>
                <div className="container">
                    <Categories></Categories>
                    <section className="item-listing">
                        <ItemListTool></ItemListTool>
                        <div className="item-listing__items item-listing--3items" style={{ width: "100%" }}>
                            {
                                currentCardList.map((product, index) => {
                                    return <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        name={product.name}
                                        description={product.description}
                                        priceBefore={product.priceBefore}
                                        status={product.status}
                                        priceAfter={product.priceAfter}
                                        ProductImg={product.ProductImg}
                                        showCardDetails={() => this.props.showCardDetails(product.id)}
                                        deleteCard={() => this.props.deleteCard(product.id)}
                                    ></ProductCard>
                                })
                            }
                        </div>
                        <div className="paging">
                            {/* <!-- left arrow --> */}
                            <div className="paging__arrow">
                                <i onClick={() => { this.props.decreasePage() }} className="fas fa-angle-left"></i>
                            </div>
                            {/* <!-- page number --> */}
                            <Paging clickedPage={(event) => { this.props.change(Number(event.target.textContent)) }}>

                            </Paging>
                            {/* <!-- right arrow --> */}
                            <div className="paging__arrow">
                                <i onClick={() => { this.props.increasePage() }} className="fas fa-angle-right"></i>
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
        products: state.productArray,
        cardsPerPage: state.cardsPerPage,
        currentPage: state.currentPage
    }
};
const mapDispatchToProps = dispatch => {
    return {
        
        deleteCard: (id) => dispatch({ type: "DELETE_PRODUCT", id: id }),
        increasePage: () => dispatch({ type: "INCREASE_PAGE" }),
        decreasePage: () => dispatch({ type: "DECREASE_PAGE" }),
        change: (page) => dispatch({ type: "CHANGE_PAGE", payload: page }),
        // showCardDetails: (id) => dispatch({ type: "VIEW_PRODUCT_DETAILS", id: id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)