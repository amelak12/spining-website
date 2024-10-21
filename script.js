document.getElementById('spinbutton')
.addEventListener('clickss',function()
{
    const wheel=document.getElementById('wheel');
    const randomdegree=Math.floor(Math.random()*(3600-1800+1)+1800);
    wheel.styles.transform=rotate(${randomdegree}deg);
});