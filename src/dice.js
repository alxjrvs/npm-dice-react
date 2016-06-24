import _ from 'lodash';

let roll = (sides, numberRolled) => {
  let total = 0
  _.times(numberRolled,() => {
    total = total + (_.random(1, sides));
  });
  return total
};

module.exports = roll;

