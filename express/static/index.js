setInterval(()=>{
    let date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();
    let hour_rotation=(30*hour)+(minute/2)+(second/120);
    let minute_rotation=(6*minute)+(second/10);
    let second_rotation=(6*second);

    let hour_hand=document.getElementById('hour');
    hour_hand.style.transform=`rotate(${hour_rotation}deg)`;
    
    let minute_hand=document.getElementById('minute');
    minute_hand.style.transform=`rotate(${minute_rotation}deg)`;
    
    let second_hand=document.getElementById('second');
    second_hand.style.transform=`rotate(${second_rotation}deg)`;
},1000)