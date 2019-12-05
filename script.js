window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
      response.json().then( function(json) {
        
        json.sort(function(a,b){return b.hoursInSpace - a.hoursInSpace})

        const container = document.getElementById("container");
                              
        for(let i=0; i<json.length; i++){
          
          let textColor="color:Black";

          if (json[i].active === true){
            textColor="color:MediumSeaGreen";
          }

          container.innerHTML += `
            <div class="astronaut">
              <div class="bio">
                <h3>${json[i].firstName + " " + json[i].lastName}</h3>
                <ul>
                  <li>Hours in space: ${json[i].hoursInSpace}</li>
                  <li style = ${textColor}>Active: ${json[i].active}</li>
                  <li>Skills: ${json[i].skills}</li>
                </ul>
              </div>
                <img class="avatar" src=${json[i].picture} alt="No Pic"></img>
            </div>
          `
        };
      });
    });
  });