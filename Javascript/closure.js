//it is a special function and it is remember the environment in which they created
function outer(){
    let cnt=10;
    return function (){
        cnt++;
        return cnt;
    }
}
let incre=outer();
console.log(incre());//11
console.log(incre());//12
console.log(incre());//13