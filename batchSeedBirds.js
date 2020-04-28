const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west-2',
  endpoint: 'https://dynamodb.eu-west-2.amazonaws.com'
});

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  RequestItems: {
    Birds: [
      {
        PutRequest: {
          Item: {
            Location: 'North Leeds',
            Bird_id: 87,
            Bird_name: 'House Martin'
          }
        }
      },
      {
        PutRequest: {
          Item: {
            Location: 'North Leeds',

            Bird_id: 78,
            Bird_name: 'Common Tit'
          }
        }
      }
    ]
  }
};

console.log('adding new birds, tweet, tweet');
docClient.batchWrite(params, (err, data) => {
  if (err) {
    console.error('unable to add bird', JSON.stringify(err, null, 2));
  } else {
    console.log('added bird:', JSON.stringify(data, null, 2));
  }
});
