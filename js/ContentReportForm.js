$(document).ready(function() {
$(".submitBtn").click(function() {
var report_title = $("#report_title").val();
var report_link = $("#report_link").val();
var report_type = $("#report_type").val();
var user = $("#user").val();
//var report_type = $("input[type=radio]:checked").val();
var report_message = $("#report_message").val();
var realip = $("#realip").val();
if (report_title == '' || report_link == '' || report_type == '' || report_message == '' || user == '' || !$("#checkbox").is(':checked')) {
//alert("Insertion Failed Some Fields are Blank!");
swal("Oops...", "Something went wrong :(", "error");
} else {
// Returns successful data submission message when the entered information is stored in database.
$.post("includes/ContentReportForm.php", {
report_title1: report_title,
report_link1: report_link,
report_type1: report_type,
report_message1: report_message,
realip1: realip
}, function(data) {
	swal("Thank You!", "Your Report Has Been Submitted!", "success");
	//alert('Thank You! Your Report Has Been Submitted!')
//alert(data);
$('#form')[0].reset(); // To reset form fields
$('#reportModal').modal('hide');
});
}
});
});
