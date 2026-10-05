
$('.novidades	button').click(function() {
	$('.novidades').toggleClass('painel-aberto');
});
$('.painel	button').click(function() {
	$(this).parent().toggleClass('painel-aberto');
});