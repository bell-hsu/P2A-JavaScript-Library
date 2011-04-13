/*
版本号：1.0
更新计划：
1，新建一个块对象，用来控制实体的样式
更新日志：
*/
var Fullmap = Class.create();
Fullmap.prototype = {
	//嵌入容器
	initialize: function(fullmap, options) {
		this.Fullmap = $$(fullmap);
		this.SetOptions(options);
		//事件对象
		this._fH = Bind(this, this.Hide);
		//容器
		this.container = this.options.container;
		this.floadContainer = this.options.floadContainer;
		//手柄
		this._handleHide = $$(this.options.handleHide) || $$(this.container) || $$(this.floadContainer);
		//flash参数
		this.url = this.options.url;
		this.width = isNaN(this.options.width)? 809 : this.options.width;
		this.height = isNaN(this.options.height)? 522 : this.options.height;
		this.bgColor = this.options.bgColor;
		//位置偏移量
		this.marginLeft = isNaN(this.options.marginLeft)? -405 : this.options.marginLeft;
		this.marginTop = isNaN(this.options.marginTop)? -271 : this.options.marginTop;
		//附加方法
		this.onLoad = this.options.onLoad;
		this.onShow = this.options.onShow;
		this.onHide = this.options.onHide;
		
		this.Load();
		
	},
	//设置默认属性
	SetOptions: function(options) {
		this.options = {
			container:"block",
			floadContainer:"fload_con",
			handleShow:"",
			handleHide:"btnClose",//关闭动作的触发对象
			url:"map.swf",
			width: 809,
			height: 522,
			bgColor:"",
			marginLeft: -405,
			marginTop: -271,
			onLoad: function() {},
			onShow: function() {},
			onHide: function() {}
		};
		Extend(this.options, options || {});
	},
	//加载
	Load: function() {
		var flash = new SWFObject(this.url, "content_flash", this.width, this.height, "9",this.bgColor);
		flash.useExpressInstall('/scripts/expressInstall.swf');
		flash.addParam("allowFullScreen", "true");
		flash.addParam("wmode", "Transparent");
		flash.addParam("menu", "false");
		flash.write(this.Fullmap);
		
		this.onLoad();
	},
	//修正位置
	Repair: function() {
	},
	//显示
	Show: function() {
		$$(this.container) && ($$(this.container).style.display = "block");
		$$(this.floadContainer) && ($$(this.floadContainer).style.display = "block");
		$$(this.Fullmap) && ($$(this.Fullmap).style.display = "block");
		this.onShow();
		addEventHandler(this._handleHide, "click", this._fH);
	},
	//隐藏
	Hide: function() {
		removeEventHandler(this._handleHide, "click", this._fH);
		$$(this.container) && ($$(this.container).style.display = "none");
		$$(this.floadContainer) && ($$(this.floadContainer).style.display = "none");
		$$(this.Fullmap) && ($$(this.Fullmap).style.display = "none");
		this.onHide();
	}
}