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
    this.start = new Move(coordinatePair[0], coordinatePair[1], maxDepth);
    this.moveNodes = [];
  }

  potentialMoves() {
    this.moveNodes.push(
      this.start,
      new Move(this.start - 2, this.start + 1),
      new Move(this.start - 2, this.start - 1),
      new Move(this.start + 2, this.start - 1),
      new Move(this.start + 2, this.start + 1),
      new Move(this.start - 1, this.start + 2),
      new Move(this.start - 1, this.start - 2),
      new Move(this.start + 1, this.start - 2),
      new Move(this.start + 1, this.start + 2)
    );
  }

  inspect() {
    console.log("THIS IS NUMBER OF MOVE NODES: ", this.moveNodes.length);
    console.log("THIS IS MAX DEPTH: ", this.start.depth);
  }
}

let tree = new MoveTree([3, 3], 1);