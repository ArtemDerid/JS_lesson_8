function hideText() {
	text.innerHTML = '';
	text.style.border = 'none';
}

function hideButton() {
	document.getElementById('secondTask').style.display = 'none';
}

header.onclick = function() {
	display = document.getElementById('list').style.display;
	switch (display) {
	case 'none':
		document.getElementById('list').style.display = 'list-item';
		break;

	default:
		document.getElementById('list').style.display = 'none';
		break;
	}
}