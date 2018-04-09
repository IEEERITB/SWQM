
function fill(){

if(document.getElementById("un").innerHTML==""){
	document.getElementById("Sun").innerHTML= "*enter your username";
    alert("Enter your username");
}
if(document.getElementById("pw").innerHTML==""){
	document.getElementById("Spw").innerHTML= "*enter your password";
	alert("Enter your password");

}
	return;
}

$(document).ready(function(){
    $("p").on("scroll" function(){
        if($(".rows1").marginTop=='0px')
            $("rows1").position:'fixed';
    });

     $("p").on("click" function(){
        $(".rows1").slideUp();
    });
});


