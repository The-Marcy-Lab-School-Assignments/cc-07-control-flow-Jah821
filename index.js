//1
function sumOfFourAndSix(){
  let sum = 0
  for (let i = 0; i < 1000; i++){
      if (i % 4 === 0 && i % 6 === 0){
          sum += i
        
      }
  }
  return sum
}
        //console.log(sumOfFourAndSix())
//2
function oddAndEvenInFifteen(){
  for (let i = 0; i <= 15; i++){
        if(i % 2 === 0){
            console.log(`$[i] is even`) 
        }else{
            return console.log(`$[i] is odd`) 
    }
  }
}

//3
function assignGrade(grade){
if (grade > 90){
//if (grade = 91 || grade >= 100){
    return "A" 
} else if (grade > 80){
    return "B"
 }else if (grade > 70){
     return "C"
 }else if (grade > 64){
     return "D"
 }else{
     return "F"
 }

console.log(assignGrade(82))




