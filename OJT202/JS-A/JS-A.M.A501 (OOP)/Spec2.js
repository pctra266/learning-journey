class Group{
    arr = [];

    constructor(){
        this.arr = [];
    }
   
    add(item){
        if(!this.has(item)){
            this.arr.push(item);
        }
    }

    has(item){
        return this.arr.indexOf(item) != -1;
    }

    delete(item){
        for(const key in this.arr){
            if(this.arr[key] == item){
                this.arr.splice(key,1);
                return true;
            }
        }
        return false;
    }

    static from(iterable){
        let group = new Group();
        for (const item of iterable) {
            group.add(item);
        }
        return group;
    }
}

let group = Group.from([10,20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));