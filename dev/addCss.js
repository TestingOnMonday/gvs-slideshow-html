function addcss(element,css) {
	//gets the specified element and defines it to celement
	const celement = document.querySelector("#"+element);
	celement.style.css = str(css)
}