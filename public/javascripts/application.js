jQuery.ajaxSetup({ 'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")} })

jQuery.fn.replace_default = function() {
	return this.focus(function() {
		if( this.value == this.defaultValue ) {
			this.value = "";
		}
	}).blur(function() {
		if( !this.value.length ) {
			this.value = this.defaultValue;
		}
	});
};

jQuery.fn.ajaxLink = function() {
  return this.click(function() {
    $.get(this.href, null, null, "script");
    return false;
  })
};

jQuery(document).ready(function($) {
  $("#about_link a").ajaxLink();
  $("#princess_link a").ajaxLink();
  $("#book_link a").ajaxLink();
  
  $("#home .mini_container").animate({opacity: 0.8}, 1000).fadeIn("slow");
});