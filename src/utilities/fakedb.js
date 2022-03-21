// use localStorage to manage cart data
const addToDb = (id) => {
    const quantity = localStorage.getItem(id)
    if(quantity){
        console.log('Already exists');
        const newQuantity =  parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }else{
        console.log('new item');
        localStorage.setItem(id, 1);
    }
}
export{addToDb};