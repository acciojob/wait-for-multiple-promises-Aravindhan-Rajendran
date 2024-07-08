function randomtime(){
	return Math.floor(Math.random()*3000)+1000;
}
const Promise1 = new Promise(function(resolve, reject){
	let time=randomtime();
	setTimeout(()=>{resolve(time),time});
});
const Promise2 = new Promise(function(resolve, reject){
	setTimeout(()=>{resolve(time),time});
});
const Promise3 = new Promise(function(resolve, reject){
	setTimeout(()=>{resolve(time),time});
});

Promise.all([Promise1,Promise2,Promise3]).then(total => {console.log(total)})