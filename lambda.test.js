const { fetchBirdsByFeatures } = require('./lambda');

describe('Searching by features', () => {
  it('it returns an array', () => {
    expect(fetchBirdsByFeatures()).toEqual([]);
  });
  it('all birds have correct keys', () => {
    expect(fetchBirdsByFeatures({ Head: 'Brown' })[0]).toEqual(
      expect.objectContaining({
        Bird_id: expect.any(Number),
        Bird_name: expect.any(String),
        Location: expect.any(String),
        Features: expect.any(Object)
      })
    );
  });
  it('can filter by single feature', () => {
    expect(fetchBirdsByFeatures({ Head: 'Brown' })).toHaveLength(3);
    expect(fetchBirdsByFeatures({ Head: 'Blue' })[0]).toEqual({
      Location: 'Sleights',
      Bird_id: 91,
      Bird_name: 'Blue Tit',

      Features: { Wingspan: 11, Head: 'Blue', Back: 'Blue', Chest: 'Yellow' }
    });
    expect(fetchBirdsByFeatures({ Chest: 'Red' })).toHaveLength(1);
  });
  it('can filter by multiple features', () => {
    expect(
      fetchBirdsByFeatures({
        Head: 'Blue',
        Chest: 'Yellow',
        Back: 'Blue'
      })
    ).toEqual([
      {
        Location: 'Sleights',
        Bird_id: 91,
        Bird_name: 'Blue Tit',

        Features: { Wingspan: 11, Head: 'Blue', Back: 'Blue', Chest: 'Yellow' }
      }
    ]);
  });
  it('does not mutate original data', () => {
    const data = {
      Location: 'Sleights',
      Bird_id: 91,
      Bird_name: 'Blue Tit',

      Features: { Wingspan: 11, Head: 'Blue', Back: 'Blue', Chest: 'Yellow' }
    };
    expect(fetchBirdsByFeatures()[0]).not.toBe(data);
  });
});
