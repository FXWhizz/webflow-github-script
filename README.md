# Package to Serve Local Scripts ro Webflow

## Paste Below code to Webflow Page or Webflow General Body in Settings

---html
<script src="http://localhost:1234/app.js"></script>  
<!-- tries to load from local host -->

<script>
if(typeof parceled !== 'undefined') {
		let script = document.createElement('script')
		script.type = 'text/javascript'
		script.src = 'https://psychoactive-studios.github.io/repo-name/dist/app.js';
		document.head.appendChild(script)
	}
//checks if the parceled variable from app.js is undefined - meaning local host isn't up and running
//if not loads from the github pages
</script>

---