const els = {
  exp: document.getElementById("exp"),
  skills: document.getElementById("skills"),
};

init();
async function init() {
  const dataExp = await fetchDataExp();
  const dataSkills = await fetchDataSkills();
  console.log("dataSkills ===", dataSkills);
  console.log("dataExp ===", dataExp);
  toHtmlExp(dataExp);
  toHtmlSkills(dataSkills);
}

async function fetchDataExp() {
  const res = await fetch(urlExp);
  const data = await res.json();
  return data;
}
async function fetchDataSkills() {
  const res = await fetch(urlSkills);
  const data = await res.json();
  return data;
}
function toHtmlExp(dataArr) {
  const dataEls = dataArr.map((obj) => {
    const div = document.createElement("div");
    div.classList.add("align-center", "mt-4", "grid", "grid-cols-6", "gap-x-4");
    div.innerHTML = `
    <div class="col-span-2 flex items-center justify-end">
        <h5 class="h5-last text-sm font-medium">${obj.startYear} - ${obj.finishYear}</h5>
    </div>
    <div class="col-span-4 flex items-center">
        <h4 class="text-lg font-medium">${obj.position}</h4>
    </div>
    <p class="align-left col-span-2 text-right">${obj.companyName}</p>
    <p class="col-span-4 text-base">
        ${obj.description}
    </p>`;
    return div;
  });
  console.log("dataEls ===", dataEls);
  els.exp.append(...dataEls);
}

function toHtmlSkills(dataArr) {
  console.log("skills");
  const dataEls = dataArr.map((obj) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <p for="first">${obj.title}</p>
        <div class="relative grid">
        <div class="h-3 w-full rounded-lg border border-emerald-600">
            <div
            class="h-2/3 rounded-lg bg-emerald-500"
            style="
                width: ${obj.level}%;
                margin-top: 1.25px;
                margin-left: 2px;
                margin-right: 2px;
            "
            ></div>
        </div>
        <p class="absolute bottom-3 right-0">${obj.level}%</p>
        </div>`;
    return div;
  });
  els.skills.append(...dataEls);
}
