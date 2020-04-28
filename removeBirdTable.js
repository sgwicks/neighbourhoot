const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west-2',
  endpoint: 'https://dynamodb.eu-west-2.amazonaws.com'
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'Birds'
};

dynamodb.deleteTable(params, (err, data) => {
  if (err) {
    console.error('oh dear', JSON.stringify(err, null, 2));
  } else {
    console.log('table deleted', JSON.stringify(data, null, 2));
  }
});
