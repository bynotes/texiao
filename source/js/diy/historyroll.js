/* 那年今日侧边栏2号JS */

 $(function() {
 var $this = $("#history-news");
 var scrollTimer;
 $this.hover(function() {
 clearInterval(scrollTimer);
 }, function() {
 scrollTimer = setInterval(function() {
 scrollNews($this);
 }, 4000);
 }).trigger("mouseleave");

function scrollNews(obj) {
 var $self = obj.find("ul");
 var lineHeight = $self.find("li:first").height();
 $self.animate({
 "marginTop": -lineHeight + "px"
 }, 200, function() {
 $self.css({
 marginTop: 10
 }).find("li:first").appendTo($self);
 })
 }
 })