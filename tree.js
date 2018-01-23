// This is just one way to represent a Move node
// The `parent` attribute will come in handy later...
class Move {
  constructor(x, y, depth, children, parent) {
    this.x = x;
    this.y = y;
    this.depth = depth;
    this.children = children;
    this.parent = parent;
  }
}

class MoveTree {
  constructor(coordinatePair, maxDepth) {
    this.start = new Move(coordinatePair[0], coordinatePair[1], 0);
    this.maxDepth = maxDepth;
    this.moveNodes = {};
  }

  buildTree(origin = this.start, depth = 0) {
    if (depth < this.maxDepth) {
      //Build the tree
      const moves = this.createMoves(origin);
      //Filter invalid moves
      const validMoves = this.filterInvalidMoves(moves);
      origin.children = validMoves;
      console.log(origin.children);
      depth++;
      origin.children.forEach(child => {
        this.buildTree(child, depth);
      });
      //Add the valid moves as children to the root
      //Root should be the origin or place the knight started
      //Call buildTree for next depth
    }
    return this.start;
  }

  filterInvalidMoves(moves) {
    //Is x < 0?
    //Is y < 0?
    //Is x greater than max?
    //Is y greater than max?
    //return filtered moves
    return moves.filter(move => {
      return move.x >= 0 && move.y >= 0 && move.x < 8 && move.y < 8;
    });
  }

  createMoves(origin) {
    return [
      new Move(origin.x - 2, origin.y + 1, origin.depth + 1),
      new Move(origin.x - 2, origin.y - 1, origin.depth + 1),
      new Move(origin.x + 2, origin.y - 1, origin.depth + 1),
      new Move(origin.x + 2, origin.y + 1, origin.depth + 1),
      new Move(origin.x - 1, origin.y + 2, origin.depth + 1),
      new Move(origin.x - 1, origin.y - 2, origin.depth + 1),
      new Move(origin.x + 1, origin.y - 2, origin.depth + 1),
      new Move(origin.x + 1, origin.y + 2, origin.depth + 1)
    ];
  }

  // let newNode = new Move(this.start.x, this.start.y, this.start.depth);
  // if (this.start >= 0)
  //   this.moveNodes.push(
  //     this.start,

  inspect() {
    console.log(
      "THIS IS NUMBER OF MOVE NODES: ",
      JSON.stringify(this.start, null, 2)
    );
    console.log("THIS IS MAX DEPTH: ", this.start.depth);
  }
}

class KnightSearcher {
  constructor(tree) {
    this.tree = tree;
  }

  bfsFor(targetCoordinates) {
    let queue = [];
    let currentNode = this.tree.start;
    if (currentNode.x === targetCoordinates[0]){
      if (currentNode.children) {
        while (currentNode.depth) {
          queue.push();
        }
      }
  }
}

let testTree = new MoveTree([3, 3], 2);
testTree.buildTree();
testTree.inspect();
