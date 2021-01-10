$(document).ready(function(){
    
  let url = 'https://bandori.party/api/cards/?page=30'

  fetch(url)
    .then(
      function(response) {
      return response.json();
      }
    )
  
    .then(
      function(data) {
       // const results = data.results[0];
        //console.log(results)
        //@[cher]
      //LOOP results
      let displayCard = "";
      for(var i = 0; i < data.results.length;i++){
        let results = data.results[i];
        let power_min = results.performance_min + results.technique_min + results.technique_min;
        let power_max = results.performance_max + results.technique_max + results.technique_max;
        let power_trained = results.performance_trained_max + results.technique_trained_max + results.technique_trained_max;

        displayCard = `${displayCard} <div class="card" id="Card_${i}" style="width: 30rem;">
          <div id="carousel" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" id="cardsCarousel">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="${results.art}" alt="Card illustration (normal)" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="${results.art_trained}" alt="Card illustration (trained)" />
                </div>
                <div id="stats">
                  <p>Total Untrained Power: ${power_min} to ${power_max}<br>
                  Performance: ${results.performance_min} to ${results.performance_max}<br>
                  Technique: ${results.technique_min} to ${results.technique_max}<br>
                  Visual: ${results.technique_min} to ${results.visual_max}</p>

                  <p>Total Trained Power: ${power_trained}<br>
                  Performance: ${results.performance_trained_max}<br>
                  Technique: ${results.technique_trained_max}<br>
                  Visual: ${results.visual_trained_max}</p>
                </div>
              </div>
          </div>
          <div class="card-body">
          <h5 class="card-title">Name: ${results.name} (${results.japanese_name})</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Rarity: ${results.i_rarity}★<br>
            Attribute: ${results.i_attribute}<br>
            Skill: ${results.skill_name} (${results.japanese_skill_name})
          </h6>
          <p class="card-text">${results.full_skill}</p>

          <button type="button" class="btn btn-dark" id="addCard_${i}">Click here to add My List</button>
          </div>
          </div>`

      };//end loop
      //place our entire loop content into the container
      $('#card-container').html(displayCard);

      let displayCardCool = "";
      for(var i = 0; i < data.results.length;i++){
        let results = data.results[i];
        let power_min = results.performance_min + results.technique_min + results.technique_min;
        let power_max = results.performance_max + results.technique_max + results.technique_max;
        let power_trained = results.performance_trained_max + results.technique_trained_max + results.technique_trained_max;

        if (results.i_attribute == "Cool"){
          displayCardCool = `${displayCardCool} <div class="card" id="Card_${i}" style="width: 30rem;">
            <div id="carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" id="cardsCarousel">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="${results.art}" alt="Card illustration (normal)" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="${results.art_trained}" alt="Card illustration (trained)" />
                  </div>
                  <div id="stats">
                    <p>Total Untrained Power: ${power_min} to ${power_max}<br>
                    Performance: ${results.performance_min} to ${results.performance_max}<br>
                    Technique: ${results.technique_min} to ${results.technique_max}<br>
                    Visual: ${results.technique_min} to ${results.visual_max}</p>

                    <p>Total Trained Power: ${power_trained}<br>
                    Performance: ${results.performance_trained_max}<br>
                    Technique: ${results.technique_trained_max}<br>
                    Visual: ${results.visual_trained_max}</p>
                  </div>
                </div>
            </div>
            <div class="card-body">
            <h5 class="card-title">Name: ${results.name} (${results.japanese_name})</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Rarity: ${results.i_rarity}★<br>
              Attribute: ${results.i_attribute}<br>
              Skill: ${results.skill_name} (${results.japanese_skill_name})
            </h6>
            <p class="card-text">${results.full_skill}</p>

            <button type="button" class="btn btn-dark" id="addCard_${i}">Click here to add My List</button>
            </div>
            </div>`

        };//end loop
        $('#card-container-Cool').html(displayCardCool);
      }

      let displayCardPower = "";
      for(var i = 0; i < data.results.length;i++){
        let results = data.results[i];
        let power_min = results.performance_min + results.technique_min + results.technique_min;
        let power_max = results.performance_max + results.technique_max + results.technique_max;
        let power_trained = results.performance_trained_max + results.technique_trained_max + results.technique_trained_max;

        if (results.i_attribute == "Power"){
          displayCardPower = `${displayCardPower} <div class="card" id="Card_${i}" style="width: 30rem;">
            <div id="carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" id="cardsCarousel">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="${results.art}" alt="Card illustration (normal)" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="${results.art_trained}" alt="Card illustration (trained)" />
                  </div>
                  <div id="stats">
                    <p>Total Untrained Power: ${power_min} to ${power_max}<br>
                    Performance: ${results.performance_min} to ${results.performance_max}<br>
                    Technique: ${results.technique_min} to ${results.technique_max}<br>
                    Visual: ${results.technique_min} to ${results.visual_max}</p>

                    <p>Total Trained Power: ${power_trained}<br>
                    Performance: ${results.performance_trained_max}<br>
                    Technique: ${results.technique_trained_max}<br>
                    Visual: ${results.visual_trained_max}</p>
                  </div>
                </div>
            </div>
            <div class="card-body">
            <h5 class="card-title">Name: ${results.name} (${results.japanese_name})</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Rarity: ${results.i_rarity}★<br>
              Attribute: ${results.i_attribute}<br>
              Skill: ${results.skill_name} (${results.japanese_skill_name})
            </h6>
            <p class="card-text">${results.full_skill}</p>

            <button type="button" class="btn btn-dark" id="addCard_${i}">Click here to add My List</button>
            </div>
            </div>`

        };//end loop
        $('#card-container-Power').html(displayCardPower);
      }

      let displayCardHappy = "";
      for(var i = 0; i < data.results.length;i++){
        let results = data.results[i];
        let power_min = results.performance_min + results.technique_min + results.technique_min;
        let power_max = results.performance_max + results.technique_max + results.technique_max;
        let power_trained = results.performance_trained_max + results.technique_trained_max + results.technique_trained_max;

        if (results.i_attribute == "Happy"){
          displayCardHappy = `${displayCardHappy} <div class="card" id="Card_${i}" style="width: 30rem;">
            <div id="carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" id="cardsCarousel">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="${results.art}" alt="Card illustration (normal)" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="${results.art_trained}" alt="Card illustration (trained)" />
                  </div>
                  <div id="stats">
                    <p>Total Untrained Power: ${power_min} to ${power_max}<br>
                    Performance: ${results.performance_min} to ${results.performance_max}<br>
                    Technique: ${results.technique_min} to ${results.technique_max}<br>
                    Visual: ${results.technique_min} to ${results.visual_max}</p>

                    <p>Total Trained Power: ${power_trained}<br>
                    Performance: ${results.performance_trained_max}<br>
                    Technique: ${results.technique_trained_max}<br>
                    Visual: ${results.visual_trained_max}</p>
                  </div>
                </div>
            </div>
            <div class="card-body">
            <h5 class="card-title">Name: ${results.name} (${results.japanese_name})</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Rarity: ${results.i_rarity}★<br>
              Attribute: ${results.i_attribute}<br>
              Skill: ${results.skill_name} (${results.japanese_skill_name})
            </h6>
            <p class="card-text">${results.full_skill}</p>

            <button type="button" class="btn btn-dark" id="addCard_${i}">Click here to add My List</button>
            </div>
            </div>`

        };//end loop
        $('#card-container-Happy').html(displayCardHappy);
      }

      let displayCardPure = "";
      for(var i = 0; i < data.results.length;i++){
        let results = data.results[i];
        let power_min = results.performance_min + results.technique_min + results.technique_min;
        let power_max = results.performance_max + results.technique_max + results.technique_max;
        let power_trained = results.performance_trained_max + results.technique_trained_max + results.technique_trained_max;

        if (results.i_attribute == "Pure"){
          displayCardPure = `${displayCardPure} <div class="card" id="Card_${i}" style="width: 30rem;">
            <div id="carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" id="cardsCarousel">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="${results.art}" alt="Card illustration (normal)" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="${results.art_trained}" alt="Card illustration (trained)" />
                  </div>
                  <div id="stats">
                    <p>Total Untrained Power: ${power_min} to ${power_max}<br>
                    Performance: ${results.performance_min} to ${results.performance_max}<br>
                    Technique: ${results.technique_min} to ${results.technique_max}<br>
                    Visual: ${results.technique_min} to ${results.visual_max}</p>

                    <p>Total Trained Power: ${power_trained}<br>
                    Performance: ${results.performance_trained_max}<br>
                    Technique: ${results.technique_trained_max}<br>
                    Visual: ${results.visual_trained_max}</p>
                  </div>
                </div>
            </div>
            <div class="card-body">
            <h5 class="card-title">Name: ${results.name} (${results.japanese_name})</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Rarity: ${results.i_rarity}★<br>
              Attribute: ${results.i_attribute}<br>
              Skill: ${results.skill_name} (${results.japanese_skill_name})
            </h6>
            <p class="card-text">${results.full_skill}</p>

            <button type="button" class="btn btn-dark" id="addCard_${i}">Click here to add My List</button>
            </div>
            </div>`

        };//end loop
        $('#card-container-Pure').html(displayCardPure);
      }

      let displayCard1Star = "";
      for(var i = 0; i < data.results.length;i++){
        let results = data.results[i];
        let power_min = results.performance_min + results.technique_min + results.technique_min;
        let power_max = results.performance_max + results.technique_max + results.technique_max;
        let power_trained = results.performance_trained_max + results.technique_trained_max + results.technique_trained_max;

        if (results.i_rarity == 1){
          displayCard1Star = `${displayCard1Star} <div class="card" id="Card_${i}" style="width: 30rem;">
            <div id="carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" id="cardsCarousel">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="${results.art}" alt="Card illustration (normal)" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="${results.art_trained}" alt="Card illustration (trained)" />
                  </div>
                  <div id="stats">
                    <p>Total Untrained Power: ${power_min} to ${power_max}<br>
                    Performance: ${results.performance_min} to ${results.performance_max}<br>
                    Technique: ${results.technique_min} to ${results.technique_max}<br>
                    Visual: ${results.technique_min} to ${results.visual_max}</p>

                    <p>Total Trained Power: ${power_trained}<br>
                    Performance: ${results.performance_trained_max}<br>
                    Technique: ${results.technique_trained_max}<br>
                    Visual: ${results.visual_trained_max}</p>
                  </div>
                </div>
            </div>
            <div class="card-body">
            <h5 class="card-title">Name: ${results.name} (${results.japanese_name})</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Rarity: ${results.i_rarity}★<br>
              Attribute: ${results.i_attribute}<br>
              Skill: ${results.skill_name} (${results.japanese_skill_name})
            </h6>
            <p class="card-text">${results.full_skill}</p>

            <button type="button" class="btn btn-dark" id="addCard_${i}">Click here to add My List</button>
            </div>
            </div>`

        };//end loop
        $('#card-container-1Star').html(displayCard1Star);
      }

      let displayCard2Star = "";
      for(var i = 0; i < data.results.length;i++){
        let results = data.results[i];
        let power_min = results.performance_min + results.technique_min + results.technique_min;
        let power_max = results.performance_max + results.technique_max + results.technique_max;
        let power_trained = results.performance_trained_max + results.technique_trained_max + results.technique_trained_max;

        if (results.i_rarity == 2){
          displayCard2Star = `${displayCard2Star} <div class="card" id="Card_${i}" style="width: 30rem;">
            <div id="carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" id="cardsCarousel">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="${results.art}" alt="Card illustration (normal)" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="${results.art_trained}" alt="Card illustration (trained)" />
                  </div>
                  <div id="stats">
                    <p>Total Untrained Power: ${power_min} to ${power_max}<br>
                    Performance: ${results.performance_min} to ${results.performance_max}<br>
                    Technique: ${results.technique_min} to ${results.technique_max}<br>
                    Visual: ${results.technique_min} to ${results.visual_max}</p>

                    <p>Total Trained Power: ${power_trained}<br>
                    Performance: ${results.performance_trained_max}<br>
                    Technique: ${results.technique_trained_max}<br>
                    Visual: ${results.visual_trained_max}</p>
                  </div>
                </div>
            </div>
            <div class="card-body">
            <h5 class="card-title">Name: ${results.name} (${results.japanese_name})</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Rarity: ${results.i_rarity}★<br>
              Attribute: ${results.i_attribute}<br>
              Skill: ${results.skill_name} (${results.japanese_skill_name})
            </h6>
            <p class="card-text">${results.full_skill}</p>

            <button type="button" class="btn btn-dark" id="addCard_${i}">Click here to add My List</button>
            </div>
            </div>`

        };//end loop
        $('#card-container-2Star').html(displayCard2Star);
      }

      let displayCard3Star = "";
      for(var i = 0; i < data.results.length;i++){
        let results = data.results[i];
        let power_min = results.performance_min + results.technique_min + results.technique_min;
        let power_max = results.performance_max + results.technique_max + results.technique_max;
        let power_trained = results.performance_trained_max + results.technique_trained_max + results.technique_trained_max;

        if (results.i_rarity == 3){
          displayCard3Star = `${displayCard3Star} <div class="card" id="Card_${i}" style="width: 30rem;">
            <div id="carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" id="cardsCarousel">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="${results.art}" alt="Card illustration (normal)" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="${results.art_trained}" alt="Card illustration (trained)" />
                  </div>
                  <div id="stats">
                    <p>Total Untrained Power: ${power_min} to ${power_max}<br>
                    Performance: ${results.performance_min} to ${results.performance_max}<br>
                    Technique: ${results.technique_min} to ${results.technique_max}<br>
                    Visual: ${results.technique_min} to ${results.visual_max}</p>

                    <p>Total Trained Power: ${power_trained}<br>
                    Performance: ${results.performance_trained_max}<br>
                    Technique: ${results.technique_trained_max}<br>
                    Visual: ${results.visual_trained_max}</p>
                  </div>
                </div>
            </div>
            <div class="card-body">
            <h5 class="card-title">Name: ${results.name} (${results.japanese_name})</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Rarity: ${results.i_rarity}★<br>
              Attribute: ${results.i_attribute}<br>
              Skill: ${results.skill_name} (${results.japanese_skill_name})
            </h6>
            <p class="card-text">${results.full_skill}</p>

            <button type="button" class="btn btn-dark" id="addCard_${i}">Click here to add My List</button>
            </div>
            </div>`

        };//end loop
        $('#card-container-3Star').html(displayCard3Star);
      }

      let displayCard4Star = "";
      for(var i = 0; i < data.results.length;i++){
        let results = data.results[i];
        let power_min = results.performance_min + results.technique_min + results.technique_min;
        let power_max = results.performance_max + results.technique_max + results.technique_max;
        let power_trained = results.performance_trained_max + results.technique_trained_max + results.technique_trained_max;

        if (results.i_rarity == 4){
          displayCard4Star = `${displayCard4Star} <div class="card" id="Card_${i}" style="width: 30rem;">
            <div id="carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" id="cardsCarousel">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="${results.art}" alt="Card illustration (normal)" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="${results.art_trained}" alt="Card illustration (trained)" />
                  </div>
                  <div id="stats">
                    <p>Total Untrained Power: ${power_min} to ${power_max}<br>
                    Performance: ${results.performance_min} to ${results.performance_max}<br>
                    Technique: ${results.technique_min} to ${results.technique_max}<br>
                    Visual: ${results.technique_min} to ${results.visual_max}</p>

                    <p>Total Trained Power: ${power_trained}<br>
                    Performance: ${results.performance_trained_max}<br>
                    Technique: ${results.technique_trained_max}<br>
                    Visual: ${results.visual_trained_max}</p>
                  </div>
                </div>
            </div>
            <div class="card-body">
            <h5 class="card-title">Name: ${results.name} (${results.japanese_name})</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Rarity: ${results.i_rarity}★<br>
              Attribute: ${results.i_attribute}<br>
              Skill: ${results.skill_name} (${results.japanese_skill_name})
            </h6>
            <p class="card-text">${results.full_skill}</p>

            <button type="button" class="btn btn-dark" id="addCard_${i}">Click here to add My List</button>
            </div>
            </div>`

        };//end loop
        $('#card-container-4Star').html(displayCard4Star);
      }

    });
});