const noOfItem = document.querySelector('h4');
const items = document.querySelector('i');
const values = document.getElementById('value');
const price = document.getElementById('prices')
const increment = document.getElementById('plus')
const decrement = document.getElementById('minus')



const sum = 1;


const inital = `$449.99`

increment.addEventListener('click', function (){
  
        sum = sum+1;
        console.log(sum);
        
      values.textContent = sum;

    
})


