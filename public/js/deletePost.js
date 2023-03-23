const deletePostHandler = async (event) => {
    const post_id = event.target.getAttribute('data-post-id');
  
    const response = await fetch(`/api/posts/${post_id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      // If successful, reload the page to update the post list
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  };
  
  document
    .querySelector('.delete-post-btn')
    .addEventListener('click', deletePostHandler);
  