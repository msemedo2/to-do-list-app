function newItem() {
	let list = $('#list');

	let li = $('<li></li>');
	list.append(li);

	let inputValue = $('#input').val();
	if (inputValue === '') {
		alert('Please write something.');
	} else {
		li.append(inputValue);
	}

	let crossOutButton = $('<crossOutButton></crossOutButton>');
	crossOutButton.append(document.createTextNode('X'));
	li.append(crossOutButton);

	li.on('dblclick', function () {
		li.addClass('strike');
	});

	crossOutButton.on('click', function () {
		li.addClass('delete');
	});

	$('#input').val('');

	$('#list').sortable();
}
