
import './App.css';
import { MDBBtn, MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
function App() {
  const [cityName, setCity] = useState('');
  const [data, setData] = useState('');
  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');
  const [name, setName] = useState('');


  const handleSearch = async (city) => {
    if (!city) return;
    const appId = '7b0415fdfbb386d98bbcc2836ecae773';
    const address = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`;

    await axios({
      method: 'get',
      url: address
    })
      .then(function (response) {
        const weatherData = response.data;
        const temp = weatherData.main.temp;
        const name = weatherData.name;
        const description = weatherData.weather[0].description;
        const icon= weatherData.weather[0].icon
        const imageURL = 'https://openweathermap.org/img/wn/'+icon+'@4x.png';
        setImage(imageURL);
        setDesc(description);
        setData(temp);
        setName(name);
      });

  }
  useEffect(() => {
    handleSearch('Jabalpur');
  }, [])
  

  const container = {
    width: '25vw',
    marginTop: '2%'
  }
  const btn = {
    width: '23.5vw',
    marginTop: '10px'
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <MDBContainer style={container}>
        <MDBInput label='Enter city name' id='form1' onChange={(e) => setCity(e.target.value)} type='text' />
        <MDBBtn style={btn} color='success' onClick={() => handleSearch(cityName)}>Search</MDBBtn>
        <Card icon={image} name={name} desc={desc} temp={data} />
      </MDBContainer>


    </div>
  );
}

export default App;
