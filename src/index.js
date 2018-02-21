class Sorter {
    constructor() {
        this.arr = [];
    }

    add(element) {
        this.arr.push(element);
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {

      let compare = this.compFunc || function comp (a, b) {return a - b;}

        let newArr = [];
        let ind = indices.sort(compare);

        for (let i = 0; i < ind.length; i++){
            newArr.push(this.arr[ind[i]]);
        };

        newArr.sort(compare);

        for (let i = 0; i < ind.length; i++){
            this.arr.splice(ind[i], 1, newArr[i]);
        };

    }

    setComparator(compareFunction) {
      this.compFunc = compareFunction;
    }
}
module.exports = Sorter;
