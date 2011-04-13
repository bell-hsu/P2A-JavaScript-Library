// JavaScript Document
var P2A = jQuery;
P2A.animation = {};
jQuery.extend(P2A.animation, 
{
	errors: [],		//存储异常数组
	/*	滚动效果
	//Param 'wrapper': 窗口容器的ID
	//Param 'ele': 滚动元素的class
	//Param 'direction': 运动方向
	//Param 'frame': 单次运动距离
	//Param 'time': 间隔时间
	*/
	scrolling: function(wrapper, ele, direction, frame, time) {
		//检测参数的合法性
		if((arguments.length<2) || !$('#'+wrapper) || !$('.'+ele))
			errors.push('jQuery.animation.scrolling方法参数出错!');
		var $wrapper = $('#'+wrapper), $ele = $('.'+ele), w = $ele.css('width'), h = $ele.css('height'), direction = direction || 'left', frame = frame || 1, time = time || 100;
		//复制滚动元素
		$wrapper.append($wrapper.html());
		var $clone = $('.'+ele).eq(1).addClass('clone');
		//设置定时器
		var fn = function() {
			$ele.css(direction, $ele.css(direction).substring(0, $ele.css(direction).length-2) - frame + 'px');
			$clone.css(direction, $clone.css(direction).substring(0, $clone.css(direction).length-2) - frame + 'px');
			if(direction === 'top' || direction === 'bottom') {
				if($ele.css(direction) == '-'+h)
					$ele.css(direction, h);
				if($clone.css(direction) == '-'+h)
					$clone.css(direction, h);
			} else {
				if($ele.css(direction) == '-'+w)
					$ele.css(direction, w);
				if($clone.css(direction) == '-'+w)
					$clone.css(direction, w);
			}
		};
		var timer = window.setInterval(fn, time);
		$wrapper.bind('mouseover', function() { window.clearInterval(timer); });
		$wrapper.bind('mouseout', function() { timer = window.setInterval(fn, time); });
	},
	
	/*	异常回显
	//Param 'ele': 异常显示容器ID
	*/
	error: function(ele) {
		var result = '';
		if($('#'+ele)) {
			while(errors.length) {
				result += errors.pop() + '<br />';
			}
			$('#'+ele).html(result);
		}
	}
});