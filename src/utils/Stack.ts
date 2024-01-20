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
    pickLast(x: number): Array<T> {
        if (x <= 0 || x > this.store.length) {
            console.log(`Can't do.`);
            throw new Error('Invalid value of x');
        }
        const lastIndex = this.store.length - 1;
        const lastElements = this.store.slice(lastIndex - x + 1, lastIndex + 1);
        this.store.splice(lastIndex - x + 1, x);
        return lastElements;
    }
    pullTopBack(arr: Array<T>): void {
        this.store.unshift(...arr);
    }
}