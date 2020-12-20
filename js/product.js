import React from 'react';
//import Lorem from 'react-lorem/Lorem.jsx';
import { LoremIpsum } from 'react-lorem-ipsum';

function Product(props){
    return(
        <div className="some-products">
            <h3>{props.title}</h3>
            <h5>Av Sir Arthur Conan Doyle</h5>
            <p className="text"><LoremIpsum p={1}  /></p>
           <div className="btn">
                <button>Add to cart</button>
                </div>
        </div>
    )
}


export default Product; 