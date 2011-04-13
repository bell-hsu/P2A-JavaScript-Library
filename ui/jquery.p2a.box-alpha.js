/*
版本号：1.0
更新计划：
1，新建一个块对象，用来控制实体的样式
更新日志：
*/
var a2aBox = Class.create();
p2aBox.prototype = {
	//
	initialize: function(box, options) {
		
	},
	//设置默认属性
	SetOptions: function(options) {
		this.options = {
		};
		Extend(this.options, options || {});
	},
	//加载
	Load: function() {
		this.onLoad();
	},
	//修正位置
	Repair: function() {
	},
	//显示
	Show: function() {
		this.onShow();
	},
	//隐藏
	Hide: function() {
		this.onHide();
	}
}