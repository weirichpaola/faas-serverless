require('dotenv').config();
const axios = require('axios');

const BITLY_TOKEN = "e04a93cbb29616148c8e5d79cfc7b94386e9c6c1" //process.env.BITLY_TOKEN;

exports.handler = function (event, context, callback) {
    const body = JSON.parse(event.body);
    const payload = { long_url: body["link"] };

    axios({
        method: 'post',
        url: "https://api-ssl.bitly.com/v4/shorten",
        headers: {
            "content-type": "application/json",
            "authorization": "Bearer " + BITLY_TOKEN,
        },
        data: JSON.stringify(payload),
    }).then((response) => {
        return response.data;
    }).then((json) => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                link: json["link"]
            })
        });
    }).catch(ex => callback(ex));
}