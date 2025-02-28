// {
//   "name": "string",
//   "email": "user@example.com",
//   "phone": "string",
//   "project_type": "string",
//   "project_description": "string",
//   "budget_min": 0,
//   "budget_max": 0,
// }

const form = document.querySelector('#form');
const responseElement = document.querySelector('#response');

const api = 'http://localhost:3030/user'


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newUser = {};

  Array.from(form.elements).forEach(el => {
      if (el.tagName === 'INPUT' ) {
          newUser[el.id] = el.value;
      }
  })


  fetch(api,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    }
  )
      .then(res => res.json())
      .then(json => renderResponse(json))
      .catch(err => renderReject(err))
})


function renderResponse(obj) {
    responseElement.replaceChildren();

    Object.entries(obj).forEach(([key, value]) => {
        const el = document.createElement('span');
        el.textContent = `${key}: ${value}`;
        responseElement.append(el);
    })
}

function renderReject(error) {
    responseElement.replaceChildren();

    const el = document.createElement('span');
    el.textContent = `Error: ${error}`;
    el.style.color = 'red';
    responseElement.append(el);
}






