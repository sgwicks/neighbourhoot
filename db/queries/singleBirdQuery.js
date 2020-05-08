const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west-2',
  endpoint: 'https://dynamodb.eu-west-2.amazonaws.com'
});

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'Birds',
  ProjectionExpression: 'bird_name, features',

  FilterExpression: '#bird_name = :bird_name',

  ExpressionAttributeNames: {
    '#bird_name': 'bird_name'
  },
  ExpressionAttributeValues: {
    ':bird_name': 'House Martin'
  }
};

docClient.scan(params, (err, data) => {
  if (err) {
    console.error('error', JSON.stringify(err, null, 2));
  } else {
    console.log('heres ya queries', JSON.stringify(data.Items[0], null, 2));
  }
});
