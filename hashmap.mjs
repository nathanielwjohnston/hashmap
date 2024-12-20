export function HashMap() {
  let capacity = 16;
  let loadFactor = 0.8;

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

  return { hash };
}
