const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west-2',
  endpoint: 'https://dynamodb.eu-west-2.amazonaws.com'
});

const docClient = new AWS.DynamoDB.DocumentClient();

const table = 'Birds';

const Location = 'North Leeds';

const Bird_id = 555;

const Bird_name = 'John';

const params = {
  TableName: table,
  Item: {
    Location,
    Bird_id,
    Bird_name
  },
  ReturnValues: 'ALL_OLD'
};

docClient.put(params, (err, data) => {
  if (err) {
    console.error('error', JSON.stringify(err, null, 2));
  } else {
    console.log('Added item:', JSON.stringify(data, null, 2));
  }
});
