/*
�汾�ţ�1.0
���¼ƻ���
1���½�һ���������������ʵ�����ʽ
������־��
*/
var a2aBox = Class.create();
p2aBox.prototype = {
	//
	initialize: function(box, options) {
		
	},
	//����Ĭ������
	SetOptions: function(options) {
		this.options = {
		};
		Extend(this.options, options || {});
	},
	//����
	Load: function() {
		this.onLoad();
	},
	//����λ��
	Repair: function() {
	},
	//��ʾ
	Show: function() {
		this.onShow();
	},
	//����
	Hide: function() {
		this.onHide();
	}
}