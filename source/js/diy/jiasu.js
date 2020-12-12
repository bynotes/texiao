/* 文章图片自动加速
var name = "cnyist";
var repository = "blog";
if(document.domain != 'localhost'){
	if(document.getElementById("post")){
		for (var key in document.getElementById("article-container").getElementsByTagName('img')){
  			if (isNaN(key)){
    			break;
  			}
    		document.getElementById("article-container").getElementsByTagName('img')[key].src = document.getElementById("article-container").getElementsByTagName('img')[key].src.replace(document.domain,"cdn.jsdelivr.net/gh/" + bynotes + "/" + bynotes.github.io)
		}
    }
}