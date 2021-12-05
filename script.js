// bbe1a829cedf4817a065177f7318b92b
let newsAccordion = document.getElementById('newsAccordion');
const source = 'bbc-news';
const apiKey = 'bbe1a829cedf4817a065177f7318b92b';

const xhttp = new XMLHttpRequest();

//callback function
xhttp.onload = function () {
  if (this.status === 200) {
    //if the reponse status is OK
    let data = JSON.parse(this.response);
    let articles = data.articles;
    // console.log(articles);
    let newsHTML = '';
    for (let i = 0; i < articles.length; i++) {
      // console.log(articles[i]);
      let title = articles[i].title;
      let content = articles[i].content;
      // console.log(title, content);
      let news=`<div class=" accordion-item">
      <h2 class="accordion-header" id="heading${i}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
          ${title}
        </button>
      </h2>
      <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#newsAccordion">
        <div class="accordion-body">
          ${content}.<a href="${articles[i].url}" target="_blank">Read more here.</a>
        </div>
      </div>
    </div>`;
      newsHTML += news;
    }
    newsAccordion.innerHTML = newsHTML;
  } else console.log('Some error occurred');
};

//sending a request to the web-server
xhttp.open(
  'GET',
  `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apiKey}`,
  true
);
xhttp.send();

// let searchTxt = document.getElementById('searchTxt');
// searchTxt.addEventListener('input', function () {
//   let inputText = searchTxt.value.toLowerCase();
//   let noteCards = document.getElementsByClassName('noteCards');
//   Array.from(noteCards).forEach(function (element) {
//     console.log(element);
//     let heading = element.getElementsByTagName('h5')[0].innerText.toLowerCase();
//     let content = element.getElementsByTagName('p')[0].innerText.toLowerCase();
//     // console.log(heading, content);
//     if (heading.includes(inputText) || content.includes(inputText)) {
//       element.style.display = 'block';
//     } else element.style.display = 'none';
//   });
// });