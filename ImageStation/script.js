  
const imageCon = document.getElementById("images-div")



 


//   ------------fatch API-----

  let count = 10;
  let apikey =  "o1DU0WYApaY0_dNvJ0Td2swxgEz6cXa0bKor_ojQ5NU";
  
  let Url = `https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`;

  let imageData =[];
  

//   --------- display photos 

function display(){

    imageData.forEach((elem)=>{

        let photoStore = document.createElement("div");

        let item = document.createElement('a'); 

        item.setAttribute('href',elem.links.html);
        item.setAttribute('traget','_blank')

        let img = document.createElement('img');

        img.setAttribute('src', elem.urls.regular);
        img.setAttribute('alt', elem.alt_description);
        img.setAttribute('title',elem.alt_description);

        item.appendChild(img);
        photoStore.appendChild(item);
        imageCon.appendChild(photoStore);


    });


}

  async function getphoto(){

    try {

        let res = await fetch(Url);
        imageData = await res.json();

        display();
        // imageData = data

        // console.log(imageData)
        
    } catch (error) {
        
        alert("Error");
    }
  }


  //// scroll 

  window.addEventListener("scroll", ()=>{

    if(window.innerHeight + window.scrollY >= document.body.offsetHeight-1000) {

      getphoto();
      console.log("load more")
    }
  })

  getphoto();

//   console.log(imageData)
