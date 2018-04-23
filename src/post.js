const blogPostTemplate = (post) => {
  return `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
    <button id="delete" type="button" class="btn btn-outline-danger float-right">Delete</button>
    <button id="edit" type="button" class="btn btn-outline-primary mr-3 float-right">Edit</button>
  `;
}

const renderPost = (post) => {
  $('#view').html(blogPostTemplate(post));
  window.location.hash = `#/posts/${post.id}`;

  $('#delete').click(() => {
    deletePost(post.id).then(() => {
      window.location.hash = '';
      window.location.reload();
    });
  });

  $('#edit').click(() => {
    renderEditPostForm(post);
    window.location.hash = `#/posts/${post.id}/edit`;
  });
}

const getAllPosts = () => {
  return axios.get(`${baseURL}/posts`);
}

const getPostById = (id) => {
  return axios.get(`${baseURL}/posts/${id}`);
}

const createPost = (title, content) => {
  return axios.post(`${baseURL}/posts`, { title, content });
}

const deletePost = (id) => {
  return axios.delete(`${baseURL}/posts/${id}`)
}

const updatePost = (id, title, content) => {
  return axios.put(`${baseURL}/posts/${id}`, { title, content });
}
