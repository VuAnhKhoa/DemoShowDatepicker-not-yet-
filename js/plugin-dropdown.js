(function($) {
    "use strict";
    function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
    var Datepicker = function(element, options){
        this.element = $(element);
        this.isInput = this.element.is('input');
        this.picker = $(DemoDP.template);
        this.picker.addClass('datepicker-dropdown dropdown-menu');
        this.showMode();
        if (this.isInline){
			this.show();    
		}
    };
    Datepicker.prototype = {
        show: function(){
			if (!this.isInline)
				this.picker.appendTo('body');
			this.picker.show();
			this.place();
		},
        showMode: function(){
			this.picker
				.find('>div')
				.hide()
				.filter('.datepicker-days')
					.css('display', 'block');
		},
        place: function(){
			if (this.isInline)
				return;			
			var zIndex = 10;	
			var left = offset.left,
				top = 1000;
			this.picker.css({
				top: top,
				left: left,
				zIndex: zIndex
			});
		},       
    };
    $.fn.datepicker.Constructor = Datepicker;
    DemoDP.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									'<thead>'+
                                        '<tr>'+
                                            '<th class="prev" style="visibility: visible;">&laquo;</th>'+
                                            '<th colspan="5" class="datepicker-switch">April 2016</th>'+
                                            '<th class="next" style="visibility: visible;">&raquo;</th>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<th class="dow">Su</th>'+
                                            '<th class="dow">Mo</th>'+
                                            '<th class="dow">Tu</th>'+
                                            '<th class="dow">We</th>'+
                                            '<th class="dow">Th</th>'+
                                            '<th class="dow">Fr</th>'+
                                            '<th class="dow">Sa</th>'+
                                        '</tr>'+
                                    '</thead>'+
									'<tbody>'+
                                        '<tr>'+
                                            '<td class="old day">27</td>'+
                                            '<td class="old day">28</td>'+
                                            '<td class="old day">29</td>'+
                                            '<td class="old day">30</td>'+
                                            '<td class="old day">31</td>'+
                                            '<td class="day">1</td>'+
                                            '<td class="day">2</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td class="day">3</td>'+
                                            '<td class="day">4</td>'+
                                            '<td class="day">5</td>'+
                                            '<td class="day">6</td>'+
                                            '<td class="day">7</td>'+
                                            '<td class="day">8</td>'+
                                            '<td class="day">9</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td class="day">10</td>'+
                                            '<td class="day">11</td>'+
                                            '<td class="today day">12</td>'+
                                            '<td class="day">13</td>'+
                                            '<td class="day">14</td>'+
                                            '<td class="day">15</td>'+
                                            '<td class="day">16</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td class="day">17</td>'+
                                            '<td class="day">18</td>'+
                                            '<td class="day">19</td>'+
                                            '<td class="day">20</td>'+
                                            '<td class="day">21</td>'+
                                            '<td class="day">22</td>'+
                                            '<td class="day">23</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td class="day">24</td>'+
                                            '<td class="day">25</td>'+
                                            '<td class="day">26</td>'+
                                            '<td class="day">27</td>'+
                                            '<td class="day">28</td>'+
                                            '<td class="day">29</td>'+
                                            '<td class="day">30</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td class="new day">1</td>'+
                                            '<td class="new day">2</td>'+
                                            '<td class="new day">3</td>'+
                                            '<td class="new day">4</td>'+
                                            '<td class="new day">5</td>'+
                                            '<td class="new day">6</td>'+
                                            '<td class="new day">7</td>'+
                                        '</tr>'+
                                    '</tbody>'+
									'<tfoot>'+
                                        '<tr>'+
                                            '<th colspan="7" class="today" style="display: none;"></th>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<th colspan="7" class="clear" style="display: none;"></th>'+
                                        '</tr>'+
                                    '</tfoot>'+
								'</table>'+
							'</div>'+
						'</div>';
    $.fn.datepicker.DemoDP = DemoDP;            
})(jQuery);