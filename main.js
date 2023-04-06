document.querySelector(".hero__info-btn").addEventListener("click", meowUP);

async function meowUP() {
  const url = "https://catfact.ninja/fact";

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.querySelector("#cat-api").innerText = data.fact;
  } catch (error) {
    console.log(`Error is ${error}`);
  }
}
