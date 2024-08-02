/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { FaStar, FaHeart, FaThumbsUp } from 'react-icons/fa';
import ListingOutput from '../components/ListingOutput';

const Listings = () => {
  const [topListings, setTopListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/random_listings')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setTopListings(data.listings);
        } else {
          setError('Error fetching listings');
        }
        setIsLoading(false);
      })
      .catch(error => {
        setError('Error: ' + error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className='min-h-[calc(100vh-120px)] bg-background p-[20px] flex items-center justify-center'>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-[calc(100vh-120px)] bg-background p-[20px] flex items-center justify-center'>
        {error}
      </div>
    );
  }

  return (
    <div className='min-h-[calc(100vh-120px)] bg-background p-[20px]'>
      <div className="flex flex-col space-y-3 m-5 mx-auto">
        <div className='w-full items-center justify-center flex'>
          <h1 className='w-[450px] leading-relaxed text-center font-bold text-3xl max-md:text-2xl'>
            Available Homes Awaiting You{' '}
            <span className='decoration-clone text-hero'>Home Away From Home</span>
          </h1>
        </div>
        <div className="flex items-center justify-center gap-20 pb-20 pt-10 flex-wrap">
          {topListings.map((listing, index) => (
            <ListingOutput
              key={listing.id || index} // It's better to use a unique identifier like `listing.id` if available
              name={listing.name}
              location={listing.neighbourhood_cleansed}
              star={<FaStar />}
              stars={<FaStar />}
              price={listing.price}
              image={listing.picture_url || '/assets/default.jpg'}
              rate={listing.review_scores_rating}
              like={<FaThumbsUp />}
              reviews={listing.number_of_reviews}
              favorite={<FaHeart />}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
