import dotenv from "dotenv";
import Axios from "axios";
const API_KEY = process.env.EOAPIFY_API_KEY;
export const getLocation = async (country, state, district) => {
  try {
    const address = `${district}, ${state}, ${country}`;
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
      address
    )}&apiKey=${API_KEY}`;
    const response = await Axios.get(url);
    if (response.data.features.length > 0) {
      const place = response.data.features[0];
      console.log(place);
    }
  } catch (error) {
    console.log("error in fetching locations:", error.message);
  }
};
