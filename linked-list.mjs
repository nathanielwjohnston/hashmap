function createNode({ key = null, value = null, nextNode = null } = {}) {
  return { key, value, nextNode };
}

function createLinkedList() {
  let head = null;

  function insertNode(newKey, newValue) {
    const newNode = createNode({ key: newKey, value: newValue });
    if (!head) {
      head = newNode;
    } else {
      let node = head;
      while (true) {
        // If node with this key already exists
        if (node.key === newKey) {
          node.key = newKey;
          node.value = newValue;
          break;
        }
        // If node is last node in list
        if (node.nextNode === null) {
          node.nextNode = newNode;
          break;
        }

        // To move to the next node in the list
        node = node.nextNode;
      }
    }
  }

  function contains(key, returnValue) {
    if (!head) {
      return false;
    }

    let node = head;

    while (node) {
      if (node.key === key) {
        if (returnValue) return node.value;

        return true;
      }
      node = node.nextNode;
    }

    return false;
  }

  function remove(key) {
    if (!head) {
      return false;
    }

    if (head.key === key) {
      head = head.nextNode;
      return true;
    }

    let node = head;
    // Repeats until the second-to-last element
    while (node.nextNode !== null) {
      // check next node on current node
      if (node.nextNode.key === key) {
        node.nextNode = node.nextNode.nextNode;
        return true;
      }
      node = node.nextNode;
    }

    return false;
  }

  function size() {
    let node = head;
    let size = 0;
    while (node) {
      size++;
      node = node.nextNode;
    }

    return size;
  }

  // for testing
  function toString() {
    if (!head) {
      return "null";
    }

    let node = head;
    let string;
    while (node) {
      string = `${string ? string : ""} ( ${node.key}: ${node.value} ) ->`;

      node = node.nextNode;
    }

    return `${string} null`;
  }

  return { insertNode, contains, remove, size, toString };
}

export { createLinkedList };
