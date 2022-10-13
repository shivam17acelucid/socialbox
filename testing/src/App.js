import { React, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const URLENCODED_HEADER = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla / 5.0(iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/ 605.1.15(KHTML, like Gecko) Mobile / 15E148 Instagram 105.0.0.11.118(iPhone11, 8; iOS 12_3_1; en_US; en - US; scale = 2.00; 828x1792; 165586599)',
}
const fetchURL = () => {
  const url = "https://i.instagram.com/api/v1/users/web_profile_info/?username=thesocialbox.in";
  fetch((url), {
    method: 'GET',
    headers: URLENCODED_HEADER,
    mode: 'cors'
  })
    .then((res) => {
      console.log(res)
      setData(res)
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}
return (
  <div className="App">
    <h5>API Testing</h5>
    <button onClick={fetchURL} style={{ height: '50px', width: '50px' }}>Click me</button>
  </div>
);
}

export default App;
