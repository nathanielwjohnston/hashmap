import { HashMap } from "./hashmap.mjs";
import { HashSet } from "./hashset.mjs";

const test = HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(`length: ${test.length()}`);

test.set("apple", "rad");
test.set("banana", "hello");
test.set("carrot", "orangutan");

console.log(`length: ${test.length()}`);

test.set("moon", "silver");

test.set("hat", "brim");
test.set("ice cream", "whitty");
test.set("jacket", "denim");

console.log(test.get("hat"));
console.log(test.has("kite"));
console.log(test.length());
console.log(test.remove("jacket"));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
test.clear();
console.log(test.length());

const hashset = HashSet();

hashset.set("apple");
hashset.set("banana");
hashset.set("carrot");
hashset.set("dog");
hashset.set("elephant");
hashset.set("frog");
hashset.set("grape");
hashset.set("hat");
hashset.set("ice cream");
hashset.set("jacket");
hashset.set("kite");
hashset.set("lion");

hashset.set("moon");

console.log(hashset.has("kite"));
console.log(hashset.length());
console.log(hashset.remove("jacket"));
console.log(hashset.length());
console.log(hashset.keys());
console.log(hashset.entries());
hashset.clear();
console.log(hashset.length());
