import axios from 'axios';

const getImageData = async (imageId: string) => {
  if (imageId === undefined || imageId === null || imageId === '') {
    return '';
  }

  const rawData = await axios.get(`https://recipefork-backend.herokuapp.com/api/images/${imageId}`)
  .then(res => res.data.data.base64)
  .catch(err => '');

  return rawData;
}

export default getImageData;