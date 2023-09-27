const loadAIS = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();
  const AIs = data.data.tools;
  displayAIS(AIs);
};

const displayAIS = (AIs) => {
  const aiContainer = document.getElementById("AI-container");
  aiContainer.innerHTML = "";
  AIs = AIs.slice(0, 6);

  AIs.forEach((ai) => {
    const divForAI = document.createElement("div");
    divForAI.classList.add =
      "card card-compact bg-base-100 w-[487px] h-[617px] mx-auto shadow-2xl";
    divForAI.innerHTML = `
    <figure class="p-8">
              <img src="${ai.image}" alt="" />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-2xl font-semibold">Features</h2>
              <ol class="text-base font-normal text-[#585858]">
                  <li>1.${ai.features[0]}</li>
                  <li>2.${ai.features[1]}</li>
                  <li>3.${ai.features[2]}</li>
              </ol>
              <hr class="my-2">
              <div class="flex justify-between items-center">
              <div>
              <p class="text-2xl font-semibold">${ai.name}</p>
              <p class="text-base font-medium"><span class="mr-2"><i class="fa-regular fa-calendar-days"></i></span>${ai.published_in}</p>
              </div>
              <div class="card-actions justify-end">
                <button onclick="showDetails('${ai.id}')" class="btn rounded-full text-[#EB5757]">-></button>
              </div>
              </div>
            </div>
    `;

    aiContainer.appendChild(divForAI);
  });
};

// Modal For AIs

const showDetails = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/${id}`
  );
  const data = await res.json();
  const ai = data.data;
  modalDetails(ai);
};

const modalDetails = (ai) => {
  const modalTextContainer = document.getElementById("modal-text-container");
  const modalImgContainer = document.getElementById("modal-img-container");
  modalTextContainer.innerHTML = "";
  const newTextDiv = document.createElement("div");
  newTextDiv.innerHTML = `
  <h1 class="text-xl font-semibold">${ai.description}</h1>
  
  <div class="flex justify-around gap-6 my-4">
  <div class="text-base font-bold text-green-500 text-center">
  <p>${ai.pricing[0].price}</p>
  <p>${ai.pricing[0].plan}</p>
  </div>
  <div class="text-base font-bold text-yellow-500 text-center">
  <p>${ai.pricing[1].price}</p>
  <p>${ai.pricing[1].plan}</p>
  </div>
  <div class="text-base font-bold text-[#EB5757] text-center">
  <p>${ai.pricing[2].price}</p>
  <p>${ai.pricing[2].plan}</p>
  </div>
  </div>

  <div class="flex justify-around gap-5">
  
   <div>
      <h1 class="text-2xl font-semibold">Features</h1>
       <ul>
          <li>${ai.features["1"].feature_name}</li>
          <li>${ai.features["2"].feature_name}</li>
          <li>${ai.features["3"].feature_name}</li>
       </ul>   
   </div>  
  
     <div>
        <h1 class="text-2xl font-semibold">Integrations</h1>
          <ul>
            <li>${ai?.integrations[0] || "No Data available"}</li>
            <li>${ai?.integrations[1] || "No Data available"}</li>
            <li>${ai?.integrations[2] || "No Data available"}</li>
          </ul>   
      </div>  
  
  
  </div>
`;
  modalTextContainer.appendChild(newTextDiv);
  const newImgDiv = document.createElement("div");
  modalImgContainer.innerHTML = "";
  newImgDiv.innerHTML = `
  <img src="${ai.image_link[0]}" alt="">
  <h1 class="text-2xl font-semibold text-center my-3">${ai.input_output_examples[0].input}</h1>
  <p class="text-base text-gray-500 font-normal w-[361px] mx-auto text-center">${ai.input_output_examples[0].output}</p>
  
  `;
  modalImgContainer.appendChild(newImgDiv);

  my_modal_3.showModal();
};

loadAIS();
