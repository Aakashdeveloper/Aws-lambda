const axios = require('axios')

exports.handler = async (event) => {
  
    let city = event.queryStringParameters?.city?event.queryStringParameters.city:'Delhi';

    let responsed = await axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`)
    var final = responsed.data.city
    const response = {
        statusCode: 200,
        body: JSON.stringify(final),
    };
    return response
}
