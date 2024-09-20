// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    window.location.href = 'home.html'; // Redirect to home page
});

// Home Page Functionality
if (document.querySelector('#home')) {
    const postForm = document.querySelector('.post-form');
    const postsContainer = document.querySelector('.posts');

    postForm.querySelector('button').addEventListener('click', function() {
        const textArea = postForm.querySelector('textarea');
        const postContent = textArea.value.trim();

        if (postContent) {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.innerHTML = `<h3>You</h3><p>${postContent}</p>
                                 <div class="post-actions">
                                     <button class="like-btn">Like</button>
                                     <button class="comment-btn">Comment</button>
                                 </div>`;
            postsContainer.prepend(postDiv);
            textArea.value = ''; // Clear the textarea
        } else {
            alert("Please enter a post before submitting.");
        }
    });
}

// Messages Page Functionality
if (document.querySelector('#messages')) {
    const messageForm = document.querySelector('.message-form');
    const messagesContainer = document.querySelector('.messages');

    messageForm.querySelector('button').addEventListener('click', function() {
        const textArea = messageForm.querySelector('textarea');
        const messageContent = textArea.value.trim();

        if (messageContent) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message';
            messageDiv.innerHTML = `<h4>You:</h4><p>${messageContent}</p>`;
            messagesContainer.appendChild(messageDiv);
            textArea.value = ''; // Clear the textarea
        } else {
            alert("Please enter a message before sending.");
        }
    });
}
