$(document).ready(function(){
    
    let url = 'https://bandori.party/api/cards/?page=3'

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
        for(var i = 0; i < data.results.length;i++){
          let results = data.results[i];

          display = `${display} <div class="card" style="width: 25rem;">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="${results.art}" alt="Card illustration (normal)" id="cardimage1" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="${results.art_trained}" alt="Card illustration (trained)" id="cardimage2" />
                  </div>
                  <div id="stats">
                    <p>Performance: ${results.performance_trained_max}</p>
                    <p>Technique: ${results.technique_trained_max}</p>
                    <p>Visual: ${results.visual_trained_max}</p>
                  </div>
                </div>
                
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
            </div>
            <div class="card-body">
            <h5 class="card-title">Name: ${results.name} (${results.japanese_name})</h5>
            <h6 class="card-subtitle mb-2 text-muted">Skill: ${results.skill_name} (${results.japanese_skill_name})</h6>
            <p class="card-text">${results.full_skill}</p>
            </div>
            </div>`
        }//end loop
        //place our entire loop content into the container
        $('#card-container').html(display);

      });
});
