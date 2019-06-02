
console.log("调用js文件");


// 选项卡切换 options



    var tabNav1 = document.getElementsByClassName("nav tabNav1");
    
   var nars1 = tabNav1[0].getElementsByTagName("li");
    var cons1 = document.getElementsByClassName("tabCon1")
  

    var tabNav2= document.getElementsByClassName("nav tabNav2"); 

    var nars2 = tabNav2[0].getElementsByTagName("li");
    var cons2 = document.getElementsByClassName("tabCon2")

    var tabNav3= document.getElementsByClassName("tabNav3");
    var nars3 = tabNav3[0].getElementsByTagName("li");
    var cons3 = document.getElementsByClassName("tabCon3")
  

    var tabNav4= document.getElementsByClassName("tabNav4");
    var nars4 = tabNav4[0].getElementsByTagName("li");
    var cons4 = document.getElementsByClassName("tabCon4")




    fnTab(nars1,cons1);
    fnTab(nars2,cons2);
    fnTab2(nars3,cons3); 
    fnTab2(nars4,cons4); //怎样自动隐藏第三个板块？
 



function fnTab(nars,cons){  

    cons[1].style.display = "none";
   if(nars.lengh!=cons.lengh)
return;


  for(var i = 0;i<nars.length;i++){
    
    nars[i].id = i;
    nars[i].onmouseover = function(){
        for(var j = 0;j<nars.length;j++){
            nars[j].className = nars[j].className.replace(/active/g,"gradient");   
        
            cons[j].style.display = 'none';

        }
        this.className = this.className.replace(/gradient/g,"active");
       
        cons[this.id].style.display = "block";
    }

  }
   

}

function fnTab2(nars,cons){  

    cons[1].style.display = "none";
    cons[2].style.display = "none";
    
    if(nars.lengh!=cons.lengh)
 return;
 
 
   for(var i = 0;i<nars.length;i++){
 
     nars[i].id = i;
     nars[i].onmouseover = function(){
         for(var j = 0;j<nars.length;j++){
             nars[j].className = nars[j].className.replace(/active/g,"gradient");   
            
             cons[j].style.display = 'none';
 
         }
         this.className = this.className.replace(/gradient/g,"active");
        
         cons[this.id].style.display = "block";
     }
 
   }
    
 }
 
 
 // 日历的显示

 var today_info = document.getElementsByClassName("today_info")[0];
 var img = today_info.getElementsByTagName("img")[0];
 var strong = today_info.getElementsByTagName("strong")[0];
 var p = today_info.getElementsByTagName("p")[0];

 var ol= document.getElementsByClassName("calendar")[0].getElementsByTagName("ol")[0];
 var li = ol.getElementsByTagName("li");
 

ol.addEventListener('mouseover',function(e){
  
    var index = e.target.id;
   
    switch(index){
     case "25":{
       today_info.style.display  = "block";
       today_info.style.left = "288px"
       today_info.style.top = "136px"
       img.src = "img/content/today2.gif";
     }
     break;

     case "29":{
       today_info.style.display  = "block"
       today_info.style.left = "150px"
       today_info.style.top = "150px"
       p.innerHTML = "气质美女，陪谁去过明天的情人节？"
       img.src = "img/content/hot10.gif";
     }
     break;

     case "30":{
      today_info.style.display  = "block"
      today_info.style.left = "180px"
      today_info.style.top = "150px"
      p.innerHTML = "帅哥是谁？陪谁去过情人节？"
      img.src = "img/content/hot11.gif";
    }
    break;

   }

})

ol.addEventListener("mouseout",function(e){
  var index = e.target.id;
   
  switch(index){
  case "25":{
     today_info.style.display  = "none"
  }
   break;
   case "29":{
    today_info.style.display  = "none"
  }
  break;

  case "30":{
   today_info.style.display  = "none"

 }
 break;

}
})


//HOt 鼠标提示

function showInfo(){
  console.log("调用函数");
  var xmlhttp;
if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
  {
    var data = JSON.parse(xmlhttp.responseText);
    var hotul = document.getElementsByClassName('hot_area')[0].getElementsByTagName("ul")[0];
    var hotli = hotul.getElementsByTagName("li");

    for(var i = 0; i<hotli.length;i++){

      hotli[i+1].getElementsByTagName("p")[0].innerHTML = data.arr[i];
    
    }

  }
}
xmlhttp.open("GET","https://easy-mock.com/mock/5cee8f5765dd5c3a44db25bc/hot/figure",true);
xmlhttp.send();

}

showInfo()

var ul = document.getElementsByClassName("hot_area")[0].getElementsByTagName("ul")[0];
var hotlist = ul.getElementsByTagName("li");
var area1 = document.getElementsByClassName("area1")[0]
var hotp = area1.getElementsByTagName("p")[0];

ul.addEventListener("mouseover",function(e){
   
   var child = e.target;
   var parent = child.parentNode;

   var goal = parent.getElementsByTagName("p");
    
   goal[0].style.visibility = "visible";
  
   
 
  
})


ul.addEventListener("mouseout",function(e){
  var child = e.target;
  var parent = child.parentNode;
  var goal = parent.getElementsByTagName("p");

  goal[0].style.visibility = "hidden";
  
 })


   // BBS高亮显示  js实现有bug jq简单一些
   $(function (){
   (function (){
		$('.bbs ol li').mouseover(function (){
			$('.bbs ol li').removeClass('active').eq($(this).index()).addClass('active');
		});
	})();

// 自动播放的焦点图  没搞好明白
(function (){
  var oDiv = $('#fade');
  var aUlLi = oDiv.find('ul li');
  var aOlLi = oDiv.find('ol li');
  var oP = oDiv.find('p');
  var arr = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
  var iNow = 0;
  var timer = null;
  
  fnFade();
  
  aOlLi.click(function (){
    iNow = $(this).index();
    fnFade();
  });
  oDiv.hover(function (){ clearInterval(timer); }, autoPlay);
  
  function autoPlay() {
    timer = setInterval(function () {
      iNow++;
      iNow%=arr.length;
      fnFade();
    }, 2000);
  }
  autoPlay();
  
  function fnFade() {
    aUlLi.each(function (i){
      if ( i != iNow ) {
        aUlLi.eq(i).fadeOut().css('zIndex', 1);
        aOlLi.eq(i).removeClass('active');

      } else {
        aUlLi.eq(i).fadeIn().css('zIndex', 2);
        aOlLi.eq(i).addClass('active');
      }
    });
    oP.text(arr[iNow]);
  }
})();
   });