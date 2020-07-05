var head1 = document.getElementById('head1');
head1.innerHTML = "00:00:00";
var sec = 0;
var csec = 0;
var min = 0;

var s_sec = "";
var s_csec = "";
var s_min = "";

var a;

var check = false;

function start() {
    if(!check){
    check = true;
    a = setInterval(()=>{
        csec = csec + 1;

        if(csec >= 100)
        {
            sec=sec+1;
            csec = 0;
        }
        if(sec >= 60)
        {
            sec = 0;
            min = min + 1;
        }
        if(min >= 60)
        {
            min=0;
            sec=0;
            csec=0;
        }

        if(csec < 10)
            s_csec = '0' + csec;
        else
            s_csec = csec;
        
        if(sec < 10)
            s_sec = '0' + sec;
        else
            s_sec = sec;

        if(min<10)
            s_min = '0' + min;
        else
            s_min = min;


        head1.innerHTML = `${s_min}:${s_sec}:${s_csec}`;
    },10)
}
}


function pause(){
    clearInterval(a);
    check = false;
}

function stop() {
    clearInterval(a);
    check = false;
    sec = 0;
    min = 0;
    csec = 0;
    head1.innerHTML = "00:00:00";
}