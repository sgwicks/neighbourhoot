const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west-2',
  endpoint: 'https://dynamodb.eu-west-2.amazonaws.com'
});

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'Birds',
  KeyConditionExpression: '#location = :location AND #bird_id = :bird_id',

  ExpressionAttributeNames: {
    '#location': 'location',
    '#bird_id': 'bird_id'
  },
  ExpressionAttributeValues: {
    ':location': 'North Leeds',
    ':bird_id': 8
  }
};

docClient.query(params, (err, data) => {
  if (err) {
    console.error('error', JSON.stringify(err, null, 2));
  } else {
    console.log('heres ya queries', JSON.stringify(data, null, 2));
  }
});
