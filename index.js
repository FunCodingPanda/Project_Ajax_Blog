const baseURL = "https://murmuring-peak-70915.herokuapp.com";

$(document).ready(() => {

  renderSidebar();
  initializeRoutes();
  window.onhashchange = initializeRoutes;
  $('#create-button').click(() => renderCreatePostForm());

});
