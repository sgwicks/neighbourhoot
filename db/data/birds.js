const birds = [
  {
    bird_name: 'Common Quail',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 19, head: 'brown', back: 'brown', chest: 'cream' }
  },
  {
    bird_name: 'Common Eider (male)',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 95, head: 'black', back: 'white', chest: 'black' }
  },
  {
    bird_name: 'Common Eider (female)',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 95, head: 'brown', back: 'brown', chest: 'brown' }
  },
  {
    bird_name: 'Red-legged Partridge',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 48, head: 'grey', back: 'brown', chest: 'grey' }
  },
  {
    bird_name: 'Garganey',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Golden Pheasant',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Surf Scoter',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Northern Shoveler',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: "Lady Amherst's Pheasant",
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Velvet Scoter',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Pheasant',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Grey Partridge',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Gadwall',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Willow Grouse',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Scoter',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Wigeon',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Rock Ptarmigan',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Black Scoter',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Western Capercaillie',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Mallard',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Black Grouse',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Goldeneye',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Ruddy Duck',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Northern Pintail',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Mute Swan',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Smew',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Teal',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Whooper Swan',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Little Grebe',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Tundra Swan',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Goosander',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Brent Goose',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Red-breasted Merganser',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Red-necked Grebe',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Barnacle Goose',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Great Crested Grebe',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Egyptian Goose',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Horned Grebe',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Cackling Goose',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Shelduck',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Black-necked Grebe',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Canada Goose',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Mandarin Duck',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Bar-headed Goose',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Red-crested Pochard',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Rock Dove',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Greylag Goose',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Pochard',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Stock Dove',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Bean Goose',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Redhead',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Woodpigeon',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Pink-footed Goose',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'European Turtle-dove',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Greater White-fronted Goose',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Ferruginous Duck',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Collared-dove',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Long-tailed Duck',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Tufted Duck',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Greater Scaup',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'European Nightjar',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Northern Fulmar',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'European Shag',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Great Cormorant',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Thick-knee',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Oystercatcher',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Pied Avocet',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Grey Plover',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Sooty Shearwater',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Golden Plover',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Great Shearwater',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Swift',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: "Scopoli's Shearwater",
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: "Cory's Shearwater",
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Dotterel',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Manx Shearwater',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Ringed Plover',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Cuckoo',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Balearic Shearwater',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Little Ringed Plover',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Western Water Rail',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Corncrake',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Spotted Crake',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'White Stork',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Spoonbill',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Northern Lapwing',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Bittern',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Moorhen',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Coot',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Whimbrel',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Curlew',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Bar-tailed Godwit',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Red-throated Loon',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Grey Heron',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Black-tailed Godwit',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Arctic Loon',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Purple Heron',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Ruddy Turnstone',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Loon',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Red Knot',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Ruff',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: "Wilson's Storm-petrel",
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Little Egret',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'European Storm-petrel',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Curlew Sandpiper',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Northern Gannet',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: "Temminck's Stint",
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: "Leach's Storm-petrel",
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Black-legged Kittiwake',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Pomarine Jaeger',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Sanderling',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Great Skua',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Dunlin',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Purple Sandpiper',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Black-headed Gull',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Atlantic Puffin',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Black Guillemot',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Mediterranean Gull',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Razorbill',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Little Auk',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Mew Gull',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Murre',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Barn-owl',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Lesser Black-backed Gull',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Woodcock',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'European Herring Gull',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Snipe',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Caspian Gull',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Northern Long-eared Owl',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Jack Snipe',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Iceland Gull',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Short-eared Owl',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Tawny Owl',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Red-necked Phalarope',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Red Phalarope',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Glaucous Gull',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Osprey',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Great Black-backed Gull',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Sandpiper',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'European Honey-buzzard',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Green Sandpiper',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Little Tern',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Spotted Redshank',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Golden Eagle',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Greenshank',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Western Marsh-harrier',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Hen Harrier',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Redshank',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Wood Sandpiper',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Black Tern',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Roseate Tern',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: "Montagu's Harrier",
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Tern',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Sparrowhawk',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Arctic Tern',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Northern Goshawk',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'White-tailed Sea-eagle',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Red Kite',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Little Gull',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Sandwich Tern',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Rough-legged Buzzard',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: "Sabine's Gull",
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Long-tailed Jaeger',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Buzzard',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Arctic Jaeger',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Hoopoe',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Raven',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'European Bee-eater',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Carrion Crow',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Barn Swallow',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Coal Tit',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Kingfisher',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Crested Tit',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Collared Sand Martin',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Marsh Tit',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Wryneck',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Willow Tit',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Green Woodpecker',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Blue Tit',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Great Tit',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Lesser Spotted Woodpecker',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Wood Warbler',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Great Spotted Woodpecker',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Yellow-browed Warbler',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Common Kestrel',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: "Pallas's Leaf-warbler",
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Willow Warbler',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Horned Lark',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: "Cetti's Warbler",
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Golden Oriole',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Blackcap',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Red-eyed Vireo',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Melodious Warbler',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Garden Warbler',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Aquatic Warbler',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Barred Warbler',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Red-backed Shrike',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Sedge Warbler',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Marsh Warbler',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Lesser Whitethroat',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Jackdaw',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Eurasian Nuthatch',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Scottish Crossbill',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Goldcrest',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Cirl Bunting',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Spotted Flycatcher',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Red-breasted Flycatcher',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  },
  {
    bird_name: 'Grey Wagtail',
    location: { lat: 0, lon: 0 },
    user_id: 1,
    imgr_url: 'image',
    features: { wingspan: 0, head: 'colour', back: 'colour', chest: 'colour' }
  }
];

const birds2 = [
  {
    comName: 'Egyptian Goose',
    howMany: 2,
    lat: 51.5713884,
    lng: -0.1700306
  },
  {
    comName: 'Mallard',
    howMany: 2,
    lat: 51.5713884,
    lng: -0.1700306
  },
  {
    comName: 'Mandarin Duck',
    howMany: 2,
    lat: 51.5713884,
    lng: -0.1700306
  },
  {
    comName: 'Mute Swan',
    howMany: 2,
    lat: 51.5713884,
    lng: -0.1700306
  },
  {
    comName: 'Canada Goose',
    howMany: 2,
    lat: 51.5713884,
    lng: -0.1700306
  },
  {
    comName: 'Eurasian Jackdaw',
    howMany: 6,
    lat: 53.3584288,
    lng: -2.0396805
  },
  {
    comName: 'European Starling',
    howMany: 3,
    lat: 53.3584288,
    lng: -2.0396805
  },
  {
    comName: 'European Goldfinch',
    howMany: 4,
    lat: 53.3584288,
    lng: -2.0396805
  },
  {
    comName: 'Common Swift',
    howMany: 6,
    lat: 53.3584288,
    lng: -2.0396805
  },
  {
    comName: 'Eurasian Blackbird',
    howMany: 2,
    lat: 53.3584288,
    lng: -2.0396805
  },
  {
    comName: 'European Robin',
    howMany: 1,
    lat: 55.954103,
    lng: -4.549041
  },
  {
    comName: 'Common Chaffinch',
    howMany: 1,
    lat: 55.954103,
    lng: -4.549041
  },
  {
    comName: 'Common Wood-Pigeon',
    howMany: 2,
    lat: 55.954103,
    lng: -4.549041
  },
  {
    comName: 'Eurasian Magpie',
    howMany: 1,
    lat: 55.954103,
    lng: -4.549041
  },
  {
    comName: 'Barn Swallow',
    howMany: 2,
    lat: 57.355333,
    lng: -2.507852
  },
  {
    comName: 'Rock Pigeon',
    howMany: 5,
    lat: 55.5512068,
    lng: -4.6363114
  },
  {
    comName: 'Herring Gull',
    howMany: 5,
    lat: 55.5512068,
    lng: -4.6363114
  },
  {
    comName: 'Rook',
    howMany: 16,
    lat: 55.5512068,
    lng: -4.6363114
  },
  {
    comName: 'House Sparrow',
    howMany: 12,
    lat: 55.5512068,
    lng: -4.6363114
  },
  {
    comName: 'Carrion Crow',
    howMany: 1,
    lat: 55.5512068,
    lng: -4.6363114
  },
  {
    comName: 'Lesser Black-backed Gull',
    howMany: 1,
    lat: 55.5512068,
    lng: -4.6363114
  },
  {
    comName: 'Eurasian Blue Tit',
    howMany: 1,
    lat: 51.7762515,
    lng: -0.0159873
  },
  {
    comName: 'Eurasian Collared-Dove',
    howMany: 1,
    lat: 55.5512068,
    lng: -4.6363114
  },
  {
    comName: 'Common Chiffchaff',
    howMany: 6,
    lat: 51.832343,
    lng: -0.603903
  },
  {
    comName: 'Yellowhammer',
    howMany: 5,
    lat: 51.832343,
    lng: -0.603903
  }
];

console.log('Birds:', birds.length);
console.log('Birds 2:', birds2.length);
