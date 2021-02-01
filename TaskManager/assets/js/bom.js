/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/


// Define UI Variables  here 

let str;
let badge;
let collectItem;
let collect;


// Display the BOM Information on the innerHTML of the elements
const parents = document.querySelectorAll(".collection");
for (let index = 0; index < parents.length; index++) {
    collect = parents[index];
    if (collect == parents[0]) {
        collectItem = collect.children;
        for (let index = 0; index < collectItem.length; index++) {
            str = collectItem[index].text;
            str = str.slice(0, str.indexOf("("));
            str = str.charAt(0).toLowerCase() + str.slice(1);
            badge = collectItem[index].querySelector(".badge");
            badge.innerHTML = eval(`location.${str}`);

        }
    }
    else if (collect == parents[1]) {
        collectItem = collect.children;
        for (let index = 0; index < collectItem.length; index++) {
            str = collectItem[index].text;
            
        str = str.slice(0, str.indexOf("("));
            str = str.charAt(0).toLowerCase() + str.slice(1);
            badge = collectItem[index].querySelector(".badge");
            badge.innerHTML = eval(`navigator.${str}`);

        }
    }
    else if (collect == parents[2]) {
        collectItem = collect.children;
        for (let index = 0; index < collectItem.length; index++) {
            str = collectItem[index].text;
            
        str = str.slice(0, str.indexOf("("));
            str = str.charAt(0).toLowerCase() + str.slice(1);
            badge = collectItem[index].querySelector(".badge");
            badge.innerHTML = eval(`screen.${str}`);

        }
    }
    else if (collect == parents[3]) {
        collectItem = collect.children;
        for (let index = 0; index < collectItem.length; index++) {
            str = collectItem[index].text;
            
        str = str.slice(0, str.indexOf("("));
            str = str.charAt(0).toLowerCase() + str.slice(1);
            badge = collectItem[index].querySelector(".badge");
            badge.innerHTML = eval(`history.${str}`);

        }
    }
}