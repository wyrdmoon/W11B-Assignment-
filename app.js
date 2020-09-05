function getdogPics(){
 
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
          let dogPics  = JSON.parse (this.responseText);
         document.getElementById("dogImg").innerHTML = dogPics.quote;} 
        else if(this.readyState !=4) {
            document.getElementById("dogImg").innerHTML = dogPics.quote;
        } 
        else {
            document.getElementById("dogImg").innerHTML = Error;
        }
    };
    ajax.open("GET", "http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]", true);
    ajax.send();
    }
    
   
