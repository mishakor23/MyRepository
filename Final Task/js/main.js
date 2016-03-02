(function searchExpand() {
	var submit = document.getElementById('submit');
	var search = document.getElementById('search');
	var opener = document.getElementsByClassName('opener')[0];
	var xsSearch = document.getElementsByClassName('small-size')[0];
	submit.addEventListener('click', function() {
		submit.classList.add('active');
		search.classList.add('search-opened');
	});
	opener.addEventListener('click', function() {
		opener.classList.add('clicked');
		xsSearch.classList.add('active');
	});
	document.addEventListener('click', function(event) {
		if (event.target === search || event.target === xsSearch) {
			return;
		}
		submit.classList.remove('active');
		search.classList.remove('search-opened');
		opener.classList.remove('clicked');
		xsSearch.classList.remove('active');
	}, false);
})();