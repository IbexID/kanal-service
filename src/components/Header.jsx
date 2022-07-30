import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <img src={require('../images/logo.png')} alt="logo" />
            <button className='header__exit-button'>
                <img src={require('../images/exit-button.svg').default} alt="exit" />
            </button>
        </header>
    );
};

export default Header;