var input="rgb(169, 169, 169)"; //input = background color for inputs once they are filled correctly

$(function(){
	var name=$("input[name='name']");
	name.on("focusout",function(){
		if(name.val()==""){
			name.css("border-color","red");
		}
		else{
			name.css("border-color",input);
		}
	});
	var email=$("input[name='email']");
	email.on("focusout",function(){
		var patt=/.@.+\.+./;
		if(patt.test(email.val())==false){
			email.css("border-color","red");
		}
		else{
			email.css("border-color",input);
		}
	});
	var location=$("input[name='location']");
	location.on("focusout",function(){
		if(location.val()==""){
			location.css("border-color","red");
		}
		else{
			location.css("border-color",input);
		}
	});
	var address=$("input[name='address']");
	address.on("focusout",function(){
		if(address.val()==""){
			address.css("border-color","red");
		}
		else{
			address.css("border-color",input);
		}
	});
	var message=$("textarea");
	message.on("focusout",function(){
		if(message.val()==""){
			message.css("border-color","red");
		}
		else{
			message.css("border-color",input);
		}
	});

	$("#submit").on("click",function(){
		if(name.css("border-color")==input && email.css("border-color")==input && location.css("border-color")==input && address.css("border-color")==input && message.css("border-color")==input){
			$("form").css("display","none");
			$("#submitdiv").css("display","none");
			$("#loading").css("display","inline-block");
			setTimeout(finalmessage,8000);
		}
		else{
			$("#redmessage").css("display","inline-block");
			allred();
		}
	});
});

function finalmessage(){
	$("#loading").css("display","none");
	$("#finalmessage").css("display","inline-block");
}

function allred(){
	var name=$("input[name='name']");
	var email=$("input[name='email']");
	var location=$("input[name='location']");
	var message=$("textarea");
	var address=$("input[name='address']");
	var patt=/.@.+\.+./;
	if(name.val()==""){
		name.css("border-color","red");
	}
	if(patt.test(email.val())==false){
		email.css("border-color","red");
	}
	if(location.val()==""){
		location.css("border-color","red");
	}
	if(address.val()==""){
		address.css("border-color","red");
	}
	if(message.val()==""){
		message.css("border-color","red");
	}
}