window.addEventListener("load", solve);

function solve() {

  let adoptBtn = document.getElementById('adopt-btn');

  let ulInfo = document.getElementById('adoption-info');
  let ulInfoLi = document.createElement('li');

  let ulList = document.getElementById('adopted-list');
  let ulListLi = document.createElement('li');

  let animalType = document.getElementById('type');
  let animalAge = document.getElementById('age');
  let animalGender = document.getElementById('gender');


  animalAge.addEventListener('input', function () {

    if (animalAge.value === 0 || animalAge.value < 1) {
      animalAge.value = 1;
    }

  });


  adoptBtn.addEventListener('click', function (event) {

    event.preventDefault();

    if (animalType.value.trim() === "" || animalAge.value.trim() === "" || animalGender.value === "") {
      alert('Всички полета са задължителни');

      clearFields();

      return;
    }


    ulInfoLi.innerHTML = `
  <article>
    <p>Pet:${animalType.value}</p>
    <p>Gender: ${animalGender.value}</p>
    <p>Age:${animalAge.value}</p>
  </article>
  <div class="buttons">
    <button class="edit-btn">Edit</button>
    <button class="done-btn">Done</button>
  </div>`;

    ulInfo.appendChild(ulInfoLi);

    let editBtn = document.querySelectorAll('.edit-btn');
    let doneBtn = document.querySelectorAll('.done-btn');



    let petValues = [];

    // code for edit

    for (let i = 0; i < editBtn.length; i++) {

      editBtn[i].addEventListener('click', function () {
        let articleParent = editBtn[i].parentElement.parentElement;
        let ul = editBtn[i].parentElement.parentElement.parentElement;

        let allPs = articleParent.querySelectorAll('p');

        for (let j = 0; j < allPs.length; j++) {
          let parts = allPs[j].innerHTML.split(':');

          if (parts.length >= 2) {
            let value = parts[1].trim();
            petValues.push(value);

          }

        }

        animalType.value = petValues[0];
        animalGender.value = petValues[1];
        animalAge.value = petValues[2];

        ul.innerHTML = '';

      });

    }
    // code for edit




    // code for done
    for (let q = 0; q < doneBtn.length; q++) {

      doneBtn[q].addEventListener('click', function () {


        let ul = doneBtn[q].parentElement.parentElement.parentElement;
        let liRemove = ul.querySelector('li');

        let allPs = ul.querySelectorAll('p');

        for (let j = 0; j < allPs.length; j++) {
          let parts = allPs[j].innerHTML.split(':');
          if (parts.length >= 2) {
            let value = parts[1].trim();
            petValues.push(value);

          }

        }

        ulList.innerHTML = `
            <li>
            <article>
              <p>Pet:${petValues[0]}</p>
              <p>Gender: ${petValues[1]}</p>
              <p>Age:${petValues[2]}</p>
            </article>
            <button class="clear-btn" >Clear</button>
          </li>`;

          ulList.appendChild(ulListLi);

          liRemove.remove();

          let clearBtn = document.querySelector('.clear-btn');  

          let parentLi = clearBtn.parentElement.parentElement.parentElement;

         let allLi =  parentLi.querySelectorAll('li');
          
          
      

          clearBtn.addEventListener('click', function () { 

            for(let j = 0; j < allLi.length; j++) { 

              allLi[j].remove();

            }

          })
        


      });

    }


    // code for done







    clearFields();
  });





  // function for clearing the fields 

  function clearFields() {

    animalType.value = "";
    animalAge.value = "";
    animalGender.value = "";


  }


}
