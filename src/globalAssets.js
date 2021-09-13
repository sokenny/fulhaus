export const capitalizeSentence = (words) => {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}

 export const containsObject = (obj, list) => {
    
    for(let o in list){

        if(obj._id === list[o]._id){
            return true
        }

    }

    return false
    
}

export const generateRows = (products)=>{
    
    let rows = []
    let row = []

    for(let p in products){

        if(p % 3 === 0 && p!=0){
            rows.push(row)
            row = []
        }
        row.push(products[p])
                
    }
    rows.push(row)

    return rows;
}