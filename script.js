document.addEventListener("DOMContentLoaded", () => {
    const dogContainer = document.getElementById("dogContainer");
    const button = document.getElementById("button");
	const body = document.body;
	
    const URL = "https://dog.ceo/api/breeds/image/random"; // Guardo la URL de la API en una variable
	
    let fetchDogImage = () => {     // Defino una función para hacer la solicitud a la API 
    fetch(URL) 
    .then (data => data.json()) 
    .then (item =>{

		const imageUrl = item.message; 
		const img = document.createElement("img"); 
		img.classList.add("picture")

		img.src = imageUrl; 
		dogContainer.innerHTML = ''; // Limpio el contenido existente en el contenedor
		dogContainer.appendChild(img); 

		body.classList.add("bkgrChange")
	});
}

button.addEventListener("click",fetchDogImage);
});
