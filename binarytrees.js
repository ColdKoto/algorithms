function PokeNode(val, name){
  this.val = val;
  this.name = name;
  this.left = null;
  this.right = null;
}
class PokemonBST{
  constructor(){
    this.root = null;
    this.size = 0;
  }
  insert(val, name){
    if(!this.root){
      this.root = new PokeNode(val, name);
      this.size++;
      return true;
    }
    let current = this.root;
    while(current){
      if(current.val == val){
        return false;
      }
      else if(current.val < val){
        if(current.right){
          current = current.right;
        }
        else{
          current.right = new PokeNode(val, name);
          this.size++;
          return this;
        }
      }
      else{
        if(current.left){
          current = current.left;
        }
        else{
          current.left = new PokeNode(val, name);
          this.size++;
          return this;
        }
      }
    }
  }
  isComplete(){
    let firstBaseFound    = false,
        arr               = [this.root],
        oldHeights        = [],
        currentHeight     = 1,
        expectedFirstName = this.locate(this.size),
        height            = 1;
    while(this.size > Math.pow(2, height) - 1){
      height++;
    }
    while(arr.length){
      let current = arr.pop();
      if(!firstBaseFound && currentHeight == height){
        if(expectedFirstName == current.name){
          firstBaseFound = true;
        }
        else{
          return false;
        }
      }
      else if(currentHeight == height && (current.left || current.right)){
        return false;
      }
      if(current.left && current.right){
        arr.push(current.left, current.right);
        currentHeight++;
        oldHeights.push(currentHeight);
      }
      else if(current.left){
        arr.push(current.left);
        currentHeight++;
      }
      else if(current.right){
        return false;
      }
      else{
        if(oldHeights.length){
          currentHeight = oldHeights.pop();
        }
      }
    }
    return true;
  }
  // height(){
  //   if(!this.root){
  //     return 0;
  //   }
  //   else{
  //     return activeHeight(this.root);
  //   }
  // }
  // activeHeight(node){
  //   if(!node){
  //       return 0;
  //   }
  //   const leftMost  = activeHeight(node.left),
  //         rightMost = activeHeight(node.right);
  //
  //   if(leftMost > rightMost){
  //       return leftMost + 1;
  //   }
  //   else{
  //       return rightMost + 1;
  //   }
  // }
  locate(idx){
    let arr = [];
    while(idx !== 1){
      arr.push(idx);
      idx = Math.floor(idx / 2);
    }
    let current = this.root;
    while(arr.length){
      const path = arr.pop()
      if(path % 2 === 0){
        current = current.left;
      }
      else{
        current = current.right;
      }
    }
    if(!current){
      return 'notaPokemon'
    }
    return current.name;
  }
}

let poketree = new PokemonBST();
poketree.insert(68, 'Machamp');
poketree.insert(16, 'Pidgey');
poketree.insert(24, 'Arbok');
poketree.insert(90, 'Shellder');
poketree.insert(104, 'Cubone');
poketree.insert(78, 'Rapidash');
poketree.insert(5, 'Charmeleon');
poketree.insert(3, 'Venusaur');
poketree.insert(11, 'Metapod');
poketree.insert(19, 'Rattata');
poketree.insert(72, 'Tentacool');
poketree.insert(81, 'Magnemite');
poketree.insert(39, 'Jigglypuff');
poketree.insert(100, 'Voltorb');
poketree.insert(126, 'Magmar');
// poketree.insert(2, 'Ivysaur');
// console.log(poketree.locate(13));
console.log(poketree.isComplete());
