let s = "man";
function firstUniqueChar(s) {
    let obj = {};
    for(let i=0;i<s.length;i++){
        let str = s[i];
        if(obj[str] == undefined){
            obj[str] = 1;
        } else {
            obj[str]++
        }
    }
    for(let key in obj){
        if(obj[key] == 1){
            return key
        }   
    }
}

function getIndex(s){
    let char = firstUniqueChar(s);
    console.log(s.indexOf(char))
}
getIndex(s)
