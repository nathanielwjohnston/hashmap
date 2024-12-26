import { createLinkedList } from "./linked-list.mjs";

export function HashSet() {
  let capacity = 16;
  let loadFactor = 0.75;
  let buckets = new Array(capacity);

  // Based on the implementation from the odin project example
  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= capacity;
    }

    return hashCode;
  }

  // get function removed due no values in hashset

  function has(key) {
    const hashIndex = hash(key);
    const bucket = buckets[hashIndex];
    if (!bucket) return false;

    return bucket.contains(key, false);
  }

  function remove(key) {
    const hashIndex = hash(key);
    const bucket = buckets[hashIndex];
    if (!bucket) return false;

    return bucket.remove(key);
  }

  function length() {
    let keys = 0;

    for (let bucket of buckets) {
      if (bucket) {
        keys += bucket.size();
      }
    }

    return keys;
  }

  function clear() {
    buckets = new Array(capacity);
  }

  function keys() {
    const keys = [];

    for (let bucket of buckets) {
      if (!bucket) continue;
      let node = bucket.getHead();
      while (node) {
        keys.push(node.key);
        node = node.nextNode;
      }
    }

    return keys;
  }

  // values function removed due no values in hashset

  function entries() {
    // no values in a hashset
    return keys();
  }

  function checkLoad() {
    const entriesAmount = length();
    console.log(`entries: ${entriesAmount}`);
    const targetEntriesAmount = capacity * loadFactor;
    console.log(`target: ${targetEntriesAmount}`);
    if (entriesAmount > targetEntriesAmount) {
      return true;
    }

    return false;
  }

  function growBuckets() {
    capacity *= 2;

    const hashEntries = entries();
    buckets = new Array(capacity);

    for (let entry of hashEntries) {
      set(entry);
    }

    console.log("growth");
  }

  function set(key) {
    // hash the key
    const hashIndex = hash(key);
    // go to bucket
    if (hashIndex < 0 || hashIndex >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (!buckets[hashIndex]) {
      buckets[hashIndex] = createLinkedList();
    }

    buckets[hashIndex].insertNode(key);

    console.log(hashIndex);
    console.log(buckets[hashIndex].toString());
    // Bucket growth
    if (checkLoad()) growBuckets();
  }

  return { set, has, remove, length, clear, keys, entries };
}

// go through linked list - if one exists - in the bucket, until either the key
// is found (at which point it's value is replaced by the new value) or
// if not found, it is added to the linked list
// In the the case that there are no values, the key will be set to the head
// of a new linked list in that bucket

// keys, values, and entries are all very similar and could probably be
// broken down into a function in linked lists that will feed nodes to them
// to parse the information
