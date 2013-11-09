var Nuit_modle_window = new Class({
	initialize			:	function(	options	){
		this.options = options;
		this.create()
		$$('select').each(function(item,index){
			item.setStyle(	'display',	'none');
		});
	},
	create:function(){

		this.create_mask();
	},
	create_mask			:	function(){
		var dom		=	[];
		if(	Browser.Engine.trident ){
			dom	=	window;
		}else{
			dom	=	document.body;
		}
		var size	=	dom.getScrollSize();
		//console.log(	size	);
		var self		=	this;
		self.mask_div = new Element(	'div',	{	'class'		:	self.options.mask_classname,
													'styles'	:	{	'top'		:	'0px',
																		'left'		:	'0px',
																		'width'		:	size.x,
																		'height'	:	size.y,
																		'position'	:	'absolute',
																		'z-index'	:	'10001',
																		'opacity'	:	0
																			},
															'html'		:	''
													});
		self.mask_div.inject(	document.body	);
		var highlight = new Fx.Morph(	self.mask_div, {	'duration'	:	500,
															'link'		:	'cancel',
														'transition'	:	'quad:out'
																		});
		highlight.addEvent(	'complete',function(){
			self.create_center_div();
		});
		highlight.start(	{	'backgroundColor': ['#FFF', '#000'],
								'opacity': [0, 0.5]
							});
	},
	create_center_div	:	function(){
		var dom		=	[];
		if(	Browser.Engine.trident ){
			dom	=	window;
		}else{
			dom	=	document.body;
		}
		var self		=	this;
		var size		=	dom.getScrollSize();
		var left		=	(	size.x	-	this.options.width	)	/	2;
		var top			=	150;
		var scroll = dom.getScroll();
		//console.log(scroll);
		var scroll_y	=	scroll.y;
		if(	scroll_y	==	0	){
			top	=	100;
		}else if(	scroll_y	>	0){
			if(	this.options.top	){
				top	=	scroll_y	+	 dom.getSize().y/2-this.options.top	+	100;
				//console.log(	top	);
			}else{

				top	=	scroll_y	+	 dom.getSize().y/2-300	+	100;
				//console.log(	top	);
			}
		}else{

		}
		//console.log(	window.getScroll()	);
		this.center_div = new Element(	'div',	{	'class'		:	self.options.center_div_classname,
																							'styles'	:	{	'top'		:	-1000,
																														'left'		:	left,
																														'width'		:	self.options.width,
																														'height'	:	self.options.height,
																														'position'	:	'absolute',
																														//'background':	'#FFFFFF',
																														'z-index'	:	'10002',
																														'overflow'	:	'hidden'
																													},
																							'html'		:	''
																						});
		//console.debug(	this.center_div	);
		this.center_div.inject(	document.body	);
		this.center_div.clicked	=	'0';
		var highlight = new Fx.Morph(	self.center_div, {	duration	:	500,
															link		:	'cancel',
															transition	:	'sine:out'
																		});
		highlight.addEvent(	'complete',function(){
			self.create_complete();
		});
		highlight.start(	{	'top': [	-1000,top	],
								'opacity': [	0, 1	]
							});

	},
	hidden				:	function(){
		this.hidden_mask();
		this.hidden_center_div();
		$$('select').each(function(item,index){
			item.setStyle(	'display',	'');
		});

	},
	hidden_mask			:	function(){
		var self =	this;
		var highlight = new Fx.Morph(	self.mask_div, {	duration	:	1500,
																										link		:	'cancel',
																										transition	:	'quad:out'
																								});
		highlight.addEvent(	'complete',function(){
			self.mask_div.destroy();
		});
		highlight.start(	{	backgroundColor: [	'#808080', '#FFFFFF'	],
								opacity: [	0.5, 0	]
							});

	},
	hidden_center_div	:	function(){
		var self =	this;
		var highlight = new Fx.Morph(	self.center_div, {	duration	:	1500,
															link		:	'cancel',
															transition	:	'quad:out'
							});
		highlight.addEvent(	'complete',function(){
			self.center_div.destroy();
		});
		highlight.start(	{	'top': [	self.center_div.getStyle(	'top'	).toInt(),-1000	],
								'opacity': [	0.5, 0	]
							});

	},
	create_complete		:	function(){},
	center_div_resize	:	function(){
		var self			=	this;
		var childrens		=	this.center_div.getChildren();
		var max_x			=	700;
		var max_y			=	600;
		childrens.each(	function(	item,	index	){
			//console.log(	item	);
			if(	item.getSize().x	>	max_x	){
				max_x	=	item.getSize().x;
			}
			if(	item.getSize().y	>	max_y	){
				max_y	=	item.getSize().y;
			}
		});

		var center_div_size		=	this.center_div.getSize();
		var resizer				=	new Fx.Morph(	self.center_div, {	'duration'	:	500,
																		'link'		:	'cancel',
																		'transition'	:	'quad:out'
									});
		var pos	=	this.center_div.getPosition();

		resizer.addEvent(	'complete',function(){
			self.center_div_resize_complete();
		});

		resizer.start(	{	'width'		:	[	center_div_size.x,	max_x	],
							'height'	:	[	center_div_size.y,	max_y	],
							'left'		:	[	pos.x,	pos.x-(	max_x	-	center_div_size.x	)/2	]
					});

	},
	center_div_resize_complete	:	function(){}
});
