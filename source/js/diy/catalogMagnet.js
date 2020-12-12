const catalogMagnet = new Vue({
	el:'#catalogMagnet',
	data:{
		message:'你好！欢迎访问我的主页zfe.space!',
		link: [],
		postnum:[],
		//这里是磁贴背景图片
		img:[
			"https://cdn.jsdelivr.net/gh/bynotes/bynotes.github.io/img/bg/liuyan.png",
			"https://cdn.jsdelivr.net/gh/bynotes/bynotes.github.io/img/bg/post-bg/default_cover-7.jpg",
			"https://cdn.jsdelivr.net/gh/bynotes/bynotes.github.io/img/bg/post-bg/default_cover-10.jpg",
			"https://cdn.jsdelivr.net/gh/bynotes/bynotes.github.io/img/bg/post-bg/default_cover-2.jpg",
			"https://cdn.jsdelivr.net/gh/bynotes/bynotes.github.io/img/bg/post-bg/default_cover-12.jpg",
			"https://cdn.jsdelivr.net/gh/bynotes/bynotes.github.io/img/bg/post-bg/default_cover-11.jpg",
			"https://cdn.jsdelivr.net/gh/bynotes/bynotes.github.io/img/bg/post-bg/default_cover-6.jpg",
			"https://cdn.jsdelivr.net/gh/bynotes/bynotes.github.io/img/bg/post-bg/default_cover-5.jpg",
		],
		//这里是磁贴描述信息
		describe:[
			"生活中的一点小顿悟",
			"超实用的小知识",
			"吾人周公梦魇录",
			"记录生活的小精彩",
			"周边通讯电子设备",
			"博客美化网页教程整理",
			"一些网络资源共享",
			"电脑和软件方面教程",
		],
		//这里是磁贴的文字颜色
		figLetColor: {color:'white'},
		//这里是磁贴的文字遮罩
		figLetimg: {backgroundImage: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.4) 25%,rgba(16,16,16,0) 100%)'},
		//这里是当磁贴图片为透明背景png时默认展示的背景颜色
		figbackColor: {background:'#000000 URL()'},
		//这里是当磁贴图片为透明背景png时默认展示的凹凸效果
		figShadow: {boxShadow: 'inset 3px 3px 18px 0px rgba(50,50,50, 0.4)'},
	},

})

catalogMagnet.link = $(".categoryMagnetitem").children().children().children("a");
catalogMagnet.postnum = $(".categoryMagnetitem").children().children().children("span");
let linecolor = catalogMagnet.figLetColor.color
$("<style type='text/css' id='dynamic-after' />").appendTo("head");
$("#dynamic-after").text(".magnetname:after{background:" + linecolor + "!important}");