const Promise1 = new Promise(function(resolve, reject){
	setTimeout(()=>{resolve('Promise 1 resolved'),2000});
});
const Promise2 = new Promise(function(resolve, reject){
	setTimeout(()=>{resolve('Promise 2 resolved'),1000});
});
const Promise3 = new Promise(function(resolve, reject){
	setTimeout(()=>{resolve('Promise 3 resolved'),3000});
});

Promise.all([Promise1,Promise2,Promise3]).then(total => {console.log(total)})