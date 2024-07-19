
const searchHttpCode = async () => {
  const response = await fetch(`https://cors-anywhere.herokuapp.com/https://random-d.uk/api/random`);
  const data = await response.json();

  const {url} = data
  const result = document.getElementById('result')
  result.innerHTML = `
    <img src="${url}" />
  `
}
