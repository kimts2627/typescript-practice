/**
 * Let's make a game 🕹
 */

type GamePosition = {
  x: number,
  y: number
}

type MoveDirection = 'up' | 'down' | 'left' | 'right';

let position: GamePosition = { x: 0, y: 0 };

function move(direction: MoveDirection) {
  switch (direction) {
    case 'up':
      position.y = position.y + 1;
      break;
    case 'down':
      position.y = position.y - 1;
      break;
    case 'left':
      position.x = position.x - 1;
      break;
    case 'right':
      position.x = position.x + 1;
      break;
    // default:
    //   throw new Error('bad command');
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
