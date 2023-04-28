// tsc .\src\11-zod.solution.1.ts
// node .\src\\11-zod.solution.1.js

import { z } from 'zod';

const CacheSchema = z.record(z.string());

type ICache = z.infer<typeof CacheSchema>;

const cache: ICache = {};

const id: string = 'myId'; // Replace with your desired id (string)
const value: string = 'myValue'; // Replace with your desired value (string)

function modifyCache(cache: ICache, id: string, value?: string, isAddOperation: boolean = true): void {
  if (isAddOperation) {
    if (value !== undefined) {
      cache[id] = value;
    } else {
      console.log("Value is required for 'add' operation.");
    }
  } else {
    if (cache.hasOwnProperty(id)) {
      delete cache[id];
    } else {
      console.log(`Key '${id}' not found in cache.`);
    }
  }
}

// Add value to cache
modifyCache(cache, id, value, true);
console.log("Cache after adding:", cache);

// Remove value from cache
modifyCache(cache, id, undefined, false);
console.log("Cache after removing:", cache);
