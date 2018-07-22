var id=0;

$(function(){
	$.get("https://dog.ceo/api/breeds/image/random/10",
		function(data){
			$(".img").each(function(){
				$(this).attr("src",data.message[id]);
				++id;
			});
		},"json")

	.done(function(){
		$(".img").each(function(){
			$(this).hover(function(){
				$("#greatimg").attr("src",$(this).attr("src"));
			});
		});
	})
})