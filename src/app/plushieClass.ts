interface PlushieInterface {
    name:string,
    size:number
}

export class Plushie {
    items:PlushieInterface[] = [];

    getItems() {
        return this.items;
    }
    addItem(item:PlushieInterface) {
        this.items.push(item);
        return '';
    }
    toString(item:PlushieInterface) {
        return item.name + " (" + item.size.toString + " cm)";
    }
}
