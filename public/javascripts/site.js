function create_menu(){
	var menus	=	$$('#main_menus .menu');
	var sub_menus	=	$$('.sub_menu');
	//console.log(	menus	);
	//console.log(	sub_menus	);
	menus.each(	function(	item,	index	){
		item.addEvents(	{	'mouseenter'	:	function(e){
		//alert(sub_menus[index]);
		var pos	=	item.getPosition();
		sub_menus[index].setStyles(	{	'display':	'block'
										//'top':pos.x,
										//'left':pos.y
									}	);
		},
		'mouseleave'	:	function(){
			sub_menus[index].setStyle('display',	'none'	);
		}
		});
	});
}
function show_answer(	_id,	_height	){
	var fx = new Fx.Morph(_id);
	fx.start({
		'opacity':[0,1],
		'height':[0,_height]
	});
}
function show_answer1(	_id	){
	$(_id).setStyles(	{	'overflow':	'auto',
											'height':'auto'
										}	);
}
function hidden_answer(	_id,	_height	){
	var fx = new Fx.Morph(_id);
	fx.start({
		'opacity':[1,0],
		'height':[_height,0]
	});
}
window.addEvent('load',	function(){
	create_menu();
});
function check_skey(	obj	){
obj.value	=	'';
}
function uncheck_skey(	obj	){
	if(obj.value==""){
		obj.value	=	'站内搜索';
	}
}