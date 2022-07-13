export function repackColorsForPage(array) {
  const colors = array.map((i) => {
    if (i.color === 'silver' || i.color === 'space gray' || i.color === 'grey' || i.color === 'silver' || i.color === 'pure silver' || i.color === 'graphite' || i.color === 'phantom silver' || i.color === 'moonlight_silver') {
      return 'gray';
    }
    if (i.color === 'charcoal black' || i.color === 'shale black' || i.color === 'shadow black' || i.color === 'Black') {
      return 'black';
    }
    if (i.color === 'ceramic white') {
      return 'white';
    }
    if (i.color === 'sierraBlue' || i.color === 'deep sea blue') {
      return 'blue';
    }
    if (i.color === 'blush gold' || i.color === 'gold' || i.color === 'prestige gold' || i.color === 'sand') {
      return '#FFD700';
    }
    if (i.color === 'lilac') {
      return 'purple';
    }
    return i.color;
  });
  return [...new Set(colors)].sort();
}

export function repackColorsForServer(array) {
  const colors = array.map((item) => {
    if (item === 'gray') {
      return 'gray,silver,space gray,grey,pure silver,graphite,phantom silver,moonlight_silver';
    }
    if (item === 'black') {
      return 'black,charcoal black,shale black,shadow black,Black';
    }
    if (item === 'white') {
      return 'white,ceramic white';
    }
    if (item === 'blue') {
      return 'blue,sierraBlue,deep sea blue';
    }
    if (item === '#FFD700') {
      return 'blush gold,gold,prestige gold,sand';
    }
    if (item === 'purple') {
      return 'purple,lilac';
    }
    return item;
  });
  return `&color=${colors.join()}`;
}