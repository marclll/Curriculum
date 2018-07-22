$().ready(function(){
	$("#menu").on("click",menu_change);
});

function menu_change(){
	if ($("#links_fondo").css("display")=="none"){
		$("#links_fondo").css("display","flex");
		$("#menulogo").css("animation-play-state","running");
	}
	else{
		$("#links_fondo").css("display","none");
		$("#menulogo").css("animation-play-state","running");
	}
	setTimeout(function(){
		$("#menulogo").css("animation-play-state","paused");
	},200);
}