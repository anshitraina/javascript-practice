const form= document.querySelector('form')
// This usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e){
    e.preventDefault()

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')

   if (height==='' || height<0 || isNaN(height)) {
    results.innerHTML=`Please enter a valid height ${height}`;
   }
   if (weight==='' || weight<0 || isNaN(weight)) {
    results.innerHTML=`Please enter a valid weight ${weight}`;
   }
   else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML=`${bmi}`
    if (bmi<18.6) {
        results.innerHTML+="<br>You are under weight" 
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
        results.innerHTML += "<br>Your weight is in the normal range.";
    }
    if (bmi>24.9) {
        results.innerHTML+="<br>You are Over weight" 
    }
   }
})