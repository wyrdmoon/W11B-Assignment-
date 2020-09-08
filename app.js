function getdogPics(){
 
  let ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        let getdogPicsImg =JSON.parse(this.responseText);
        console.log (getdogPicsImg)
        document.getElementById("getdogPics-img").setAttribute("src", getdogPicsImg.url);
      } else if(this.readyState != 4) {
            document.getElementById("getdogPics-img").innerHTML = "LOADING";
           }  else {
             document.getElementById("getdogPics-img").innerHTML = "ERROR"
           }

  
  }    
  ajax.open("GET", "https://random.dog/woof.json", true);
  ajax.send();
  
}

let getdogPicsButton = document.getElementById("getdogPics-button");
getdogPicsButton.addEventListener("click", getdogPics);
