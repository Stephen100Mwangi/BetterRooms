/* eslint-disable no-unused-vars */
const BookResults = () => {

    document.addEventListener('DOMContentLoaded', function() {
            const recommendations = JSON.parse(localStorage.getItem('recommendations'));

            if (recommendations && recommendations.length > 0) {
                const recommendationsDiv = document.getElementById('recommendations');

                recommendations.forEach(rec => {
                    const recElement = document.createElement('div');
                    recElement.innerHTML = `
                        <h2>${rec.name}</h2>
                        <p>Neighbourhood: ${rec.neighbourhood_cleansed}, ${rec.neighbourhood_group_cleansed}</p>
                        <p>Price: $${rec.price}</p>
                        <p>Number of Reviews: ${rec.number_of_reviews}</p>
                        <p>Availability: ${rec.availability_365} days</p>
                        <p>Rating: ${rec.review_scores_rating}</p>
                        <p>Reviews per Month: ${rec.reviews_per_month}</p>
                        <p>Host Response Time: ${rec.host_response_time}</p>
                        <p>Host Response Rate: ${rec.host_response_rate}</p>
                        <p>Instant Bookable: ${rec.instant_bookable === 't' ? 'true' : 'false'}</p>
                        <a href="${rec.listing_url}" target="_blank">View Listing</a>
                        <br>
                        <img src="${rec.picture_url}" alt="Listing Image" width="200">
                        <hr>
                    `;
                    recommendationsDiv.appendChild(recElement);
                });
            } else {
                document.getElementById('recommendations').innerHTML = '<p>No recommendations found.</p>';
            }
        });

        function speakRecommendations() {
            const recommendations = JSON.parse(localStorage.getItem('recommendations'));

            if (recommendations && recommendations.length > 0) {
                const synth = window.speechSynthesis;
                let utterances = [];

                utterances.push(new SpeechSynthesisUtterance("Here are your recommendations."));

                recommendations.forEach((rec, index) => {
                    utterances.push(new SpeechSynthesisUtterance(`The ${ordinal_suffix_of(index + 1)} recommendation is ${rec.name}.`));
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

                utterances.forEach(utterance => synth.speak(utterance));
            }
        }

        function ordinal_suffix_of(i) {
            let j = i % 10,
                k = i % 100;
            if (j == 1 && k != 11) {
                return i + "st";
            }
            if (j == 2 && k != 12) {
                return i + "nd";
            }
            if (j == 3 && k != 13) {
                return i + "rd";
            }
            return i + "th";
        }
  return (
    <div>
        <h1>Your Recommendations</h1>
        <button onClick="speakRecommendations()">Listen to Recommendations</button>
        <div id="recommendations"></div>
    </div>
  )
}

export default BookResults
