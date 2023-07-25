// TODO: add code here
window.addEventListener("load", function(){
    const container = document.getElementById("container");
fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    response.json().then(function(json) {
        function compare (a,b){
            const hoursA = a.hoursInSpace;
            const hoursB = b.hoursInSpace;
            let compare = 0;
            if (hoursA > hoursB) {
                compare = -1;
            } else if (hoursB > hoursA) {
                compare = 1;
            }
            return compare;
        }
        json.sort(compare);
       container.innerHTML = "";
       for(let i = 0;i< json.length; i++){
        if (json[i].active === "true"){
       container.innerHTML+=`
        <div class="astronaut">
        <div class="bio">
           <h3> ${json[i].firstName} ${json[i].lastName}</h3>
           <ul>
              <li>Hours in space: ${json[i].hoursInSpace} </li>
              <li> Active: <div class="c">${json[i].active}</div></li>

              <li>Skills:${json[i].skills.join(", ")}</li>
           </ul>
        </div>
        <img class="avatar" src=${json[i].picture}>
      </div>
  `}
   else {
    container.innerHTML+=`
        <div class="astronaut">
        <div class="bio">
           <h3> ${json[i].firstName} ${json[i].lastName}</h3>
           <ul>
              <li>Hours in space: ${json[i].hoursInSpace} </li>
              <li> Active: <div>${json[i].active}</div></li>

              <li>Skills:${json[i].skills.join(", ")}</li>
           </ul>
        </div>
        <img class="avatar" src=${json[i].picture}>
      </div>
  `}}
   })
})})
        

