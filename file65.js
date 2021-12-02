//splice method
//start , delete , insert
const Arr=['item1','item2','item3','item4'];
//delete
Arr.splice(1 , 1);//first se start aur ek element delete  (first index , num. of items to delete ,  insert)
console.log(Arr);
//insert
Arr.splice(1 , 0 , 'inserted item');
console.log(Arr);
//insert and delete together
Arr.splice(1 , 2 , "inserted-item-1","inserted-item-2");
