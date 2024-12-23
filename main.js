import { HashMap } from "./hashmap.mjs";

const hashmap = HashMap();

hashmap.set("Carla", "apple");
hashmap.set("2", "orange");
hashmap.set("6", "test");
hashmap.set("9", "nine");

console.log(hashmap.entries());
