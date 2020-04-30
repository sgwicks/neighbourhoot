const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west-2',
  endpoint: 'https://dynamodb.eu-west-2.amazonaws.com'
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'Birds',
  KeySchema: [
    { AttributeName: 'location', KeyType: 'HASH' },
    { AttributeName: 'bird_id', KeyType: 'RANGE' }
  ],
  AttributeDefinitions: [
    { AttributeName: 'location', AttributeType: 'S' },
    { AttributeName: 'bird_id', AttributeType: 'S' }
  ],
  ProvisionedThroughput: { ReadCapacityUnits: 10, WriteCapacityUnits: 10 }
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error('oh no', JSON.stringify(err, null, 2));
  } else {
    console.log('heres your bird table, ', JSON.stringify(data, null, 2));
  }
});
