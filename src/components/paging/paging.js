import React from 'react';
import { connect } from 'react-redux'


const Paging = (props) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.products.length / props.cardsPerPage); i++) {
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
        let pagingStyle = ['paging__number'];
        if (props.currentPage === number) {
            pagingStyle.push('active');
        }
        return (
            <React.Fragment key={number}>
                <li onClick={props.clickedPage} className={pagingStyle.join(' ')}>{number}</li>
            </React.Fragment>
        );
    })
    return (
        <>
            {renderPageNumbers}
        </>
    )
}

const mapStateToProps = state => {
    return {
        products: state.productArray,
        cardsPerPage: state.cardsPerPage,
        currentPage: state.currentPage
    }
};
export default connect(mapStateToProps, null)(Paging)