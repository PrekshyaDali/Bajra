document.addEventListener('DOMContentLoaded', function () {
    includeHTML();
  });
  
  function includeHTML() {
    var elements = document.querySelectorAll('[id]');
    elements.forEach(function (el) {
      var file = '../../src/components/' + el.id + '.html';
      fetch(file)
        .then(response => response.text())
        .then(data => el.innerHTML = data)
        .catch(error => console.error('Error loading component:', error));
    });
  }



  // document.addEventListener('DOMContentLoaded', function () {
  //   const template = document.getElementById('my-template');
  //   const container = document.getElementById('my-template-container');
  //   const clone = document.importNode(template.content, true);

  //   // Fill slots with data
  //   clone.querySelector('[name="title"]').textContent = "Dynamic Title";
  //   clone.querySelector('[name="content"]').textContent = "Dynamic content goes here.";

  //   // Append the cloned content to the container
  //   container.appendChild(clone);
  // });

