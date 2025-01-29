const getItems = () => {
    let value = localStorage.getItem('favorites');
    if(value){
        return JSON.parse(value);
    };
    return[];
};

const setItems = (id) => {
    const oldArray = getItems();
    const isIN = oldArray.find(ids => ids == id);
    if(!isIN){
        oldArray.push(id);
        localStorage.setItem('favorites',JSON.stringify(oldArray));
        return true;
    }
    else{
        return false;
    }
};

const removeItems = (id) => {
    const array = getItems();
    const filteredArray = array.filter(ids => ids != id);
    localStorage.setItem('favorites',JSON.stringify(filteredArray));
};

export {setItems,getItems,removeItems}