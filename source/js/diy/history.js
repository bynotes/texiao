/* 那年今日侧边栏JS */

var myDate = new Date();
var myMonth = myDate.getMonth() + 1
if (myMonth < 10){
   getMonth = "0" + String(myMonth);}
    else {
   getMonth = String(myMonth);}
var getDate = String(myDate.getDate());
if (getDate < 10){
   getDate = "0" + String(getDate);}
    else {
   getDate = String(getDate);}
var getMonthDate = "S" + getMonth  + getDate;

var geturl = "/history/json/" + getMonth + ".json"
    $(function(){
        $.ajax({
            //请求方式
            type:"GET",
            //文件位置
            url:geturl,
            //返回数据格式为json,也可以是其他格式如
            dataType: "json",
            //请求成功后要执行的函数，拼接html
            success: function(data){

                var str='<ul style="list-style: none;padding-inline-start: 0px;">';
                $.each(data[getMonthDate],function(i,n){
                    str+='<li style="list-style: none;height:100px;">' ;
                    str+='<p style="color: #858585;Font-style:italic;font-weight:lighter;float:left;width:100%;font-size: 14px;margin:0px; padding:0px;display:inline-block">';
                    str+='<i >A.D.</i>' +n.year + '</p>';
                    str+='<p style="width:100%;float:left;margin:0px; padding:0px;display:inline-block" >';
                    str+=n.title + '<i style="Font-style:normal;">。</i>';
                    str+='</p>' + '</li>';
                });
                str+='</ul>';
                $("#history-card").append(str);
            }
        });
    });