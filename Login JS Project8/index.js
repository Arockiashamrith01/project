document.getElementById('submit').addEventListener('click',function(ele)
{
    ele.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const message = document.getElementById('result');
    if(user==='student'&& pass==='stu@123')
    {
        message.textContent ='login successful'
        message.className='success'
    }
    else{
        message.textContent='*invalid'
        message.className='failed'
    }
})