var invertTree = function(root) {
    let head = root;
    
    let queue = new Array;
    queue.push(root);
    
    while(queue.length > 0){
        let node = queue.shift();
        
        if(node){
            queue.push(node.left);
            queue.push(node.right);
            let temp = node.left;
            node.left = node.right;
            node.right = temp;
        }
    }
    return head;
};