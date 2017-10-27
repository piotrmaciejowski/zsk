$(document).ready(function(){
/*	$('tr:even').css('background', 'grey');
	$('tr:odd').css('background', 'lightgrey');*/
	
	$('#tabela tr:even').css('background', 'grey');
	$('#tabela tr:odd').css('background', 'lightgrey');	
	$('#tabela tr:first').css('background', '#ff9595');	
	$('#tabela tr:last').css('background', '#ffe795');	
	$('#tabela tr:eq(2)').css('background', '#deff95');	
	$('#tabela td:contains("marchewka")').css('background', '#ffb359');
	
	$('#pokaz').click(function(){
		$('#domek').show(3000);
	});
	
	$('#schowaj').click(function(){
		$('#domek').hide(3000);
	});
	
	$('#ukryty:hidden').show(3000);
})