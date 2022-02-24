import React from 'react';
import reviewImg from '../../../assets/images/sammy-williams-38Un6Oi5beE-unsplash.jpg';
import './Reviews.scss';

const Reviews = () => {

    const reviews = [
        {
            name: 'Aniket Khan',
            comment: 'Lorem, ipsum Inventore quod laboriosam, consectetur alias reprehenderit necessitatibus.'
        },
        {
            name: 'Aniket Khan',
            comment: 'Lorem, ipsum Inventore quod laboriosam, consectetur alias reprehenderit necessitatibus.'
        },
        {
            name: 'Aniket Khan',
            comment: 'Lorem, ipsum Inventore quod laboriosam, consectetur alias reprehenderit necessitatibus.'
        },
        {
            name: 'Aniket Khan',
            comment: 'Lorem, ipsum Inventore quod laboriosam, consectetur alias reprehenderit necessitatibus.'
        }
    ]

    return (
        <div className='review-section'>
            <p className='review-text'>Reviews</p>
            <div className='review-cart-wrapper'>
                {
                    reviews.map(review => (
                        <div className='review-cart'>
                            <div className='review-cart-img'>
                                <img src={reviewImg} alt="" />
                            </div>
                            <div className='review-cart-details'>
                                <div className='review-cart-details-name'>
                                    <p>{review.name}</p>
                                    <div>Star</div>
                                </div>
                                <p>{review.comment}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Reviews;