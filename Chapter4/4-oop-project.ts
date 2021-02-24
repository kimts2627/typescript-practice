// 문자열을 담을 수 있는 stack 자료구조 class 구현
// string type을 넣을 수 있는 메소드, string type을 꺼내어줄 수 있는 메소드,
// stack의 size를 읽을 수 있는 size property
// 배열을 사용하지 않고 Linked list 사용하여 구현하기

{
  interface NodeInterface {
    value: string;
    next: NodeInterface;
  }

  class Node implements NodeInterface {   // ... 노드를 스택 밖에서 만들기 금지시켜려면..?
    readonly value: string = ''
    next: Node | null = null
    constructor(value: string) {
      this.value = value;
    }
  }

  interface StackInterface {
    _size: number;
    _head: Node;
    _tail: Node;
    _push(value: string): void
    _pop(): string
  }

  class Stack implements StackInterface {
    _size: number = 0;
    _head: Node | null = null;
    _tail: Node | null = null;

    public _push = (value: string): void => {
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

    public _pop = (): string => {
      if(!this._tail) {
        throw new Error('No data in Stack!');
      }
      else {

        // Linked List 를 순회하여 새로 tail이 될 노드 찾는 재귀 함수
        const findTailsSibling = (node: Node) => {
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

  const stack = new Stack;
  console.log(stack);
  stack._push('hello');
  console.log(stack);
  stack._push('world');
  console.log(stack);
  stack._push('taesu');
  console.log(stack);
  stack._pop();
  console.log(stack);
}
