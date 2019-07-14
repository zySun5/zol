// 点击发表评论按钮的操作
var btn = document.querySelector('.submit-box .btn');
var ul = document.querySelector('.comment-list-wrap ul');
var area = document.querySelector('.comment-contop textarea');
btn.onclick = function() {
  // 点击之后会生成新的li，先创建添加li
  var li = document.createElement('li');
  ul.insertBefore(li, ul.firstElementChild);
  // .info
  var info = document.createElement('div');
  info.className = 'info';
  li.appendChild(info);
  // .info内的img，span，p
  var img = document.createElement('img');
  info.appendChild(img);
  img.src = '../img/14.gif';
  var span = document.createElement('span');
  info.appendChild(span);
  span.innerText = 'Kedah';
  var p = document.createElement('p');
  info.appendChild(p);
  p.innerText = '发布于：' + getTime();
  // .content
  var con = document.createElement('div');
  con.className = 'content';
  li.appendChild(con);
  con.innerText = area.value;
  area.value = '';
}

function getTime() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = month < 10 ? '0' + month : month;
  var day = date.getDate();
  day = day < 10 ? '0' + day : day;

  var hours = date.getHours();
  hours = hours < 10 ? '0' + hours : hours;

  var minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;

  var seconds = date.getSeconds();
  seconds = seconds < 10 ? '0' + seconds : seconds;


  var str = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  return str;
};