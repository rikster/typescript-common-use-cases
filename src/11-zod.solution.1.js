var z = require('zod').z;
var CacheSchema = z.record(z.string());
var cache = {};
var id = 'myId';
var value = 'myValue';
function modifyCache(cache, id, value, isAddOperation) {
    if (isAddOperation === void 0) { isAddOperation = true; }
    if (isAddOperation) {
        if (value !== undefined) {
            cache[id] = value;
        }
        else {
            console.log("Value is required for 'add' operation.");
        }
    }
    else {
        if (cache.hasOwnProperty(id)) {
            delete cache[id];
        }
        else {
            console.log("Key '".concat(id, "' not found in cache."));
        }
    }
}
// Add value to cache
modifyCache(cache, id, value, true);
console.log("Cache after adding:", cache);
// Remove value from cache
modifyCache(cache, id, undefined, false);
console.log("Cache after removing:", cache);
