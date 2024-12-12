let counter = 0;
let val = document.querySelector('.textfield').value;


let reaction = document.querySelectorAll(".other")[counter];
console.log(reaction);
reaction.innerHTML = val;

counter++;
});

var form = document.getElementById("kutform");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
