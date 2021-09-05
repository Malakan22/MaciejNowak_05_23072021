fetch("http://localhost:3000/api/cameras")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (cameraArray) {
    for (camera of cameraArray) {
      productsDisplay(camera);
    }
    console.log(cameraArray);
  })
  .catch(function (error) {
    console.log(error);
  });

function productsDisplay(camera) {
  console.log(camera);
}

// fetch("http://url-service-web.com/api/users", {
// 	method: “POST”,
// 	headers: { 			//"headers" TELLS WEB SERVICE WE ARE SEND JSON INFO
// 'Accept': 'application/json', 		// copy paste
// 'Content-Type': 'application/json' 	// copy paste
// },
// 	body: JSON.stringify(jsonBody)
// });
