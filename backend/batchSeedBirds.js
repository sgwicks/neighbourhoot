const JasminsBirds = require('./data/JasminsBirds');
const SamsBirds = require('./data/SamsBirds');

const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west-2',
  endpoint: 'https://dynamodb.eu-west-2.amazonaws.com'
});

const docClient = new AWS.DynamoDB.DocumentClient();

const JasminsBirdsMapped = JasminsBirds.map((bird) => {
  return { PutRequest: { Item: bird } };
});
const SamsBirdsMapped = SamsBirds.map((bird) => {
  return { PutRequest: { Item: bird } };
});
const Birds = [...JasminsBirdsMapped, ...SamsBirdsMapped];

const params = {
  RequestItems: {
    Birds
  },
  ReturnValues: 'ALL_OLD'
};

docClient.batchWrite(params, (err, data) => {
  if (err) {
    console.error('unable to add bird', JSON.stringify(err, null, 2));
  } else {
    console.log('added bird:', JSON.stringify(data.UnprocessedItems, null, 2));
  }
});
