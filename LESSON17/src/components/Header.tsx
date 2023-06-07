import React from 'react';
import Nav from './Nav';

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
    const  content = (
        <header className='header'>
            <div className="headder_title-bar">
                <h1>Acme CO.</h1>
                <div className="header_price-box">
                    <p>Total Items:</p>
                    <p>Total Price:</p>
                </div>
            </div>
            <Nav viewCart={viewCart} setViewCart={setViewCart}></Nav>
        </header>
    )
    return content;
}

export default Header