import axios from "axios";

export const fetchImages = async (searchTopic, currentPage = 1) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query: searchTopic,
      page: currentPage,
      per_page: 30,
    },
    headers: {
      Authorization: "Client-ID yp2JPl58ckqyuG5ywZlsD0VxSZuEdIT_Y9AHEKQ8SM4",
    },
  });

  return response.data;
};
