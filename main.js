import { HashMap } from "./hashmap.mjs";

const hashmap = HashMap();

hashmap.set("Carla", "apple");
hashmap.set("2", "orange");
hashmap.set("8", "grape");
hashmap.set("7", "tomato");

console.log(hashmap.remove("test"));

hashmap.set("6", "test");
console.log(hashmap.length());
