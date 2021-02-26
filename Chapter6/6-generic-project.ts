// 문자열을 담을 수 있는 stack 자료구조 class 구현
// string type을 넣을 수 있는 메소드, string type을 꺼내어줄 수 있는 메소드,
// stack의 size를 읽을 수 있는 size property
// 배열을 사용하지 않고 Linked list 사용하여 구현하기

/* ------------------- 제네릭을 활용하여 리팩토링 ------------------------ */

{
  interface NodeInterface<T> {
    value: T;
    next: NodeInterface<T>;
  }

  class Node<T> implements NodeInterface<T> { 
    value: T;
    next: Node<T> | null = null
    constructor(value: T) {
      this.value = value;
    }
  }

  interface StackInterface<T> {
    _size: number;
    _head: Node<T>;
    _tail: Node<T>;
    _push(value: T): void
    _pop(): T
  }

  class Stack<T> implements StackInterface<T> {
    _size: number = 0;
    _head: Node<T> | null = null;
    _tail: Node<T> | null = null;

    public _push = (value: T): void => {
      let newNode = new Node(value);
      if(!this._head) {
        this._head = newNode;
        this._tail = newNode;
        this._size ++;
      }
      else {
        this._tail.next = newNode;
        this._tail = newNode;
        this._size ++;
      }
    }

    public _pop = (): T => {
      if(!this._tail) {
        throw new Error('No data in Stack!');
      }
      else {

        // Linked List 를 순회하여 새로 tail이 될 노드 찾는 재귀 함수
        const findTailsSibling = (node: Node<T>) => {
          if(node.next.value === this._tail.value) {
            let trash = this._tail;
            this._tail = node;
            this._size --; 
            return trash.value;
          }
          else {
            findTailsSibling(node.next);
          }
        }

        return findTailsSibling(this._head);  // ... head 부터 차례대로 tail이전의 노드 찾기
      }
    }
  }

  const stack = new Stack<string>();
  console.log(stack);
  stack._push('hello');
  console.log(stack);
  stack._push('world');
  console.log(stack);
  stack._push('taesu');
  console.log(stack);
  stack._pop();
  console.log(stack);

  const stack2 = new Stack<number>();
  console.log(stack2);
  stack2._push(12);
  console.log(stack2);
  stack2._push(0);
  console.log(stack2);
  stack2._push(999);
  console.log(stack2);
  stack2._pop();
  console.log(stack2);
}
