window.onload=function(){
  let message =alert('صلى على النبي')
}
// Array of word
let wordsEasy=[
  'pay',
  'java',
  'twist',
  'music',
  'act',
  'arm',
  'grip',
  'grasp',
  'run',
  'noun',
  'lock',
  'verb',
  'truth',
  'set',
  ]
  let normalWord=[
    'paython',
    'mahmoud',
    'marouf',
    'gestation',
    'children',
    'done',
    'confirm',
    'testing',
    'etisalat',
    'orange',
    'tricks',
    'posts',
    'speed'
    ]
    let hardWord=[
      'development',
      'conditional',
      'anticipated',
      'prospective',
      'development',
      'enlargement',
      'highlight',
      'corresponding'
      ]
 let words;

 // make levels
 let lvls={
   'Easy':5,
   'Normal':3,
   'Hard':2
 }
 
 // get slectors
let start=document.querySelector('.start');
let lvlNameSpan=document.querySelector('.message .lvl');

let secondsSpan=document.querySelector('.message .seconds');

let theWord=document.querySelector('.the-word');

let upComingWord=document.querySelector('.upcoming-words');

let input=document.querySelector('.input');

let timeLeft=document.querySelector('.time span');

let scoreGotSpan=document.querySelector('.score .got');

let scoreTotalSpan=document.querySelector('.score .total');

let finishMessage=document.querySelector('.finish');

let instructions=document.getElementById('instructions');
 // select lvl
 let selectlvl=document.getElementById('select')
 function selectarr(){
 if (selectlvl.value==='Easy') {
  words=wordsEasy;
}
if (selectlvl.value==='Normal') {
  words=normalWord;
}
if (selectlvl.value==='Hard') {
  words=hardWord;
 }
}
 selectarr();
 console.log(selectlvl.value)
 
 
 let defulteNamelvl=selectlvl.value;
 let defultesecondslvl=lvls[defulteNamelvl];
   
 select();
 function select(){ 
   defultesecondslvl=lvls[defulteNamelvl]
  lvlNameSpan.innerHTML=defulteNamelvl;
secondsSpan.innerHTML=defultesecondslvl;

timeLeft.innerHTML=defultesecondslvl;
 scoreTotalSpan.innerHTML=words.length;
 selectarr();
 }
 
 selectlvl.oninput=function(e){
  defulteNamelvl=this.value;
 select();
 }

 input.onpaste=function(){
   return false;
 }

start.onclick=function(){
  this.remove();
  input.focus();
  // generator function
  genwords();
}
function genwords(){
  let randomWord=words[Math.floor(Math.random()*words.length)];
  let indexWord=words.indexOf(randomWord);
  words.splice(indexWord,1);
  //empty upcomingword
  upComingWord.innerHTML='';
  //show word 
  theWord.innerHTML=randomWord;
  for (var i = 0; i < words.length; i++) {
    let div=document.createElement('div');
    div.classList.add('upword')
    let txt=document.createTextNode(words[i]);
    div.appendChild(txt);
    upComingWord.appendChild(div);
  }
  play();
}
function play(){
  let timer=setInterval(function(){
 timeLeft.innerHTML=+(timeLeft.innerHTML.toString())-1
 
  if (parseInt(timeLeft.innerHTML)===0) {
    
    clearInterval(timer);

    if (input.value.toLowerCase()===theWord.innerHTML.toLowerCase()) {
      
     scoreGotSpan.innerHTML++;
     
      timeLeft.innerHTML=defultesecondslvl;
      
      input.value='';
      if (words.length>0) {
        genwords();
      }else{
        let windiv=document.createElement('div');
     windiv.classList.add('good')
     let wintxt=document.createTextNode('Congratulation') ;
     windiv.append(wintxt);
     finishMessage.append(windiv);
     let restartbut=document.createElement('span');
   restartbut.classList.add('restart');
  let buttext=document.createTextNode('Start Again');
  restartbut.append(buttext);
  finishMessage.append(restartbut)
  restartbut.onclick=function(){
    document.location.reload(true)
  }
     input.remove();
      }
    }else{
      let faildiv=document.createElement('div');
     let textfail= document.createTextNode('Game over');
     faildiv.classList.add('bad')
   faildiv.append(textfail);
   finishMessage.append(faildiv);
   let restartbut=document.createElement('span');
   restartbut.classList.add('restart');
  let buttext=document.createTextNode('Restart');
  restartbut.append(buttext);
  finishMessage.append(restartbut)
  restartbut.onclick=function(){
    document.location.reload(true)
  }
    }
  }
  },1000)
}
