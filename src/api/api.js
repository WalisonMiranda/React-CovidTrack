// import axios from 'axios';

// let currentDate = new Date().toISOString().slice(0, 10);

// const baseUrl = 'https://covid-19-data.p.rapidapi.com/';
// const baseUrl = 'https://covid19.mathdro.id/api/';


// const getCountriesName = async () => {
//   const response = await axios.get(`${baseUrl}countries`);
//   const data = response.json();
//   return data;
// }


// const getAllStatus = async () => {
//   const response = await axios.get(`${baseUrl}summary`);
//   const data = response.json();
//   return data;
// };

// async function getAllStatus() {await axios.get(`${baseUrl}summary`)};




// const getCountryStatus = async (country) => {
//   const response = await axios.get(`${baseUrl}/live/country/${country}/status/confirmed/date/${currentDate}T00:00:30Z`);
//   return response.data;
// };

// const getCountryDailyHistory = async (country) => {
//   const response = await axios.get(`${baseUrl}/total/country/${country}`);
//   return response.data;
// };


// export {
  // getCountriesName,
  // getGlobalStatus
  // getCountryStatus,
  // getCountryDailyHistory
// }


// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://covid-19-data.p.rapidapi.com/totals',
//   headers: {
//     'x-rapidapi-key': '4a94b49024mshd25fd8f79b9b440p14c238jsndb155cd5eda1',
//     'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
//   }
// };

// const globalStatus = axios.request(options).then(function (response) {
// 	const data = response.data[0];
//   // console.log(data)
//   return data;
// }).catch(function (error) {
// 	console.error(error);
// });

// export {
//   globalStatus,
// }


// const getData = fetch(`${baseUrl}`)
// .then(response => response.json())
// .then(data => data)
// .catch(error => {
//   throw new error(error);
// })

// console.log(getData);

// export {
//   getData
// }

// const baseUrl = "https://covid-19-tracking.p.rapidapi.com/v1";


// const getGlobalStatus = fetch(`${baseUrl}`, {
//   "method": "GET",
//   "headers": {
//       "x-rapidapi-key": "1401ff5fdbmshc117eee9d064966p13b0b2jsncc5c497562de",
//   "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com"
//   }
// })
// .then(response => response.json())
// .then(data => data)

// .catch(error => {
//   console.log(error);
// })

// export {
//   getGlobalStatus
// }
