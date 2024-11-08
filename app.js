import _ from "lodash";

let items = [1, 2, [3, 4, [5]], 6];

items = _.flattenDepth(items, 1);
console.log(items);