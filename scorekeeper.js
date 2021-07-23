const btns = document.querySelectorAll('button');
const sc2 = document.querySelectorAll('span')[1];
const sc1 = document.querySelector('span');
const select=document.querySelector('#pts');

let winingscore = 5;
let wins=0;

select.addEventListener('change',function(){
    if(winingscore<parseInt(this.value))
    {
        wins=0;
        sc1.style.color='white';
        sc2.style.color='white';
        btns[0].disabled=false;
        btns[1].disabled=false;
    }
    else
    {
        reset();
    }
    winingscore=parseInt(this.value);
})

btns[0].addEventListener('click', function () {
    let score = parseInt(sc1.innerText);
    if (!wins) {
        score = score + 1;
        if (score == winingscore) {
            sc1.style.color = 'green';
            sc2.style.color = 'red';
            wins=1;
            btns[0].disabled=true;
            btns[1].disabled=true;
        }
        sc1.innerText = `${score}`;
    }
});
btns[1].addEventListener('click', function () {
    let score = parseInt(sc2.innerText);
    if (!wins) {
        score = score + 1;
        sc2.innerText = `${score}`;
        if (score == winingscore) {
            sc1.style.color = 'red';
            sc2.style.color = 'green';
            wins=1;
            btns[0].disabled=true;
            btns[1].disabled=true;
        }
    }
});
function reset()
{
        sc1.innerText = '0';
        sc2.innerText = '0';
        wins=0;
        sc1.style.color='white';
        sc2.style.color='white';
        btns[0].disabled=false;
        btns[1].disabled=false;

}
btns[2].addEventListener('click',reset)