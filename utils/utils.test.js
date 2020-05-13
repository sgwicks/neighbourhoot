const { fetchBirdsByFeatures, filterBirds } = require('./utils');
const birds = require('../db/data/devBirds');
const { birds2 } = require('../db/data/birds');

describe('fetchBirdsByFeatures', () => {
  it('it returns an array', () => {
    expect(fetchBirdsByFeatures()).toEqual([]);
  });
  it('all birds have correct keys', () => {
    expect(fetchBirdsByFeatures({ head: 'Brown' }, birds)[0]).toEqual(
      expect.objectContaining({
        bird_id: expect.any(Number),
        bird_name: expect.any(String),
        location: expect.any(String),
        features: expect.any(Object),
        user_id: expect.any(Number),
        img_url: expect.any(String)
      })
    );
  });
  it('can filter by single feature', () => {
    expect(fetchBirdsByFeatures({ head: 'Brown' }, birds)).toHaveLength(3);
    expect(fetchBirdsByFeatures({ head: 'Blue' }, birds)[0]).toEqual({
      location: 'Sleights',
      bird_id: 91,
      bird_name: 'Blue Tit',

      features: { wingspan: 11, head: 'Blue', back: 'Blue', chest: 'Yellow' },
      user_id: 1,
      img_url:
        'https://thegraphicsfairy.com/wp-content/uploads/blogger/-_9Gnj4ucWGg/TkFeIpJgikI/AAAAAAAANrk/UVymbYk9WTE/s1600/swallow+silhouette+vintage+printable+graphicsfairysm.jpg'
    });
    expect(fetchBirdsByFeatures({ chest: 'Red' }, birds)).toHaveLength(1);
  });
  it('can filter by multiple features', () => {
    expect(
      fetchBirdsByFeatures(
        {
          head: 'Blue',
          chest: 'Yellow',
          back: 'Blue'
        },
        birds
      )
    ).toEqual([
      {
        location: 'Sleights',
        bird_id: 91,
        bird_name: 'Blue Tit',

        features: { wingspan: 11, head: 'Blue', back: 'Blue', chest: 'Yellow' },
        user_id: 1,
        img_url:
          'https://thegraphicsfairy.com/wp-content/uploads/blogger/-_9Gnj4ucWGg/TkFeIpJgikI/AAAAAAAANrk/UVymbYk9WTE/s1600/swallow+silhouette+vintage+printable+graphicsfairysm.jpg'
      }
    ]);
  });
  it('does not mutate original data', () => {
    const data = {
      location: 'Sleights',
      bird_id: 91,
      bird_name: 'Blue Tit',

      features: { wingspan: 11, head: 'Blue', back: 'Blue', chest: 'Yellow' },
      user_id: 1,
      img_url:
        'https://thegraphicsfairy.com/wp-content/uploads/blogger/-_9Gnj4ucWGg/TkFeIpJgikI/AAAAAAAANrk/UVymbYk9WTE/s1600/swallow+silhouette+vintage+printable+graphicsfairysm.jpg'
    };
    expect(fetchBirdsByFeatures(features, data)[0]).not.toBe(data);
  });
});

describe.only('filterBirds', () => {
  test('return an array', () => {
    expect(Array.isArray(filterBirds(birds2, 'chest'))).toBe(true);
  });
  test('works for a single bird', () => {
    const birds = [
      {
        user_id: 'Neighbourhoot',
        bird_name: 'European Robin',
        location: { lat: 55.954103, lon: -4.549041 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/f/f3/Erithacus_rubecula_with_cocked_head.jpg',
        features: { wingspan: 21, chest: 'red', back: 'brown', head: 'brown' }
      }
    ];

    expect(filterBirds(birds, 'chest')).toEqual(['red']);
  });
  test('returns a list of chest colours for multiple birds', () => {
    const birds = [
      {
        user_id: 'Neighbourhoot',
        bird_name: 'Eurasian Blackbird (male)',
        location: { lat: 53.3584288, lon: -2.0396805 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/a/a9/Common_Blackbird.jpg',
        features: { wingspan: 35, chest: 'black', back: 'black', head: 'black' }
      },
      {
        user_id: 'Neighbourhoot',
        bird_name: 'Eurasian Blackbird (female)',
        location: { lat: 53.3584288, lon: -2.0396805 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/7/72/Common_blackbird_%28Turdus_merula_mauretanicus%29_female.jpg',
        features: { wingspan: 35, chest: 'brown', back: 'brown', head: 'brown' }
      },
      {
        user_id: 'Neighbourhoot',
        bird_name: 'European Robin',
        location: { lat: 55.954103, lon: -4.549041 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/f/f3/Erithacus_rubecula_with_cocked_head.jpg',
        features: { wingspan: 21, chest: 'red', back: 'brown', head: 'brown' }
      }
    ];

    expect(filterBirds(birds, 'chest')).toEqual(
      expect.arrayContaining(['red', 'brown', 'black'])
    );
  });
  test('removes duplicate values', () => {
    const birds = [
      {
        user_id: 'Neighbourhoot',
        bird_name: 'Eurasian Blackbird (male)',
        location: { lat: 53.3584288, lon: -2.0396805 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/a/a9/Common_Blackbird.jpg',
        features: { wingspan: 35, chest: 'brown', back: 'black', head: 'black' }
      },
      {
        user_id: 'Neighbourhoot',
        bird_name: 'Eurasian Blackbird (female)',
        location: { lat: 53.3584288, lon: -2.0396805 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/7/72/Common_blackbird_%28Turdus_merula_mauretanicus%29_female.jpg',
        features: { wingspan: 35, chest: 'brown', back: 'brown', head: 'brown' }
      },
      {
        user_id: 'Neighbourhoot',
        bird_name: 'European Robin',
        location: { lat: 55.954103, lon: -4.549041 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/f/f3/Erithacus_rubecula_with_cocked_head.jpg',
        features: { wingspan: 21, chest: 'red', back: 'brown', head: 'brown' }
      }
    ];

    expect(filterBirds(birds, 'chest')).toEqual(
      expect.arrayContaining(['red', 'brown'])
    );
    expect(filterBirds(birds, 'chest')).toHaveLength(2);
  });
  test('works for non-chest features', () => {
    const birds = [
      {
        user_id: 'Neighbourhoot',
        bird_name: 'Eurasian Blackbird (male)',
        location: { lat: 53.3584288, lon: -2.0396805 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/a/a9/Common_Blackbird.jpg',
        features: { wingspan: 35, chest: 'black', back: 'black', head: 'green' }
      },
      {
        user_id: 'Neighbourhoot',
        bird_name: 'Eurasian Blackbird (female)',
        location: { lat: 53.3584288, lon: -2.0396805 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/7/72/Common_blackbird_%28Turdus_merula_mauretanicus%29_female.jpg',
        features: { wingspan: 35, chest: 'brown', back: 'brown', head: 'pink' }
      },
      {
        user_id: 'Neighbourhoot',
        bird_name: 'European Robin',
        location: { lat: 55.954103, lon: -4.549041 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/f/f3/Erithacus_rubecula_with_cocked_head.jpg',
        features: { wingspan: 21, chest: 'red', back: 'brown', head: 'blue' }
      }
    ];

    expect(filterBirds(birds, 'head')).toEqual(
      expect.arrayContaining(['green', 'pink', 'blue'])
    );
  });
  test('does not mutate the original array', () => {
    const birds = [
      {
        user_id: 'Neighbourhoot',
        bird_name: 'Eurasian Blackbird (male)',
        location: { lat: 53.3584288, lon: -2.0396805 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/a/a9/Common_Blackbird.jpg',
        features: { wingspan: 35, chest: 'black', back: 'black', head: 'green' }
      },
      {
        user_id: 'Neighbourhoot',
        bird_name: 'Eurasian Blackbird (female)',
        location: { lat: 53.3584288, lon: -2.0396805 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/7/72/Common_blackbird_%28Turdus_merula_mauretanicus%29_female.jpg',
        features: { wingspan: 35, chest: 'brown', back: 'brown', head: 'pink' }
      },
      {
        user_id: 'Neighbourhoot',
        bird_name: 'European Robin',
        location: { lat: 55.954103, lon: -4.549041 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/f/f3/Erithacus_rubecula_with_cocked_head.jpg',
        features: { wingspan: 21, chest: 'red', back: 'brown', head: 'blue' }
      }
    ];

    filterBirds(birds, 'head');

    expect(birds).toEqual([
      {
        user_id: 'Neighbourhoot',
        bird_name: 'Eurasian Blackbird (male)',
        location: { lat: 53.3584288, lon: -2.0396805 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/a/a9/Common_Blackbird.jpg',
        features: { wingspan: 35, chest: 'black', back: 'black', head: 'green' }
      },
      {
        user_id: 'Neighbourhoot',
        bird_name: 'Eurasian Blackbird (female)',
        location: { lat: 53.3584288, lon: -2.0396805 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/7/72/Common_blackbird_%28Turdus_merula_mauretanicus%29_female.jpg',
        features: { wingspan: 35, chest: 'brown', back: 'brown', head: 'pink' }
      },
      {
        user_id: 'Neighbourhoot',
        bird_name: 'European Robin',
        location: { lat: 55.954103, lon: -4.549041 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/f/f3/Erithacus_rubecula_with_cocked_head.jpg',
        features: { wingspan: 21, chest: 'red', back: 'brown', head: 'blue' }
      }
    ]);
  });
  test('returns a new array', () => {
    const birds = [
      {
        user_id: 'Neighbourhoot',
        bird_name: 'Eurasian Blackbird (male)',
        location: { lat: 53.3584288, lon: -2.0396805 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/a/a9/Common_Blackbird.jpg',
        features: { wingspan: 35, chest: 'black', back: 'black', head: 'green' }
      },
      {
        user_id: 'Neighbourhoot',
        bird_name: 'Eurasian Blackbird (female)',
        location: { lat: 53.3584288, lon: -2.0396805 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/7/72/Common_blackbird_%28Turdus_merula_mauretanicus%29_female.jpg',
        features: { wingspan: 35, chest: 'brown', back: 'brown', head: 'pink' }
      },
      {
        user_id: 'Neighbourhoot',
        bird_name: 'European Robin',
        location: { lat: 55.954103, lon: -4.549041 },
        img_url:
          'https://upload.wikimedia.org/wikipedia/commons/f/f3/Erithacus_rubecula_with_cocked_head.jpg',
        features: { wingspan: 21, chest: 'red', back: 'brown', head: 'blue' }
      }
    ];

    expect(filterBirds(birds, 'head')).not.toBe(birds);
  });
});
