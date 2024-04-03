function includeHTML(file, elementId) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      });
  }
  includeHTML('footer.html', 'footer');
  includeHTML('header.html', 'header');