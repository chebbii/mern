import PropTypes from 'prop-types';
import React from 'react';

const Fish = props => {
  const { image, name, price, desc, status } = props.details;
  const isAvailable = status === 'available';

  const formatPrice = cents => {
    return (cents / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
  };

  return (
    <li className='menu-fish'>
      <img src={image} alt={image} />
      <h3 className='fish-name'>
        {name}
        <span className='price'>{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button disabled={!isAvailable}>{isAvailable ? 'Add To Order' : 'Sold Out'}</button>
    </li>
  );
};

Fish.propTypes = {
  details: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    status: PropTypes.string,
    price: PropTypes.number
  })
};

export default Fish;