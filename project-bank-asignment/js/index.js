document.getElementById('login-btn').addEventListener('click', function(){
    const number = document.getElementById('accountno').value;
    const password = document.getElementById('password').value;

    // Condition
    if(number === '5461' && password ==='tesker'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid Account Number or Password');
    }
})