
function Tree(){
    this.root=null;
}

function Node(value){
    this.leftChild=null;
    this.rightChild=null;
    this.value=value;
}



Tree.prototype.add=function(value){
    var node = new Node(value);
    if(this.root===null){
        this.root=node;
    }else{
        this.root.add_node(node);
    }
}

Node.prototype.add_node=function(n){
    if(n.value<this.value){
        if(this.leftChild===null){
            this.leftChild=n;
        }else{
            this.leftChild.add_node(n);
        }

    }else{
        if(this.rightChild===null){
            this.rightChild=n;
        }else{
            this.rightChild.add_node(n);
        }
    }
}

var tree = new Tree();

tree.add(20);
tree.add(10);
tree.add(30);
tree.add(15);
tree.add(50);
tree.add(5);
tree.add(25);
console.log(tree);