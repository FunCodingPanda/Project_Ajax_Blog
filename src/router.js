const postRoute = /\/posts\/(.+)\/?$/; // matches /posts/123 or /posts/123/
const createPostRoute = /\/posts\/new\/?$/; // matches /posts/new or /posts/new/
const editPostRoute = /\/posts\/(.+)\/edit\/?/; // matches /posts/123/edit or /posts/123/edit/

const initializeRoutes = () => {
  let route = window.location.hash.replace('#', '')
  if (route.match(editPostRoute)) {
    const id = route.match(editPostRoute)[1];
    getPostById(id).then((response) => {
      renderEditPostForm(response.data.post);
    });
  } else if (route.match(createPostRoute)) {
    renderCreatePostForm();
  } else if (route.match(postRoute)) { //the route info matches up with the postRoute regex eg. ["/posts/3", "3", index: 0, input: "/posts/3"]
    const id = route.match(postRoute)[1]; // extracts the id from a route like /posts/42
    getPostById(id).then((response) => {
      renderPost(response.data.post);
    });
  } else {
    getAllPosts().then((response) => {
      renderPost(response.data.posts[0])
    });
  }
}
