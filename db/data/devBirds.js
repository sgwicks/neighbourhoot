const devBirds = [
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Blue Tit',
    features: { wingspan: 11, head: 'Blue', back: 'Blue', chest: 'Yellow' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'House Sparrow',
    features: { wingspan: 17, head: 'Brown', back: 'Brown', chest: 'Brown' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Great Tit',
    features: { wingspan: 20, head: 'Brown', back: 'Brown', chest: 'Brown' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Magpie',
    features: { wingspan: 45, head: 'Black', back: 'Black', chest: 'White' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Dove',
    features: { wingspan: 56, head: 'White', back: 'White', chest: 'White' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Mallard Duck (Male)',
    features: { wingspan: 95, head: 'Green', back: 'Brown', chest: 'Brown' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Mallard Duck (Female)',
    features: { wingspan: 81, head: 'Brown', back: 'Brown', chest: 'Brown' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Barn Owl (Male)',
    features: { wingspan: 95, head: 'White', back: 'Brown', chest: 'White' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Bearded Tit (Male)',
    features: { wingspan: 17, head: 'Blue', back: 'Brown', chest: 'Blue' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Chaffinch',

    features: { wingspan: 25, head: 'Red', back: 'Green', chest: 'Red' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Herring Gull',

    features: { wingspan: 140, head: 'White', back: 'Grey', chest: 'White' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'House Martin',
    features: { wingspan: 28, head: 'Black', back: 'Black', chest: 'White' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'House Sparrow (Male)',
    features: { wingspan: 23, head: 'Grey', back: 'Brown', chest: 'Cream' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'House Sparrow (Female)',
    features: { wingspan: 23, head: 'Brown', back: 'Brown', chest: 'Cream' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Carrion Crow',
    features: { wingspan: 100, head: 'Black', back: 'Black', chest: 'Black' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Magpie',
    features: { wingspan: 55, head: 'Black', back: 'Black', chest: 'White' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Jackdaw',
    features: { wingspan: 70, head: 'Grey', back: 'Black', chest: 'Grey' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Robin',
    features: { wingspan: 21, head: 'Brown', back: 'Brown', chest: 'Red' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Red Kite',
    features: {
      wingspan: 180,
      head: 'White',
      back: 'Orange',
      chest: 'Orange'
    },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Kestrel',
    features: { wingspan: 75, head: 'Grey', back: 'Orange', chest: 'White' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Rock Dove',
    features: { wingspan: 67, head: 'Grey', back: 'Grey', chest: 'Grey' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Blue Tit',
    features: { wingspan: 18, head: 'Blue', back: 'Blue', chest: 'Yellow' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  },
  {
    location: { lat: 0, lon: 0 },
    bird_name: 'Blue Tit (Juvenile)',
    features: { wingspan: 18, head: 'Green', back: 'Green', chest: 'Yellow' },
    user_id: 1,
    img_url:
      'https://nppicturestorage.s3.eu-west-2.amazonaws.com/aCcndxYxTKmLj5bR4h7moP.jpeg'
  }
];

module.exports = devBirds;
