$(document).ready(function(){
    
    let url = 'https://bandori.party/api/cards/?page=20'

    fetch(url)
      .then(
        function(response) {
        return response.json();
        }
      )
    
      .then(
        function(data) {
        //LOOP results
        let display = "";
        let mycardList = []
        for(var i = 0; i < data.results.length;i++){
          let results = data.results[i];
          let power_min = results.performance_min + results.technique_min + results.technique_min
          let power_max = results.performance_max + results.technique_max + results.technique_max
          let power_trained = results.performance_trained_max + results.technique_trained_max + results.technique_trained_max

          display = `${display} 
              <div class="card" style="width: 35rem;">
                <div class="d-flex justify-content-center"

                  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" src="${results.art}" alt="Card illustration (normal)" id="cardimage1" />
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="${results.art_trained}" alt="Card illustration (trained)" id="cardimage2" />
                      </div>
                      <div id="stats">
                       <h5>Total Untrained Power: ${power_min} to ${power_max}</h5>
                       <p>Performance: ${results.performance_min} to ${results.performance_max}<br>
                       Technique: ${results.technique_min} to ${results.technique_max}<br>
                       Visual: ${results.technique_min} to ${results.visual_max}</p>

                       <h5>Total Trained Power: ${power_trained}</h5>
                       <p>Performance: ${results.performance_trained_max}<br>
                       Technique: ${results.technique_trained_max}<br>
                       Visual: ${results.visual_trained_max}</p>
                      </div>
                    </div>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">Name: ${results.name} (${results.japanese_name})</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Rarity: ${result.i_rarity}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">Attribute: ${result.i_attribute}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">Skill: ${results.skill_name} (${results.japanese_skill_name})</h6>
                    <p class="card-text">${results.full_skill}</p>
                  </div>

                  <button type="button" class="btn btn-dark" id="addCard">Click here to add My List</button>
            
                </div>
              </div>`

              if(document.getElementById('addCard').clicked == true)
              {
                `${mycardList}`.append(results)
              }

        }//end loop
        //place our entire loop content into the container
        $('#card-container').html(display);

        




        document.addEventListener(mycard, function(event) {


          if (localStorage.getItem("mycardList") !== null) {
            mycardList = JSON.parse(localStorage.getItem("mycardList"));
          }
          
          localStorage.setItem(results, JSON.stringify(results))
          
        })
      });
});