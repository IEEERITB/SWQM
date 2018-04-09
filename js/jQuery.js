$(document).ready(function(){

	$("#home").show();
	$("#profile").hide();
	$("#quality").hide();
	$("#billing").hide();
	$("#helpline").hide();

	$("#homeM").click(function(){
		$("#home").show();
		$("#profile").hide();
		$("#quality").hide();
		$("#billing").hide();
		$("#helpline").hide();
	});

	$("#profileM").click(function(){
		$("#profile").show();
		$("#home").hide();
		$("#quality").hide();
		$("#billing").hide();
		$("#helpline").hide();
	});

	$("#qualityM").click(function(){
		$("#quality").show();
		$("#profile").hide();
		$("#home").hide();
		$("#billing").hide();
		$("#helpline").hide();
	});

	$("#billingM").click(function(){
		$("#billing").show();
		$("#profile").hide();
		$("#quality").hide();
		$("#home").hide();
		$("#helpline").hide();
	});

	$("#helplineM").click(function(){
		$("#helpline").show();
		$("#profile").hide();
		$("#quality").hide();
		$("#billing").hide();
		$("#home").hide();
	});


	    const pdf = new jsPDF();

		// let button = document.querySelector("#bill");
		// button.addEventListener('click', printPDF);

       $("#bill").click(function(){
       	pdf.text(10,10,"Payment Receipt");

       	pdf.save();
});
		
			
			// var pH = ("#pH").innerHTML;

			// console.log(pH);
	
 /*
   $(".menu").on("click", function(e) {  
        var target = $(this).attr("href");
        $(target).slideToggle("fast");
        $(".body").not(target).hide();
        e.preventDefault();
    });
    */
});