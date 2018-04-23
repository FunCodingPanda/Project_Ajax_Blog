const sidebarItem = (post) => {
  return `
    <a href="#/posts/${post.id}" class="list-group-item list-group-item-action">${post.title}</a>
  `;
};

const renderSidebar = (posts) => {
  getAllPosts().then((response) => {
    $('#sidebar').html('');
    response.data.posts.map(post => {
      const item = $(sidebarItem(post));
      item.click(() => {
        renderPost(post);
      });
      $('#sidebar').append(item);
    });
  });
};
