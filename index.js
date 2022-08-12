// formats our POST
const postifyObject = (postObject) => {

    return {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(postObject),
    };
};

// push response to DOM
const pushToDOM = (response) => {
    console.log(response);
    let newH = document.createElement('h1');
    newH.innerHTML = response.id
    document.querySelector('body').append(newH);

}

// takes the args and makes a call, pushing the 
const submitData = (inputName, inputEmail) => {

    let postObject = {
        name: inputName,
        email: inputEmail,
      }

  return fetch("http://localhost:3000/users", postifyObject(postObject))
  .then(resp => resp.json())
  .then(resp => pushToDOM(resp))
  .catch(error => document.body.innerHTML = error);

}
 

// setTimeout(submitData('el', 'el@gmail.com'),)





