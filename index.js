var iterativeLog= [1, 2, 3]

iterativeLog.forEach((element,index,array)=>{
  console.log(`${index}:${element}`)
})

function iterate(callback){
  var a =[1,2,3,4,5]
  a.forEach(callback)
}
function doToArray(array,callback){
  array.forEach(callback);
}
