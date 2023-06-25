const fox_result = document.getElementById( 'fox-result' );
const fox_btn = document.getElementById( 'fox-btn' );

fox_btn.addEventListener( 'click', getRandomFox );

function getRandomFox() {
	fetch('https://randomfox.ca/floof/' )
		.then( res => res.json() )
		.then( data => {
			fox_result.innerHTML = `<img src="${data.image}" />`;
		} );
}