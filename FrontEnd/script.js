   function getWorks(){
    //fetch /category 
     
        fetch("http://localhost:5678/api/works/").then(response=>{
        console.log(response)
         return response.json();
        }).then(data=>{
            console.log(data)
            for (const item of data) {
                generateFigure(item);
    
            }
                
        })
   } 

   function generateFigure(item){
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    // -----
    img.src = item.imageUrl;
    img.alt = item.title;
    // -----
    figure.appendChild(img);
    const gallery = document.getElementById("gallery");
    gallery.appendChild(figure);
   }
   //reponse à notre fonction
   getWorks();
   //reponse à notre fonction

  
   // filtres 

  function getFilters(){

        fetch("http://localhost:5678/api/categories/").then(response=>{
        console.log(response)
         return response.json();
        }).then(data=>{
            console.log(data)
            for (const objets of data) {
                generateFilters(objets);
            }
                
        })
   } 

        function generateFilters(name){
        const input = document.createElement("input")

        
        input.name = value; //  
        filters = document.getElementById("filters");
        filters.appendChild(input);
        
    }
     

    getFilters();

    //Creer btn "Tous"

    const btnTous = document.createElement ("input");
    btnTous.textContent = "Tous";
    btnTous.value = 0;
    btnTous.appendChild(input);
    



   
   
    
