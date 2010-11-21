jQuery(document).ready(function($) {
	/** BUTTONS **/
	$(".jqButton" ).button();
	
	/** TOGGLE ACTIONS */
	$("a#login_activator").click(function(event){
		event.preventDefault();
		$("div#login_form").toggle();
	});
	$('#change_pw_area_trigger').click(function(event){
		$("#change_pw_area").toggle();
	});
	$('#users_index_trigger').click(function(event){
		$("#users_index").toggle();
	});
	$('#help_trigger').click(function(event){
		$("#help_area").toggle();
	});
	$("#notice,#error,#warning,#message,#success").click(function(event){
		$("#notice,#error,#warning,#message,#success").toggle("slow");
	});

	/** OLD CODE BELOW */
	// AJAX updaters - not used, because Prototype does it much more nicely!
	// $('a.page_updater').click( {pgId: 'pass sthg here'}, function(event){ // used in section/show
		// $.get("/show.js.erb", {pageId: event.data.pgId}, "script"); // url, [data], [callback], [dataType='script']
	// });  SHOW.JS.ERB HAS BEEN DELETED
	
	// accordion actions

	// var stop = false;
	// $("#accordion h3").click(function(event) {
		// if (stop){
			// event.stopImmediatePropagation();
			// event.preventDefault();
			// stop = false;
		// }
	// });
	// $("#accordion").accordion({
		// header: "> div > h3",
		// collapsible: true,
		// active: false,
		// autoHeight: false
	// }).sortable({
		// axis: "y",
		// update: function(){
		// },
		// stop: function(event, ui){
			// stop = true;
		// }
	// });

});
/************FUNCTIONS**************/