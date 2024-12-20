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

  return { insertNode, contains, toString };
}

export { createLinkedList };
