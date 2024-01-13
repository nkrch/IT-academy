var str = prompt('Введите строку на русском или английском');
const vowels = 'aieouyAIEOUYауоиэыяюеёАУОИЭЫЯЁЕ';
var vowl = 0;
var vowlForEach = 0;
var vowlFilter=0;

vowl=function basic(strCheck) {
    let vowlIns=0
    for (let i = 0; i < strCheck.length; i++) {
    if (vowels.includes(strCheck[i])) vowlIns++
    }
    return vowlIns;
}

vowlForEach=function forEachFunc(strCheck) {
    let vowlIns=0
    strCheck.split('').forEach(element => {
    if (vowels.includes(element)) vowlIns++;
});
return vowlIns;
}

vowlFilter=function filterFonk(stroks) {
    let vowlDo=stroks.split('').filter(elem=>vowels.includes(elem)).length;
return vowlDo;
}

//reduce

var vowlReduce=function redFunc(stroks) {
    var check=0;
    var viol=stroks.split('').reduce(function(res,elem) {
        if (vowels.includes(elem))
         {  
            check++; return ;
            }
        
        
        
    },0)
    return check;
}

console.log('Basic way from the task n07 (to compare with): '+vowl(str));
console.log('Way for forEach: '+vowlForEach(str));
console.log('Filter way: '+vowlFilter(str));
console.log('Reducer: '+vowlReduce(str))
