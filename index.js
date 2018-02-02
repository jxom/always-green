document.querySelectorAll('td.negative_change').forEach(element => {
	element.innerHTML = element.innerHTML.replace('-', '');
})
