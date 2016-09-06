$(document).ready(function(){


  	

	$(".submitbutton").click(function() {
		
		
		//Begin Required Check
		var name = $("input#name1.req").val();
		if(name == ""){
			$("input#name1").focus();
			return false;	
		}else{
			var name = $("input#name1").val();
		}
		
		var email = $("input#email1.req").val();
		if(email == ""){
			$("input#email1").focus();
			return false;
		}else{
			var email = $("input#email1").val();
		}
		
		
		var comments = $("textarea#comments1.req").val();
		if(comments == ""){
			$("textarea#comments1").focus();
			return false;
		}else{
			var comments = $("textarea#comments1").val();
		}
		//End Required Check


		//Data for response 
		var dataString = 'name=' + name + 
						 '&email=' + email + 
						 '&comment=' + comments;
						 
		
	//Begin Ajax call
		$.ajax({
			type: "POST",
			url: "php/mail.php",
			data: dataString,
			success: function() {
				$('#form1').html("<div id='message'></div>");
      			$('#message').html("<h4 style='padding-left:20px'>Thank You!</h4>")
      			.append("<p style='padding-left:20px'>Dear "+ name +", thank you for contacting me! I will keep in touch very soon!</p>")
      			.hide()
      			.fadeIn(1500);
			},
			error: function() {
				$('#form1').html("<div id='message'></div>");
      			$('#message').html("<h4 style='color:red; padding-left:20px'>Error!</h4>")
      			.append("<p style='padding-left:20px'>An error occured. Please load the page again!</p>")
      			.hide()
      			.fadeIn(1500);
			}
		});//ajax call
		return false;  
	
		
	});//button click
	
	
});//EoD