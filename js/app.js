function catFacts (){

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
          let catFactsquote = JSON.parse (this.responseText);
         document.getElementById("get-catfacts").innerHTML = catFactsquote.quote;
        } ss
    }
    ajax.open("GET", "https://cat-fact.herokuapp.com", true);
    ajax.send();
    }
    
    document.getElementById('get-catFacts').addEventListener('click', catFacts)