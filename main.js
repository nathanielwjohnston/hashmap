import { HashMap } from "./hashmap.mjs";

const hashmap = HashMap();

hashmap.set("Carla", "apple");
hashmap.set("2", "orange");
hashmap.set("9", "grape");
hashmap.set("9", "tomato");

console.log(hashmap.remove("test"));

hashmap.set("9", "test");
