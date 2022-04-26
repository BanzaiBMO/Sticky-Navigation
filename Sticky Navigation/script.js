const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
	if(window.crollY, nav.offsetHeight + 150) {
		nav.ClassList.add('active')
	} else {
		nav.classList.remove('active')
	}
}