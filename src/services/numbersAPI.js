import axios from "axios";

export const fetchNumberInfo = async (number, type) => {
  try {
    const url = `http://numbersapi.com/${number}/${type}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data. Check the inputs.");
  }
};
