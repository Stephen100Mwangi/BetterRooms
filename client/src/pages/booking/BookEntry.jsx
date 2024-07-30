import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';

const AirbnbRecommender = () => {

  const navigate = useNavigate();
  const [cities, setCities] = useState([]);
  const [neighbourhoods, setNeighbourhoods] = useState([]);
  const [roomTypes, setRoomTypes] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [formData, setFormData] = useState({
    city: '',
    neighbourhood_cleansed: '',
    room_type: '',
    property_type: '',
    min_price: '',
    max_price: '',
    min_reviews: '',
    min_availability: '',
    min_rating: '',
    min_nights: '',
    min_beds: '',
    min_bedrooms: '',
  });
  const [showCBFPrompt, setShowCBFPrompt] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/cities')
      .then(response => response.json())
      .then(data => setCities(data.cities))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleCityChange = event => {
    const city = event.target.value;
    setFormData({ ...formData, city });

    if (city) {
      fetch(`http://127.0.0.1:5000/neighborhoods?city=${city}`)
        .then(response => response.json())
        .then(data => setNeighbourhoods(data.neighborhoods))
        .catch(error => console.error('Error:', error));

      fetch(`http://127.0.0.1:5000/room_types?city=${city}`)
        .then(response => response.json())
        .then(data => setRoomTypes(data.room_types))
        .catch(error => console.error('Error:', error));

      fetch(`http://127.0.0.1:5000/property_types?city=${city}`)
        .then(response => response.json())
        .then(data => setPropertyTypes(data.property_types))
        .catch(error => console.error('Error:', error));
    } else {
      setNeighbourhoods([]);
      setRoomTypes([]);
      setPropertyTypes([]);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const userPreferences = {
      city: formData.city,
      user_preferences: {
        neighbourhood_cleansed: formData.neighbourhood_cleansed,
        room_type: formData.room_type,
        property_type: formData.property_type,
        min_price: parseFloat(formData.min_price),
        max_price: parseFloat(formData.max_price),
        min_reviews: parseInt(formData.min_reviews),
        min_availability: parseInt(formData.min_availability),
        min_rating: parseFloat(formData.min_rating),
        min_nights: parseInt(formData.min_nights),
        min_beds: parseInt(formData.min_beds),
        min_bedrooms: parseInt(formData.min_bedrooms),
      },
    };

    fetch('http://127.0.0.1:5000/recommend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userPreferences),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'no_results_knn') {
          setShowCBFPrompt(true);
          localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
        } else {
          localStorage.setItem('recommendations', JSON.stringify(data.recommendations));
        //   window.location.href = 'results.html';
          navigate('/recommendations')
        }
      })
      .catch(error => console.error('Error:', error));
  };

  const handleCBFYes = () => {
    const userPreferences = JSON.parse(localStorage.getItem('userPreferences'));

    fetch('http://127.0.0.1:5000/recommend_cbf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userPreferences),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('recommendations', JSON.stringify(data.recommendations));
        // window.location.href = 'results.html';
        // navigate("/")
        navigate('/recommendations');
      })
      .catch(error => console.error('Error:', error));
  };

  const handleCBFNo = () => {
    setShowCBFPrompt(false);
  };

  const startDictation = fieldId => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = event => {
      const result = event.results[0][0].transcript;
      setFormData({ ...formData, [fieldId]: result });
    };

    recognition.onerror = event => {
      console.error('Error occurred in recognition: ', event.error);
    };
  };

  return (
    <div className="w-full flex justify-center items-center bg-background flex-col min-h-screen p-20">
      <h1 className="text-3xl font-bold text-hero">Enter Your Preferences</h1>
      <form id="recommendation-form" className="mt-12 flex flex-col space-y-10" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-start items-start space-y-2">
          <label htmlFor="city">City:</label>
          <select id="city" name="city" value={formData.city} onChange={handleCityChange} required className="w-64">
            <option value="">Select a city</option>
            {cities.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-start items-start space-y-2">
          <label htmlFor="neighbourhood_cleansed">Neighbourhood:</label>
          <select
            id="neighbourhood_cleansed"
            name="neighbourhood_cleansed"
            value={formData.neighbourhood_cleansed}
            onChange={handleChange}
            required
            className="w-64"
          >
            <option value="">Select a neighbourhood</option>
            {neighbourhoods.map(neighbourhood => (
              <option key={neighbourhood} value={neighbourhood}>
                {neighbourhood}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-start items-start space-y-2">
          <label htmlFor="room_type">Room Type:</label>
          <select id="room_type" name="room_type" value={formData.room_type} onChange={handleChange} required className="w-64">
            <option value="">Select a room type</option>
            {roomTypes.map(roomType => (
              <option key={roomType} value={roomType}>
                {roomType}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-start items-start space-y-2">
          <label htmlFor="property_type">Property Type:</label>
          <select
            id="property_type"
            name="property_type"
            value={formData.property_type}
            onChange={handleChange}
            required
            className="w-64"
          >
            <option value="">Select a property type</option>
            {propertyTypes.map(propertyType => (
              <option key={propertyType} value={propertyType}>
                {propertyType}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-start items-start space-y-2">
          <label htmlFor="min_price">Min Price:</label>
          <input
            type="number"
            id="min_price"
            name="min_price"
            value={formData.min_price}
            onChange={handleChange}
            required
            className="outline outline-blue-500 outline-none focus:outline outline-[.5px] p-2 px-8"
          />
          <i className="fas fa-microphone" onClick={() => startDictation('min_price')}></i>
        </div>
        <div className="flex flex-col justify-start items-start space-y-2">
          <label htmlFor="max_price">Max Price:</label>
          <input
            type="number"
            id="max_price"
            name="max_price"
            value={formData.max_price}
            onChange={handleChange}
            required
            className="outline outline-blue-500 outline-none focus:outline outline-[.5px] p-3 px-8"
          />
          <i className="fas fa-microphone" onClick={() => startDictation('max_price')}></i>
        </div>
        <div className="flex flex-col justify-start items-start space-y-2">
          <label htmlFor="min_reviews">Min Reviews:</label>
          <input
            type="number"
            id="min_reviews"
            name="min_reviews"
            value={formData.min_reviews}
            onChange={handleChange}
            required
            className="outline outline-blue-500 outline-none focus:outline outline-[.5px] p-3 px-8"
          />
          <i className="fas fa-microphone" onClick={() => startDictation('min_reviews')}></i>
        </div>
        <div className="flex flex-col justify-start items-start space-y-2">
          <label htmlFor="min_availability">Min Availability:</label>
          <input
            type="number"
            id="min_availability"
            name="min_availability"
            value={formData.min_availability}
            onChange={handleChange}
            required
            className="outline outline-blue-500 outline-none focus:outline outline-[.5px] p-3 px-8"
          />
          <i className="fas fa-microphone" onClick={() => startDictation('min_availability')}></i>
        </div>
        <div className="flex flex-col justify-start items-start space-y-2">
          <label htmlFor="min_rating">Min Rating:</label>
          <input
            type="number"
            step="0.1"
            id="min_rating"
            name="min_rating"
            value={formData.min_rating}
            onChange={handleChange}
            required
            className="outline outline-blue-500 outline-none focus:outline outline-[.5px] p-3 px-8"
          />
          <i className="fas fa-microphone" onClick={() => startDictation('min_rating')}></i>
        </div>
        <div className="flex flex-col justify-start items-start space-y-2">
          <label htmlFor="min_nights">Min Nights:</label>
          <input
            type="number"
            id="min_nights"
            name="min_nights"
            value={formData.min_nights}
            onChange={handleChange}
            required
            className="outline outline-blue-500 outline-none focus:outline outline-[.5px] p-3 px-8"
          />
          <i className="fas fa-microphone" onClick={() => startDictation('min_nights')}></i>
        </div>
        <div className="flex flex-col justify-start items-start space-y-2">
          <label htmlFor="min_beds">Min Beds:</label>
          <input
            type="number"
            id="min_beds"
            name="min_beds"
            value={formData.min_beds}
            onChange={handleChange}
            required
            className="outline outline-blue-500 outline-none focus:outline outline-[.5px] p-3 px-8"
          />
          <i className="fas fa-microphone" onClick={() => startDictation('min_beds')}></i>
        </div>
        <div className="flex flex-col justify-start items-start space-y-2">
          <label htmlFor="min_bedrooms">Min Bedrooms:</label>
          <input
            type="number"
            id="min_bedrooms"
            name="min_bedrooms"
            value={formData.min_bedrooms}
            onChange={handleChange}
            required
            className="outline outline-blue-500 outline-none focus:outline outline-[.5px] p-3 px-8"
          />
          <i className="fas fa-microphone" onClick={() => startDictation('min_bedrooms')}></i>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 px-6 rounded-md mt-4">Submit</button>
      </form>
      {showCBFPrompt && (
        <div id="cbf-prompt" className="mt-8">
          <p>Would you like to proceed with Content-Based Filtering?</p>
          <div className="mt-4 flex space-x-4">
            <button onClick={handleCBFYes} className="bg-green-500 text-white p-2 px-6 rounded-md">Yes</button>
            <button onClick={handleCBFNo} className="bg-red text-white p-2 px-6 rounded-md">No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AirbnbRecommender;
