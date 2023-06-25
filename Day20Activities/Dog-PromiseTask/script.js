const dog_result = document.getElementById( 'dog-result' );
const dog_btn = document.getElementById( 'dog-btn' );

dog_btn.addEventListener( 'click', getRandomDog );

async function getRandomDog() {
	await fetch( 'https://random.dog/woof.json' )
		.then( res => res.json() )
		.then( data => {
			dog_result.innerHTML = `<img src="${data.url}" />`;
		} );
}
