const form = document.querySelector('#myform');
const msg = document.querySelector('#message');
const nameInput = document.querySelector('#first-name');
const emailInput = document.querySelector('#email');
const btn = document.querySelector('.btn');
const users = document.querySelector('#users');

form.addEventListener('submit' , function(event) {
    console.log(event);
    const firstName = nameInput.value
    const email = emailInput.value
    event.preventDefault()

    if(firstName == '' || email == '')
     {
        showErrorMessage('input the missing values!!!');
        return;
     }
     users.innerHTML += `<li class="test">you name is:${firstName} <br> <br> your email is:<a href="mailto:${email}"> ${email}</a></li>`
     nameInput.value = '';
     emailInput.value = '';
   })
    function showErrorMessage(message)
    {
      msg.innerHTML = message
      msg.classList.add('error')
    }
    setTimeout(() => {
      msg.innerHTML = '';
      msg.classList.remove('error')
    }, 10000);