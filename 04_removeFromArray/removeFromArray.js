const removeFromArray = function(array, ...toBeRemoved) {  


    /* loopa genom toBeRemoved och för varje värde:
        sök i array efter korrekt index och splajsa det. */

    let index = 0;
    for (let element of toBeRemoved) {      
        while (array.includes(element)) {
            index = array.indexOf(element);
            array.splice(index, 1);
        }           
    }
    return array; 
};





// Do not edit below this line
module.exports = removeFromArray;







