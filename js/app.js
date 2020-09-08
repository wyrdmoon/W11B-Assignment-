function getdogPics(){
 
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
          let getdogPics =JSON.parse(this.responseText);
          document.getElementById("getdogPics-img").innerHTML = getdogPics.img;
        } else if(this.readyState != 4) {
              document.getElementById("getdogPics-img").innerHTML = "LOADING";
             }  else {
               document.getElementById("getdogPics-img").innerHTML = "ERROR"
             }
  
    
    }    
    ajax.open("GET", "http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]", true);
    ajax.send();
    
  }
  
  let getdogPics = document.getElementById("getdocPics-button");
  getdogPicsButton.addEventlistener("click",getdogPics);
  