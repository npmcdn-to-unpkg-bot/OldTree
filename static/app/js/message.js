var defaultMessages = [
  "炎熱的夏天午後，一起喝杯茶吧~~ >w<",
  "早安啊！ ^__^",
  "今天的台北很夏威夷唷唷唷",
  "充滿回憶的老樹</br>似乎用聞得也能聞出一些記憶",
  "如果有來生，要做一棵樹，站成永恆。沒有悲歡的姿勢，一半在塵土裡安詳，一半在風裡飛揚",
  "陽光下慎重地開滿了花</br>朵朵都是我前世的盼望",
  "當你走近，請你細聽，</br>顫抖的葉是我等待的热情",
  "路邊一棵榕樹下，是我懷念的地方",
  "而你終於無視地走過</br>在你身後落了一地的</br>朋友啊！那不是花瓣</br>是我凋零的心"
]


var msg = document.getElementById("type");
var client = document.getElementById("example");
//client.innerHTML = defaultMessages[Math.floor((Math.random()*9))];

function sendxhr(value) {
  var xhttp = new XMLHttpRequest();
  var csrftoken = Cookies.get('csrftoken');
  xhttp.open('POST', '/send_message/', true);
  xhttp.setRequestHeader('X-CSRFToken', csrftoken);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send('content=' + value + '&csrfmiddlewaretoken=' + csrftoken);
}

msg.addEventListener("keypress", function(event){
  console.log(event)
    if(event.keyCode == 13){
        //client.innerHTML = msg.value;
        sendxhr(msg.value)
        appendMessage(msg.value)
        msg.value = "";
    }
})

function appendMessage(message) {
  var oldMessage = document.createElement('div');
  oldMessage.innerHTML = message;
  oldMessage.className = 'old-message';
  oldMessage = addOldMessageStyle(oldMessage);
  document.querySelector('.old-messages').appendChild(oldMessage);
}

function setRandomText() {
  // document.getElementById('type').value = defaultMessages[Math.floor((Math.random()*9))];
  appendMessage(defaultMessages[Math.floor((Math.random()*9))]);
}

function addOldMessageStyle(element) {
  var top = String(Math.abs(Math.random()*100 - 40))+"%";
  var left = String(Math.abs(Math.random()*100 - 40))+"%";
  element.style.top = top;
  element.style.left = left;
  element.style.animation = 'movingbox ' + (5 * Math.random() + 2).toString() +
  's ' + (2 * Math.random()).toString() +'s infinite alternate';
  return element;
}

window.onload = function() {
  var oldMessageArray = document.querySelectorAll('.old-message');
  for (var i = 0; i < oldMessageArray.length; i++) {
    var oldMessage = oldMessageArray[i];
    addOldMessageStyle(oldMessage);
  }
}
