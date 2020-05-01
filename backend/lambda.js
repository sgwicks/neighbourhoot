const JasminsBirds = require('./data/JasminsBirds');

exports.fetchBirdsByFeatures = (features) => {
  if (!features) return [];
  const birds = [...JasminsBirds];

  return birds.filter((bird) => {
    let isMatch = true;
    for (key in features) {
      if (bird.features[key] !== features[key]) {
        isMatch = false;
      }
    }
    return isMatch;
  });
};
