/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import api from '../../services/api'
import * as BsIcons from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { Container } from './styles'

interface Ipisctures {
  date: string;
  explanation: string;
  hdurl: string;
  title: string;
}

const Details: React.FC = () => {
  const { date } = useParams<{ date: string }>()

  const [detail, setdetail] = useState<Ipisctures>({
    date: '',
    explanation: '',
    hdurl: '',
    title: '',
  })

  useEffect(() => {
    findPicture(date)
  }, [date])


  async function findPicture(date: string) {
    const response = await api.get(`/apod?api_key=erBtFaw0l3DdmATeZtY1FaX5axJ25YcjOVvrGaQt&date=${date}`)
    setdetail({
      date: response.data.date,
      explanation: response.data.explanation,
      hdurl: response.data.hdurl,
      title: response.data.title,
    })
  }
  return (
    <Container>
      <div className="item2">
        <img src={detail.hdurl} alt="API_NSA" />
        <div className="card">
          <h3>{detail.title}</h3>
          <h4>{detail.date}</h4>
          <p>{detail.explanation}</p>
          <a href="/">
            <BsIcons.BsBoxArrowInLeft />Voltar
        </a>
        </div>

      </div>
    </Container >
  )

}
export default Details;
