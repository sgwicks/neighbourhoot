const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west-2',
  endpoint: 'https://dynamodb.eu-west-2.amazonaws.com'
});

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'Birds',
  ProjectionExpression: 'Bird_name, Features',

  FilterExpression: '#Bird_name = :Bird_name',

  ExpressionAttributeNames: {
    '#Bird_name': 'Bird_name'
  },
  ExpressionAttributeValues: {
    ':Bird_name': 'House Martin'
  }
};

docClient.scan(params, (err, data) => {
  if (err) {
    console.error('error', JSON.stringify(err, null, 2));
  } else {
    console.log('heres ya queries', JSON.stringify(data.Items[0], null, 2));
  }
});
