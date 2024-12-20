import { HashMap } from "./hashmap.mjs";

const hashmap = HashMap();

hashmap.set("Carla", "apple");
hashmap.set("2", "orange");
hashmap.set("9", "grape");
console.log(hashmap.get("2"));
console.log(hashmap.get("test"));

console.log(hashmap.has("2"));
console.log(hashmap.has("test"));
