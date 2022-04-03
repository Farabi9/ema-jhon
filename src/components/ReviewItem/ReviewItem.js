import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Review.css'

const ReviewItem = (props) => {
    const {name, img, price, shipping, quantity} = props.product;
    return (
        <div className='review-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
                <div className="review-items-details" title={name}>
                     <p className="product-name">{name.length > 20 ? name.slice(0, 20) +'.....' : name}</p>
                     <p>
                         Price: <span className='orange-color'>
                             ${price}
                         </span>
                     </p>
                     <p><small>Shipping: {shipping}</small></p>
                     <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} ></FontAwesomeIcon>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;