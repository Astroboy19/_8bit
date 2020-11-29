$(()=>{
    // declar var;
    var score,time,level,target;
    // declar elments.
    var elScore = $("#score");
    var elTimer = $("#timer");
    var elLevel = $("#level");
    var elTarget = $("#target");

    var bit = {
        "0":"1110111",
        "1":["0100100","0010010"],
        "2":"1011101",
        "3":"1011011",
        "4":"0111010",
        "5":"1101011",
        "6":"1101111",
        "7":"1010010",
        "8":"1111111",
        "9":"1111011"


    }; 
    //start
    function start(){
        init();
        update();
    }
    //init
    function init(){
        //init var
        score = 0;
        level = 0;
        time = 60000;
        target = 0;
        // init elements
        elScore.text(score);
        elTimer.text(60);
        elLevel.text(level);
        elTarget.text(target);


    }
    //replay
    function replay(){}
    // update
    function update(){
        setScore();
        setTimer();
        setLevel();
    }
    // setTimer
    function setTimer(){}
    // setScore
    function setScore(){}
    // setLevel
    function setLevel(){}
    // get bit
    function getBit(){
        let str = "";
        let listL = ["a","b","c","d","e","f","g"];
        let id = "#t_";
        for(let i=0 ; i < listL.length; i++){
            let uid = id+listL[i];
            str += $(`${uid} .bit h3`).text(); 
        }


        return str;

    }
    // set bit
    function setBit(e){
        if($(this).hasClass("_1") || e.keyCode == 70){
            let listL = ["a","b","c","d","e","f","g"];
            let id = "#t_";
            for(let i=0 ; i < listL.length; i++){
                let uid = id+listL[i];
                let bit = $(`${uid} .bit h3`).text();
                if(bit != ""){
                    continue;
                }
                else{
                    $(`${uid} .bit h3`).text("1");
                    powerOnLamp(uid);
                    break;
                } 
            }

        }
        else if($(this).hasClass("_0") || e.keyCode == 74){
            let listL = ["a","b","c","d","e","f","g"];
            let id = "#t_";
            for(let i=0 ; i < listL.length; i++){
                let uid = id+listL[i];
                let bit = $(`${uid} .bit h3`).text();
                if(bit != ""){
                    continue;
                }
                else{
                    $(`${uid} .bit h3`).text("0");
                    // call fun
                    break;
                } 
            }
            
        }

    }

    // power on the lamp;
    function powerOnLamp(uid){
        let lamp = $(`${uid} .letter h3`).text();
        $(`#${lamp.toLowerCase()}`).removeClass("off");
        $(`#${lamp.toLowerCase()}`).addClass("on");
    }
    // listener bit
    $(".cnt").on("click",setBit);
    // listen to key f=70 j=74
    $("body").on("keydown",setBit);
    // run the game;
    start();










});