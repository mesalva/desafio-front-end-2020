import styled from 'styled-components';

export const Header = styled.div`
display: flex;
flex-direction: column;
margin-top: -13px;
margin-bottom: 15px;
height: 100px;
width: 880px;
background: url('https://i.pinimg.com/originals/a1/c6/1f/a1c61f4d8f0b19c57da16a158a804939.jpg') no-repeat;
opacity: 1.6;
text-align: center;


h2 {
margin: 30px;
color: #fff;
font-family: sans-serif;
font-size: 15px;
}


`;

export const Container = styled.div`
* {
    padding: 0;
    margin: 0;
  }

display: flex;
flex-direction: row-reverse;
background-color: #fff;
flex-wrap: wrap-reverse;
object-fit: cover;
justify-content: center;


.item2 {
  .cards {
    img {
      height: 150px;
      width: 200px;
      margin-top: -6px;
    }
    #iconcircle {
      font-size: 15px;
      margin-left: 90px;
      margin-top: 80px;
      position: absolute;
      height: 30px;
    }
    h4 {
      font-size: 15px;
      margin-left: 64px;
      margin-top: 60px;
      position: absolute;
    }
    #textcard {
       color: transparent;
    }
    img:hover {
      opacity: 0.5;
      transition: 850ms;
     }
   } 
    #textcard:hover {
      font-family: sans-serif;
      color: green;
      font-size: 30px;
    }
}
`;
export const button = styled.div`
  color: #f7f7f7;
`;

