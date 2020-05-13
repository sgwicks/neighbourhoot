const devBirds = require('../../data/devBirds');
const { generateUUID } = require('../../utils/utils');

const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west-2',
  endpoint: 'https://dynamodb.eu-west-2.amazonaws.com'
});

const docClient = new AWS.DynamoDB.DocumentClient();

const Birds = devBirds.map((bird) => {
  const newBird = { ...bird, bird_id: generateUUID() };
  return { PutRequest: { Item: newBird } };
});

const params = {
  RequestItems: {
    devBirds: Birds
  }
};

docClient.batchWrite(params, (err, data) => {
  if (err) {
    console.error('unable to add bird', JSON.stringify(err, null, 2));
  } else {
    console.log('added bird:', JSON.stringify(data.UnprocessedItems, null, 2));
  }
});
