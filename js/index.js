// import imgUrl from '../img/sherlock.png';  och sedan skriva i din HTML <img src={imgUrl} />''

import React from 'react';
import ReactDOM from 'react-dom';

import Product from './product.js';
import imgUrl from '../img/sherlock-holmes-147255_640.png';

function App(){
    return(
        <div className="container">
            <div className="wrapper">
                <div className="header">
                        <img src={imgUrl} />
                        <div className="right">
                            <p className="p-header">Cart  </p>
                            <span>0</span>
                        </div>
                </div>
                <div className="book">
                        <Product title="A Sign of Four" />
                        <Product title="A Study in Scarlet" />
                        <Product title="Baskervilles Hound" />
                        <Product title="The Adventure of Sherlock Holmes" />
                </div>
            </div>
            
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));