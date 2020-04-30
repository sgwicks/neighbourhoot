const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west-2',
  endpoint: 'https://dynamodb.eu-west-2.amazonaws.com'
});

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'Birds',
  KeyConditionExpression: '#Location = :Location AND #Bird_id = :Bird_id',

  ExpressionAttributeNames: {
    '#Location': 'Location',
    '#Bird_id': 'Bird_id'
  },
  ExpressionAttributeValues: {
    ':Location': 'North Leeds',
    ':Bird_id': 8
  }
};

docClient.query(params, (err, data) => {
  if (err) {
    console.error('error', JSON.stringify(err, null, 2));
  } else {
    console.log('heres ya queries', JSON.stringify(data, null, 2));
  }
});
