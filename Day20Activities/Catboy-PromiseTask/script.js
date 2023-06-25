const cat_result = document.getElementById( 'cat-result' );
const cat_btn = document.getElementById( 'cat-btn' );
cat_btn.addEventListener( 'click', getRandomCat );


function getRandomCat() {
	fetch('https://api.catboys.com/img')
		.then( res => res.json() )
		.then( data => {
			cat_result.innerHTML = `<img src="${data.url}" />`;
		} );
}