$().ready(function(){
	$("#menu").on("click",menu_change);
});

function menu_change(){
	if ($("#links_fondo").css("display")=="none"){
		$("#links_fondo").css("display","flex");
	}
	else{
		$("#links_fondo").css("display","none");
	}
}