
$('.country').each( function(pos,el) {
		 
	$(el).click( function() {
		
		$('.country').not($(el)).removeClass("active");
		$(el).addClass("active");
		
		if($(el).attr('attr-name') == 'THAILAND'){
			$('#hq').show();
		}else{
			$('#hq').hide();
		}
		$('#ct').html( $(el).attr('attr-name') );
		$('#btnL').attr('href' , $(el).attr('attr-href') );
	
	});
							  
});
