import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import defaultImage from '/BetterRooms/client/public/defaultBNB.jpg'

const Recommendations = () => {
  useEffect(() => {
    const recommendations = JSON.parse(localStorage.getItem('recommendations'));

    if (recommendations && recommendations.length > 0) {
      const recommendationsDiv = document.getElementById('recommendations');

      recommendations.forEach((rec) => {
        const recElement = document.createElement('div');
        recElement.className = 'border-b border-gray-300 p-4 w-[400px] shadow-2xl p-3 rounded-md min-h-80';
        recElement.innerHTML = `
          <h2 class="text-xl font-semibold text-hero text-center">${rec.name}</h2>
          <p class="text-gray-600 roboto">Neighbourhood: ${rec.neighbourhood_cleansed}, ${rec.neighbourhood_group_cleansed}</p>
          <p class="text-gray-600 roboto">Price: ${rec.price}</p>
          <p class="text-gray-600 roboto">Number of Reviews: ${rec.number_of_reviews}</p>
          <p class="text-gray-600 roboto">Availability: ${rec.availability_365} days</p>
          <p class="text-gray-600 roboto">Rating: ${rec.review_scores_rating}</p>
          <p class="text-gray-600 roboto">Reviews per Month: ${rec.reviews_per_month}</p>
          <p class="text-gray-600 roboto">Host Response Time: ${rec.host_response_time}</p>
          <p class="text-gray-600 roboto">Host Response Rate: ${rec.host_response_rate}</p>
          <p class="text-gray-600 roboto">Instant Bookable: ${rec.instant_bookable === 't' ? 'true' : 'false'}</p>
          <a href="${rec.listing_url}" target="_blank" class="text-blue-500 underline">View Listing</a>
          <br><br>
          <div class="w-[90%] h-60 rounded-lg mt-5 flex items-center justify-center overflow-clip">
          <img src="${rec.picture_url}" className="w-[100%] h-[100%] rounded-lg object-cover" alt="Listing Image">
          </div>
          <div class="flex w-full justify-between">

          </div>
        `;
        recommendationsDiv.appendChild(recElement);
      });
    } else {
      document.getElementById('recommendations').innerHTML = '<p class="text-red-500">No recommendations found.</p>';
    }
  }, []);

  const speakRecommendations = () => {
    const recommendations = JSON.parse(localStorage.getItem('recommendations'));

    if (recommendations && recommendations.length > 0) {
      const synth = window.speechSynthesis;
      let utterances = [];

      utterances.push(new SpeechSynthesisUtterance('Here are your recommendations.'));

      recommendations.forEach((rec, index) => {
        utterances.push(new SpeechSynthesisUtterance(`The ${ordinalSuffixOf(index + 1)} recommendation is ${rec.name}.`));
        utterances.push(new SpeechSynthesisUtterance(`This is located in ${rec.neighbourhood_cleansed}, ${rec.neighbourhood_group_cleansed} neighborhood.`));
        if (rec.price) {
          utterances.push(new SpeechSynthesisUtterance(`The price is ${rec.price}.`));
        }
        if (rec.number_of_reviews) {
          utterances.push(new SpeechSynthesisUtterance(`It has ${rec.number_of_reviews} reviews.`));
        }
        if (rec.availability_365) {
          utterances.push(new SpeechSynthesisUtterance(`It is available for ${rec.availability_365} days a year.`));
        }
        if (rec.review_scores_rating) {
          utterances.push(new SpeechSynthesisUtterance(`The rating is ${rec.review_scores_rating}.`));
        }
        if (rec.reviews_per_month) {
          utterances.push(new SpeechSynthesisUtterance(`It has ${rec.reviews_per_month} reviews per month.`));
        }
        if (rec.host_response_time) {
          utterances.push(new SpeechSynthesisUtterance(`The host response time is ${rec.host_response_time}.`));
        }
        if (rec.host_response_rate) {
          utterances.push(new SpeechSynthesisUtterance(`The host response rate is ${rec.host_response_rate}.`));
        }
        utterances.push(new SpeechSynthesisUtterance(`Instant bookable: ${rec.instant_bookable === 't' ? 'true' : 'false'}.`));
      });

      utterances.forEach((utterance) => synth.speak(utterance));
    }
  };

  const ordinalSuffixOf = (i) => {
    let j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + 'st';
    }
    if (j === 2 && k !== 12) {
      return i + 'nd';
    }
    if (j === 3 && k !== 13) {
      return i + 'rd';
    }
    return i + 'th';
  };

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <h1 className="font-bold text-3xl text-blue-500 mb-6">Your Recommendations</h1>
      <button
        onClick={speakRecommendations}
        className="bg-blue-500 text-white p-2 px-6 rounded-md mb-6"
      >
        Listen to Recommendations
      </button>
      <img src={defaultImage} alt="" />
      <div id="recommendations" className="w-full justify-center items-center grid grid-cols-3 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1">
        {/* Recommendations will be appended here */}
      </div>
    </div>
  );
};

export default Recommendations;
