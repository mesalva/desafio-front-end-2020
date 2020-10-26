import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Photo from './Photo';
import LoadingSpinner from './LoadingSpinner';

const StyledContainer = styled.div`
  text-align: center;
  p {
    font-size: 1.5rem;
    @media (max-width: 1366px) {
      font-size: 1.3rem;
    }
  }
`;
const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
`;

const Home = () => {
  const [photosList, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  function generateDate(daysBeforeToday) {
    const date = new Date();
    date.setDate(date.getDate() - daysBeforeToday);
    const offset = date.getTimezoneOffset();
    const dateTimezoneCorrected = new Date(date.getTime() - offset * 60 * 1000);
    return dateTimezoneCorrected.toISOString().split('T')[0];
  }
  function getRandomIntBetwen(start, end) {
    const min = Math.ceil(start);
    const max = Math.floor(end);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setLoading(true);
    const promises = [];
    for (
      let daysBeforeToday = 0;
      daysBeforeToday < getRandomIntBetwen(10, 15);
      daysBeforeToday += 1
    ) {
      promises.push(
        axios.get('https://api.nasa.gov/planetary/apod', {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            date: generateDate(daysBeforeToday),
          },
        }),
      );
    }
    Promise.all(promises).then((response) => {
      const photos = response.map((res) => res.data);
      const filteredArray = photos.filter(
        (photo) => photo.media_type === 'image',
      );
      filteredArray.sort(
        (photo1, photo2) => new Date(photo2.date) - new Date(photo1.date),
      );
      setPhotos(filteredArray);
      setLoading(false);
    });
  }, [setPhotos]);
  return (
    <div>
      <StyledContainer>
        <p>
          Todo dia a NASA tira uma foto e fornerce ela através de uma API. Cada
          card é a foto de um determinado dia que você pode clicar nela para ler
          a explicação dela.
        </p>

        <PhotosContainer>
          {loading && <LoadingSpinner />}
          {!loading &&
            photosList.map((photoData) => (
              <Photo
                key={photoData.date}
                date={photoData.date}
                explanation={photoData.explanation}
                title={photoData.title}
                imgUrl={photoData.url}
              />
            ))}
        </PhotosContainer>
      </StyledContainer>
    </div>
  );
};

export default Home;
