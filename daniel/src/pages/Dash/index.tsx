/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
// import api from '../../services/api';
import api from '../../services/api'
import { Container, Header } from './styles'
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface Ipisctures {
  date: string;
  explanation: string;
  hdurl: string;
  title: string;
}

const Dash: React.FC = () => {
  const [pictures, setpictures] = useState<Ipisctures[]>([]);

  useEffect(() => {
    loadpictures()
  }, [])

  async function loadpictures() {
    const response = await api.get('apod?api_key=erBtFaw0l3DdmATeZtY1FaX5axJ25YcjOVvrGaQt&start_date=2020-10-01')
    setpictures(response.data)
  }

  return (

    <><Header>
      <h2>Teste Api da Nasa<br />
      Clique nas imagens para exibir os detalhes</h2>
    </Header>

      <Container>

        {pictures.map(picture => <div className="item2">
          <div className="cards">
            <Link id="textcard" key={picture.date} to={`/details/${picture.date}`}>
              <h4>{picture.date}</h4>
              <BsIcons.BsPlusCircle id="iconcircle" />
              <img src={picture.hdurl} alt="" />
            </Link>
          </div>
        </div>
        )}
      </Container></>
  )
}
export default Dash;