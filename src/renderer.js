const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY }).onclick = () => console.log(NOTIFICATION_BODY)
 
document.write("<P>欢迎来到德莱文联盟"+document.getElementById("intro").innerHTML+"</P>")

document.write("<h1>"+document.getElementsByTagName("h1")[0].innerHTML+"</h1>")
document.getElementById("intro").style.color = "blue"
document.getElementById("myBtn").addEventListener("click", myFunction)
function myFunction() {
  alert ("计算完成")
  document.getElementsByTagName("h2")[0].innerHTML = document.getElementsByTagName("h1")[0].innerHTML
}
function displayDate(params) {
  document.getElementById("demo").innerHTML = Date()
}
function mOver(params) {
  params.innerHTML = "#D922221"
  params.style.color = "white"
  params.style.backgroundColor = "blue"
}
function mOut(params) {
  params.innerHTML = "#D94A38"
  params.style.color = "black"
  params.style.backgroundColor = "red"
}
function clickNum(num) {
  res2 = document.querySelector('.result-text2')
    isPoint = num === '.';
    // 数字转为字符串
    result = res2.value.toString();
    // 如果输入小数点并且已经结果中已经有小数点了
    if (result.indexOf('.') !== -1 && isPoint) {
      if (result.indexOf('-+*/') == -1) {
        console.log('没有减号')
        // return;
      } 
    }
    if (result == "0"){
      result = ""
    }
    result = result + num;
    res2.value = result
}
function clickopt(ope) {
  res2 = document.querySelector('.result-text2')
  switch (ope) {
      case '+/-':
          res2.value = result = eval(result + '*-1');
          break;
      case '%':
          res2.value = result = format(eval(res.innerHTML + '/100'),4);
          break;
      default:
          res2.value = result = result + ope
          break;
  }
}
function calc(){
  res2 = document.querySelector('.result-text2');
  res2.value = result = eval(result)
}
function reset() {
  res2 =document.querySelector('.result-text2')
  result = '0'
  res2.value = result
}
function get_value(){
  res2 =document.querySelector('.result-text2')
  // console.log(res2.value)
  result = res2.value
}



