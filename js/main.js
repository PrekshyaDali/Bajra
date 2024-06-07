document.addEventListener('DOMContentLoaded', function () {
    includeHTML();
  });
  
  function includeHTML() {
    var elements = document.querySelectorAll('[id]');
    elements.forEach(function (el) {
      var file = 'components/' + el.id + '.html';
      fetch(file)
        .then(response => response.text())
        .then(data => el.innerHTML = data)
        .catch(error => console.error('Error loading component:', error));
    });
  }
  