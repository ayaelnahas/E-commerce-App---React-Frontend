import React from 'react'
import UpperHeader from './upperHeader';
import MiddleHeader from './middleHeader';
import LowerHeader from './lowerHeader';

const Header = (props) => {
    return (
        <>
            <UpperHeader></UpperHeader>
            <MiddleHeader></MiddleHeader>
            <LowerHeader></LowerHeader>
        </>
    )
}
export default Header;