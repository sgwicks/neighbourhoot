# NeighbourHoot

## What is NeighbourHoot?

NeighbourHoot is a joint encyclopedia/social app designed to help people identify birds in their local area. It takes the users location and displays common birds that are spotted locally, as well as letting the user log their own sightings.

## Features

A user can:

- Create a user account
- Login using their email address and chosen password
- See a list of birds commonly seen in their area
- Filter this list by colours of the feathers on the front, back, and head of a bird
- Log a sighting of a bird
- Upload a photo of a bird
- Access a profile page where they can see a list of previous photos the user has taken

## Tech Stack

This app uses JavaScript, React-Native, Expo, AWS, S3 Buckets, Cognito, DynamoDB, API Gateway, Lambda and Google Maps.

## Set up

To run this app, you will need to be registered and obtain a key from AWS (https://aws.amazon.com/) and google maps (https://developers.google.com/maps/).

Once you have downloaded this repo you will need to create a folder called `keys3.js` and then paste the following into the file:

```
const accessKeys = {
  AWSaccessKey: "<YOUR-KEY-HERE>",
  AWSsecretKey: "<YOUR-KEY-HERE",
};
export default accessKeys;
```

Next you will need to create a second file called `env2.js` and then paste the following:

```
const ENV = { googleApiKey: "<YOUR-GOOGLE-KEY-HERE>" };

export default ENV;
```

Finally -

1. run `npm i` in terminal
1. run `expo start` and use the expo app on your phone to use NeighbourHoot!
