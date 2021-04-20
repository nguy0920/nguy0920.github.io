window.onload = init;

function init() {

	// JQuery function attached to the submit event of the form with id "form"
	$('#form').submit(function (e) {
		// e.preventDefualt to avoid the form being submitted to page specified in action attribute 
   		 e.preventDefault();
   		 $("#results").removeClass('reveal');
 
   		 $(".overlay-container").fadeIn(1000, function(){
   		 		showformValues(form);
   		 		$('.overlay-container').delay(500).fadeOut(500);
   		 		$("#results").addClass('reveal');
   		 })
	});

}

function showformValues(form){
	
	var formValues = $(form).serializeArray(); 
		
	$.each(formValues, function(index, field){

		// following code does the following : 
		// 1) $("#results") -- (Gets the  selects the div with id results 
		// 2) .fund("#"+field.name+"_result") -- finds the element with id equal to the name of the field being accessed along with text ("_result") Eg : name, pc_result, email_result
		// 3) Modifies the text inside the selected element and replaces it with the value of this field   
		$("#results").find("#"+field.name+"_result").text(field.value);

		// special check for email to add a link instead of just string
		if(field.name=="email"){
			$("#results").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);

		$("results").find("#"+field.name+"_result").select(field.value);
		}
	})				
}