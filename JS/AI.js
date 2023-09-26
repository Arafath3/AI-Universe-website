const loadAIS = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();
  const AIs = data.data.tools;
  displayAIS(AIs);
};

const displayAIS = (AIs) => {
  const aiContainer = document.getElementById("AI-container");
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
                <button class="btn rounded-full text-[#EB5757]">-></button>
              </div>
              </div>
            </div>
    `;

    aiContainer.appendChild(divForAI);
  });
};

loadAIS();
