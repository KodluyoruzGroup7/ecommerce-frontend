import React from 'react';
import { Tabs } from 'antd';
import './ProductDetailTabs.css';
import Reviews from '../../UI/Reviews/Reviews';
import Rating from '../../UI/Rating/Rating';

const { TabPane } = Tabs;

const ProductDetailTabs = ({ reviews, rating }) => {
  return (
    <Tabs type='card' defaultActiveKey='reviews'>
      <TabPane
        tab='Product Details'
        key='detail'
        style={{ padding: '1rem 2rem' }}
      >
        <p>
          A little crisp, a little sunny, warm enough to skip a coat, just cool
          enough to wrap great cashmere around is this asymmetrical jumper. With
          a chic hue, this one makes for a perfect pick this fall. So get your
          basics right and you are good to go.
        </p>
        <ul>
          <li>High-neck style</li>
          <li>Drop Shoulders</li>
          <li>Flared cuffs</li>
          <li>Asymmetrical hem</li>
        </ul>
        <h3>Model Measurements</h3>
        <span style={{ display: 'block' }}>Bust:33"</span>
        <span style={{ display: 'block' }}>Waist:33"</span>
        <span style={{ display: 'block' }}>Hip:33"</span>
        <span style={{ display: 'block' }}>Wearing Size:33"</span>
        <h3>Fabric Composition</h3>
        <p>
          This Cute Tank Tops is Lightweight, Relaxed and Comfortable to Wear.
          Pair it with variety of jeans, skirts, and jeggings for a look that's
          easy to love all season long.
        </p>
        <h3>Wash Care</h3>
        <p>Machine Wash</p>
        <h3>Note</h3>
        <p>
          It's a loose fit blouse. You could choose a size down it you prefer to
          get a more fitness blouse. Please take our customers reviews as
          reference to help you make an informed purchase decision.
        </p>
      </TabPane>
      <TabPane tab='Reviews' key='reviews'>
        <div className='reviewWrapper'>
          <div className='reviewActioner'>
            <Rating value={rating} numberOfReviews={reviews.length} />
            <button>Write a Review</button>
          </div>
          <div>
            {reviews.map((review) => (
              <Reviews key={review.ratingId} review={review} />
            ))}
          </div>
        </div>
      </TabPane>
      <TabPane tab='Shipping &amp; Returns' key='shippingreturns'>
        <h3>Return Policy</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          illo ea nisi labore non facilis pariatur magnam voluptatem excepturi
          ex placeat eum, quo repellat tempora. Eligendi quod minus ullam in?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, sint.
        </p>
        <h3>Shipping</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          illo ea nisi labore non facilis pariatur magnam voluptatem excepturi
          ex placeat eum, quo repellat tempora. Eligendi quod minus ullam in?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, sint.
        </p>
      </TabPane>
    </Tabs>
  );
};

export default ProductDetailTabs;
