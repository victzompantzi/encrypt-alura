function educationForm(){
    var boxvalue1 = $("#title-field").val();
    $("#education-title").empty();
    $("#education-title").append(boxvalue1);
    var boxvalue2 = $("#description-field").val();
    $("#education-description").empty();
    $("#education-description").append(boxvalue2);
};

$("#submit-button").on("click", function() {
	educationForm();
	$(".form-group").hide()
});