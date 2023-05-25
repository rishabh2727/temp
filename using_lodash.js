const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const action = _.flattenDeep(items);
console.log(action);
