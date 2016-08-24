var html = document.documentElement;
var windowWidth = html.clientWidth;
html.style.fontSize = windowWidth / 6.4 + 'px';
 
//为canvas缩放，使用640*1136
function pageUtil(selector){
  this.ele = document.querySelectorAll(selector)[0];
  this.scaleNum = document.documentElement.clientWidth/640;
  return this;
}
pageUtil.prototype.response = function(selector){
      this.ele.style.cssText = "-webkit-transform-origin: 0 0 0px; -webkit-transform: scale("+this.scaleNum+");position: absolute;width:640px;height:1136px";
      return this;
}
pageUtil.prototype.rotate = function(){
  this.ele["style"]["cssText"] = "width: "+1136+"px;height: "+640+"px;transform:rotate(90deg) translate(-50%,-50%);"+
  "transform-origin:0 0; position: absolute; top: 50%; left: 50%;"
  return this;
}