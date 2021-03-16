function last(stack){
    return stack[stack.length - 1];
}

class MinStack {
    constructor(){
        this.stack;
        this.minStack;
    }

    push(x){
        if(this.minStack.length === 0 || x <= last(this.minStack)){
            this.minStack.push(x);
        }
        this.stack.push(x);
    }
}