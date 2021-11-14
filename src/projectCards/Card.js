import React from 'react';
import PropTypes from 'prop-types';

import '../style/styles.css';

export const Card =(props) => {

    const { title, img, url,text } = props;

    return (
        <div className="card text-center bg-dark">
            <div className="overflow">
                <img src={ img } alt="img" className="card-img-top"/>
            </div>
            <div className="card-body text-light">
                <h4 className="card-title" >{ title }</h4>
                <p className="card-text text-secondary">{
                    text ? text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem repudiandae vitae saepe rem. Explicabo, alias hic doloremque dolore eligendi, unde architecto commodi dolorem fuga magni provident quidem voluptatibus excepturi officia!'
                }</p>
                <a href={ url } className="btn btn-outline-secondary border-0">
                    Go to this website
                </a>
            </div>
        </div>
    )
}

Card.propTypes ={
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    img: PropTypes.string
}
