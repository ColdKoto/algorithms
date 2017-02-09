function TrieNode(val){
    this.val = val;
    this.isWord = false;
    this.children = {};
}

class Trie{
  constructor(){
    this.root = new TrieNode('');
    this.size = 0;
  }
  insert(word, node){
    if(!word || typeof(word) !== 'string'){
      return null;
    }
    if(!node){
      node = this.root;
    }
    const letter = word[0];
    let child = node.children[letter],
        added = false;
    if(!child){
      child = new TrieNode(letter);
      node.children[letter] = child;
      added = true;
    }
    const remainder = stringRemainder(word,1); // .substring(1)
    if(!remainder){
      const changed = child.isWord;
      child.isWord = true;
      if(added || changed !== child.isWord){
        this.size++;
        return true;
      }
      return false;
    }
    return this.insert(remainder, child);
  }
  containsWord(word, node){
    if(!word || typeof(word) !== 'string'){
      return null;
    }
    if(!node){
      node = this.root;
    }
    const letter = word[0],
          child  = node.children[letter];
    if(!child){
      return false;
    }
    const remainder = stringRemainder(word,1);
    if(!remainder){
      if(child.isWord){
        return true;
      }
      return false;
    }
    return this.containsWord(remainder, child);
  }
  removeWord(word, node){
    if(!word || typeof(word) !== 'string'){
      return null;
    }
    if(!node){
      node = this.root;
    }
    const letter    = word[0],
          child     = node.children[letter],
          remainder = stringRemainder(word,1);
    if(!remainder){
      if(child.isWord){
        if(child.children){
          child.isWord = false;
          const done = 'done';
          return done;
        }
        return true;
      }
      return false;
    }
    if(typeof(child) !== 'object'){
      return false;
    }
    const result = this.removeWord(remainder, child);
    if(result == 'done'){
      if(node == this.root){
        this.size--;
        return true;
      }
      return result;
    }
    if(result){
      delete node.children[letter];
      if(child.isWord){
        const done = 'done';
        return done;
      }
      return true;
    }
    return false;
  }
  first(node){
    if(!node){
      node = this.root;
    }
    let string = '';
    let array = [];
    for(let child in node.children){
      array.push(node.children[child].val.charCodeAt(0));
    }
    const smallest = minVal(array);
    if(node.isWord){
      string += node.val;
      return string;
    }
    const firstWord = this.first(node.children[String.fromCharCode(smallest)]);
    string += node.val + firstWord;
    return string;
  }
  last(node){
    if(!node){
      node = this.root;
    }
    let string = '';
    let array = [];
    for(let child in node.children){
      array.push(node.children[child].val.charCodeAt(0));
    }
    const biggest = maxVal(array);
    if(node.isWord){
      string += node.val;
      return string;
    }
    const lastWord = this.last(node.children[String.fromCharCode(biggest)]);
    string += node.val + lastWord;
    return string;
  }
  nextWord(word, node){
    if(!word || typeof(word) !== 'string'){
      return null;
    }
    if(!node){
      node = this.root;
    }
    let string = '';
    const letter = word[0],
          child  = node.children[letter];
    if(!child){
      return null;
    }
    const remainder = stringRemainder(word,1);
    if(!remainder){
      if(child.isWord){
        string += child.val;
        return string;
      }
      else{
        string += this.first(child);
        return string;
      }
    }
    const returnedWord = this.nextWord(remainder, child);
    if(returnedWord == null){
      return null;
    }
    string += child.val + returnedWord;
    return string;
  }
}

function minVal(arr){
  let min = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}
function maxVal(arr){
  let max = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}
function stringRemainder(string, idx){
  let str = '';
  for(let i = idx; i < string.length; i++){
    str += string[i];
  }
  return str;
}
function countingSort(arr, min, max){
  let i, z = 0, count = [];
  for (i = min; i <= max; i++) { //creates a bucket for each number
      count[i] = 0;
  }
  for (i=0; i < arr.length; i++) { //everytime the array finds a number it increments that bucket
      count[arr[i]]++;
  }
  for (i = min; i <= max; i++) {
      while (count[i]-- > 0) { // you can decrement within while loops!!!!!!!
          arr[z++] = i; //after replacing the array index z increments
      }
  }
  return arr;
}
// function trim(str){
//   const onlyAlpha = /[a-zA-Z]/;
//   let newS = '';
//   for(let i = 0; i < str.length; i++){
//     if(str[i].match(onlyAlpha)){
//       newS += str[i];
//     }
//   }
//   return newS.toLowerCase();
// }
