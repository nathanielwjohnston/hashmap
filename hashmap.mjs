import { createLinkedList } from "./linked-list.mjs";

export function HashMap() {
  let capacity = 16;
  let loadFactor = 0.8;
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

  function set(key, value) {
    // hash the key
    const hashIndex = hash(key);
    // go to bucket
    if (hashIndex < 0 || hashIndex >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (!buckets[hashIndex]) {
      buckets[hashIndex] = createLinkedList();
    }

    buckets[hashIndex].insertNode(key, value);

    console.log(hashIndex);
    console.log(buckets[hashIndex].toString());
    // TODO: bucket growth
  }

  function get(key) {
    const hashIndex = hash(key);
    const bucket = buckets[hashIndex];
    if (!bucket) return null;

    const value = bucket.contains(key, true);
    if (value) {
      return value;
    } else {
      return null;
    }
  }

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

  return { set, get, has, remove, length };
}

// go through linked list - if one exists - in the bucket, until either the key
// is found (at which point it's value is replaced by the new value) or
// if not found, it is added to the linked list
// In the the case that there are no values, the key will be set to the head
// of a new linked list in that bucket
