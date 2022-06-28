var lvl =1,j=0;
var cflag = 0,cf=0;
var a=[];
var scre = [];
var len;
var z = 0 , cscr=0;
var game = 1;
function show()
{   
    if(game == 0)
    {
        window.location.reload();
    }
    else{
        if (cflag==0 && game == 1)
        {
            game =0;
            j=0;
            t=0;
            for(i=lvl-1;i<lvl;i++)
            {            
                a[i]= Math.floor(Math.random()*8);     
            }
            var elem = document.getElementById("mem");
            (function loop() {
                if(a[t]==0)
                {
                    elem.style.color="Red";
                }
                if(a[t]==1)
                {
                    elem.style.color="darksalmon";
                }
                if(a[t]==2)
                {
                    elem.style.color="green";
                }
                if(a[t]==3)
                {
                    elem.style.color="blue";
                }
                if(a[t]==4)
                {
                    elem.style.color="yellow";
                }
                if(a[t]==5)
                {
                    elem.style.color="aqua";
                }
                if(a[t]==6)
                {
                    elem.style.color="pink";
                }
                if(a[t]==7)
                {
                    elem.style.color="orange";
                }
                elem.value = a[t];
                if (++t < a.length) {
                    setTimeout(loop, 1000);
                }
            })();
            if(cf == 0)
            {
                setTimeout(function rest(){
                    elem.style.color="white";
                    elem.value="your turn";
                },lvl*1000);
            }
            else
            {
                document.getElementById('mem').value="Start New game";
                cf=0;
                game = 1;
            }
            document.getElementById('lvl').value='Level : '+lvl;
            lvl+=1;
            len = a.length;
        }
        else{
            lvl=0,a=[],i=0,t=0,cflag=0;
            cf = 1
            show();
        }
    }   
}
function switcher(id) {
    switch(id){
        case 'one':
            j+=1;
            len-=1;
            check(0,j);
            break;
        case 'two':
            j+=1;
            len-=1;
            check(1,j);
            break;
        case 'three':
            j+=1;
            len-=1;
            check(2,j);
            break;
        case 'four':
            j+=1;
            len-=1;
            check(3,j);
            break;
        case 'five':
            j+=1;
            len-=1;
            check(4,j);
            break;
        case 'six':
            j+=1;
            len-=1;
            check(5,j);
            break;
        case 'seven':
            j+=1;
            len-=1;
            check(6,j);
            break;
        case 'eight':
            j+=1;
            len-=1;
            check(7,j);
            break;
        }
    }
function check(x,y){
    if(a[y-1] == x){
        if(y==a.length)
        {   
            game=1;
            show();  
        }
    }
    else{
        document.getElementById('mem').value="Wrong!! Score : " + (lvl-2);
        document.getElementById('stbtn').value="New Game"
        scre[z] = lvl-2;
        document.getElementById('hscre').value="High score : " + Math.max(...scre);
        console.log(scre,z)
        z++;
        cflag=1;
        game=1;
    }
}