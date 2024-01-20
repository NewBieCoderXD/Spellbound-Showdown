export class Stack<T>{
    store: Array<T>;
    constructor(){
      this.store = [];
    }
    peek(){
        return this.store[this.store.length-1];
    }
    push(value:T){
        return this.store.push(value);
    }
    pop(){
        return this.store.pop();
    }
}