import React from 'react'

const ItemListTool = (props) => {
    return (
        <div>
            <div className="item-listing__tools">
                <select className="form-control" name="" id="">
                    <option value="1">Featured</option>
                    <option value="2">Price low to high</option>
                    <option value="3">Price high to low</option>
                    <option value="4">Name</option>
                </select>
                <span className="action-btn" >
                    <i className="fas fa-plus"></i>
                </span>
            </div>
        </div>

    )
}
export default ItemListTool;