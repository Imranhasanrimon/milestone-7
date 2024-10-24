
const getItemFromLocalStorag = () => {
    const item = localStorage.getItem('cart2');
    if (item) {
        return JSON.parse(item)
    } else {
        return [];
    }
}



const setItemToLocalStorage = itemId => {
    const itemArray = getItemFromLocalStorag();
    if (!itemArray.includes(itemId)) {
        itemArray.push(itemId)
    }
    save(itemArray)

}

const save = (itemArray) => {
    const itemJson = JSON.stringify(itemArray);
    localStorage.setItem('cart2', itemJson)
}
// setItemToLocalStorage('hello')
setItemToLocalStorage('rimon')
