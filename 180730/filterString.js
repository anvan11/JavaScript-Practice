
// In this kata you will create a function that takes a list of non-negative integers 
// and strings and returns a new list with the strings filtered out.


function filters_list(l){
  var result =[];
  for(var i = 0; i< l.length; i++){
    if(typeof l[i] !== "String"){
      result.push(l[i]);
    }
  }
  return result;
}

// another way
// function filters_list(l){
// return l.filter(function(item)){
//   return typeof item !== 'string';
// });
// }