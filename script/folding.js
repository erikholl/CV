
// get collapsible elements (button)
var coll = document.getElementsByClassName("collapsible");
var i;

// loop through collapsible elements
for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		// Sibling after button i to show / not show
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}
