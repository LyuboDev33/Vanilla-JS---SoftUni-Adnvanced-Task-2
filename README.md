This is a simple Add, Edit and Remove Front-end project.

Note: 

1. The project is not responsive and the HTML and CSS have been provided by SoftUni.
My task was to add only the JavaScript code.

2. A word file is updated here where you can find all the details about the task for this project.

How it works: 

First,  we create the Add button functionallity. - we take the information from the input fields and add it into the "Check info" field.
We append the info as a <li></li> element inside the <ul> </ul>. 
The space below "Check info" has a <ul> and we append a <li> element inside it when "Adopt" is clicked  

*This whole code is inside a <li> tag*
  `<article>
    <p>Pet:${animalType.value}</p>
    <p>Gender: ${animalGender.value}</p>
    <p>Age:${animalAge.value}</p>
  </article>
  <div class="buttons">
    <button class="edit-btn">Edit</button>
    <button class="done-btn">Done</button>
  </div>`;

  *This whole code is inside a <li> tag*


Second, we create the Edit button functionallity - when edit is clicked, 
we take the information from the <li> element (which is located in the 3 <p> elements), 
pass the values to the input fields and remove the content inside th <ul> 

        animalType.value = petValues[0];
        animalGender.value = petValues[1];
        animalAge.value = petValues[2];

        ul.innerHTML = '';

We have another functionallity for the Done button.
When "Done" is clicked, we again take the information from the <li> element under "Check Info" and pass it to "Adopted Pets" as a new <li>.

"Adopted pets" is a <ul> list as well.

Last but not least - functionallity for "Clear" button. 

When "Clear" is clicked, it removes all of the content inside the <ul> that is located in "Adopted pets".



