import '../../css/style.css'
import React, { Component } from 'react';
import Header from '../../components/header/header'
import ProductImg from '../../img/products/product-grey-1.jpg';
import { connect } from 'react-redux';



class AddProduct extends Component {
    state = {
        checks: []
    }
    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }
    handleChange(e) {
        this.setState({ checked: e.target.value });
    }

    checkedHandler = (event) => {
        this.state.checks.push(event.target.name);
    }
    render() {
        return (
            <>
                <Header></Header>
                <div className="add-product container">
                    <form action="">
                        <div className="add-product__images slider">
                            <div className="add-product__image-actions">
                                <div className="add-product__image-action">
                                    <span><i className="fas fa-plus-square"></i></span>
                                    <span><i className="fas fa-edit"></i></span>
                                    <span><i className="fas fa-trash-alt"></i></span>
                                </div>
                            </div>
                            <div className="slider__items">
                                <div className="slider__item active" style={{ backgroundImage: `url(${ProductImg})` }}></div>
                                <div className="slider__item" style={{ backgroundImage: `url(${ProductImg})` }}></div>
                                <div className="slider__item" style={{ backgroundImage: `url(${ProductImg})` }}></div>
                            </div>
                            <div className="slider__indicators">
                                <span className="slider__indicator active"></span>
                                <span className="slider__indicator"></span>
                                <span className="slider__indicator"></span>
                            </div>
                        </div>
                        <div className="add-product__data">
                            <div className="form-controls">
                                <section className="tabs">
                                    <div className="tabs__headers">
                                        <div className="tabs__header active">
                                            English
                                </div>
                                        <div className="tabs__header">
                                            Arabic
                                </div>
                                    </div>
                                    <div className="tabs__bodies">
                                        <div className="tabs__body active">
                                            <div className="form-group">
                                                <label >Name</label>
                                                <input className="form-control" type="text" name="" id="" onChange={(event) => this.setState({ name: event.target.value })} />
                                            </div>
                                            <div className="form-group">
                                                <label >Description</label>
                                                <textarea className="form-control" name="" id="" cols="30" rows="4" onChange={(event) => this.setState({ description: event.target.value })}></textarea>
                                            </div>
                                        </div>
                                        <div className="tabs__body ">
                                            <div className="form-group">
                                                <label >Name</label>
                                                <input className="form-control" type="text" name="" id="" onChange={(event) => this.setState({ name: event.target.value })} />
                                            </div>
                                            <div className="form-group">
                                                <label >Description</label>
                                                <textarea className="form-control" name="" id="" cols="30" rows="4" onChange={(event) => this.setState({ description: event.target.value })}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div className="form-group">
                                    <label >Price</label>
                                    <input className="form-control" type="text" name="" id="" onChange={(event) => this.setState({ priceBefore: event.target.value })} />
                                </div>

                                <div className="add-product__discount">
                                    <div className="form-group">
                                        <label >Satus</label>
                                        <div className="form-group__radios">
                                            <div className="form-group__radio"><input type="radio" name="" id="" value="On Sale" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'On Sale'} /><span>On Sale</span></div>
                                            <div className="form-group__radio"><input type="radio" name="" id="" value="Not On Sale" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'Not On Sale'} /><span>Not On Sale</span></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Discount</label>
                                        <input className="form-control" type="text" name="" id="" onChange={(event) => this.setState({ Discount: event.target.value })} disabled={this.state.selectedOption === 'Not On Sale' ? true : false} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label >Payment Types</label>
                                    <div className="form-group__checkboxs">
                                        <div className="form-group__checkbox"><input type="checkbox" name="Direct Bank" id="" onChange={(event) => this.checkedHandler(event)} /><span>Direct Bank
                                        Transfare</span></div>
                                        <div className="form-group__checkbox"><input type="checkbox" name="Cheque Payment" id="" onChange={(event) => this.checkedHandler(event)} /><span>Cheque Payment</span></div>
                                        <div className="form-group__checkbox"><input type="checkbox" name="Paypal" id="" onChange={(event) => this.checkedHandler(event)} /><span>Paypal</span></div>
                                        <div className="form-group__checkbox"><input type="checkbox" name="Visa" id="" onChange={(event) => this.checkedHandler(event)} /><span>Visa</span></div>
                                        <div className="form-group__checkbox"><input type="checkbox" name="Mastercard" id="" onChange={(event) => this.checkedHandler(event)} /><span>Mastercard</span></div>
                                        <div className="form-group__checkbox"><input type="checkbox" name="On Dilivery" id="" onChange={(event) => this.checkedHandler(event)} /><span>On Dilivery</span></div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label >Category</label>
                                    <select className="form-control" name="" id="" onChange={(event) => this.handleChange(event)}>
                                        <option value="Arts & Crafts">Arts & Crafts</option>
                                        <option value="Automotive" >Automotive</option>
                                        <option value="Baby" >Baby</option>
                                        <option value="Books" >Books</option>
                                        <option value="Eletronics" >Eletronics</option>
                                        <option value="Women's Fashion" >Women's Fashion</option>
                                        <option value="Men's Fashion" >Men's Fashion</option>
                                        <option value="Health & Household">Health & Household</option>
                                        <option value="Home & Kitchen">Home & Kitchen</option>
                                        <option value="Military Accessories">Military Accessories</option>
                                        <option value="Movies & Television">Movies & Television</option>
                                        <option value="Sports & Outdoors">Sports & Outdoors</option>
                                        <option value="Tools & Home Improvement">Tools & Home Improvement</option>
                                        <option value="Toys & Games">Toys & Games</option>
                                    </select>
                                </div>

                                <div className="taged-textbox form-group">
                                    <label className="taged-textbox__lable" >Tags</label>
                                    <div className="taged-textbox__data">
                                        <div className="taged-textbox__tags">
                                            <div className="taged-textbox__tag"><span>tag1</span><span className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></span></div>
                                            <div className="taged-textbox__tag"><span>tag2</span><span className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></span></div>
                                            <div className="taged-textbox__tag"><span>tag3</span><span className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></span></div>
                                            <div className="taged-textbox__tag"><span>tag4</span><span className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></span></div>
                                            <div className="taged-textbox__tag"><span>tag5</span><span className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></span></div>
                                            <div className="taged-textbox__tag"><span>tag6</span><span className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></span></div>
                                            <div className="taged-textbox__tag"><span>tag7</span><span className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></span></div>
                                            <div className="taged-textbox__tag"><span>tag8</span><span className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></span></div>
                                            <div className="taged-textbox__tag"><span>tag9</span><span className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></span></div>
                                            <div className="taged-textbox__tag"><span>tag10</span><span className="taged-textbox__remove"><i
                                                className="fas fa-times"></i></span></div>
                                        </div>
                                        <div className="taged-textbox__clear">
                                            <span><i className="fas fa-times"></i></span>
                                        </div>
                                    </div>
                                    <input className="taged-textbox__textbox form-control" type="text" name="" id="" onChange={(event) => this.setState({ LastInput: event.target.value })} />
                                </div>
                                <div className="add-product__actions">
                                    <button className="btn btn--gray">Cancel</button>
                                    <button className="btn btn--primary" onClick={(e) => { e.preventDefault(); this.props.add(this.state) }}>Add</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (product) => dispatch({ type: "ADD_PRODUCT", product: product })
    }
}

export default connect(null, mapDispatchToProps)(AddProduct)