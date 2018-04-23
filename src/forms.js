const createPostFormView = () => {
  return `
    <section id="view-post">
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title">
        </div>
        <div class="form-group">
          <label for="content">Post</label>
          <textarea class="form-control" id="content" rows="5"></textarea>
        </div>
        <button id="submit-post-button" type="submit" class="btn btn-primary">Create Post</button>
      </form>
    </section>
  `;
}

const renderCreatePostForm = () => {
  $('#view').html(createPostFormView());
  window.location.hash = '#/posts/new';

  $('#submit-post-button').click(() => {
    const title = $('#title').val();
    const content = $('#content').val();
    createPost(title, content).then((response) => {
      const post = response.data.post;
      window.location.hash = `#/posts/${post.id}`;
      renderSidebar();
      renderPost(post);
    });
  });
}

const renderEditPostForm = (post) => {
  $('#view').html(createPostFormView());
  $('#title').val(post.title);
  $('#content').val(post.content);
  $('#submit-post-button').text('Update Post');
  window.location.hash = `#/posts/${post.id}/edit`;

  $('#submit-post-button').click(() => {
    const title = $('#title').val();
    const content = $('#content').val();
    updatePost(post.id, title, content).then((response) => {
      const newPost = response.data.post;
      window.location.hash = `#/posts/${newPost.id}`;
      renderPost(newPost);
      renderSidebar();
    })
  })
}
