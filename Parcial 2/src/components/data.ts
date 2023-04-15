export async function bring_api() {
	try {

			const array = []
			for(let i=1; i<2; i++){
			const chuck = await (await fetch("https://api.chucknorris.io/jokes/random" + i)).json()
			array.push(chuck)
			}
			console.log(array)
			return array
	}
	catch(error){
		console.log(error)
	}
}

export async function bring_cat() {
	try {

			const array = []
			for(let i=1; i<2; i++){
			const categories = await (await fetch("https://api.chucknorris.io/jokes/categories" + i)).json()
			array.push(categories)
			}
			console.log(array)
			return array
	}
	catch(error){
		console.log(error)
	}
}