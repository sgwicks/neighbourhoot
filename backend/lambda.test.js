const { fetchBirdsByFeatures } = require('./lambda');

describe('Searching by features', () => {
  it('it returns an array', () => {
    expect(fetchBirdsByFeatures()).toEqual([]);
  });
  it('all birds have correct keys', () => {
    expect(fetchBirdsByFeatures({ head: 'Brown' })[0]).toEqual(
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
    expect(fetchBirdsByFeatures({ head: 'Brown' })).toHaveLength(3);
    expect(fetchBirdsByFeatures({ head: 'Blue' })[0]).toEqual({
      location: 'Sleights',
      bird_id: 91,
      bird_name: 'Blue Tit',

      features: { wingspan: 11, head: 'Blue', back: 'Blue', chest: 'Yellow' },
      user_id: 1,
      img_url:
        'https://thegraphicsfairy.com/wp-content/uploads/blogger/-_9Gnj4ucWGg/TkFeIpJgikI/AAAAAAAANrk/UVymbYk9WTE/s1600/swallow+silhouette+vintage+printable+graphicsfairysm.jpg'
    });
    expect(fetchBirdsByFeatures({ chest: 'Red' })).toHaveLength(1);
  });
  it('can filter by multiple features', () => {
    expect(
      fetchBirdsByFeatures({
        head: 'Blue',
        chest: 'Yellow',
        back: 'Blue'
      })
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
    expect(fetchBirdsByFeatures()[0]).not.toBe(data);
  });
});
