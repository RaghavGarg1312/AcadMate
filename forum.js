document.addEventListener("DOMContentLoaded", function () {
  // Get all like and dislike buttons
  var likeButtons = document.querySelectorAll(".button--approve");
  var dislikeButtons = document.querySelectorAll(".button--deny");
  var commentSymbol = document.querySelectorAll(".button--flag");

  // Check if the user has already interacted with like/dislike buttons
  var userLiked = localStorage.getItem("userLiked") === "true";
  var userDisliked = localStorage.getItem("userDisliked") === "true";

  // Log to check if local storage items are retrieved correctly
  console.log("User Liked:", userLiked);
  console.log("User Disliked:", userDisliked);

  // Disable like/dislike buttons if user has already interacted
  if (userLiked || userDisliked) {
    likeButtons.forEach(function (button) {
      button.disabled = true;
    });
    dislikeButtons.forEach(function (button) {
      button.disabled = true;
    });
  }

  // Event listener for like buttons
  likeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("Like button clicked");
      if (!userLiked) {
        var likeCountElement =
          button.parentElement.querySelector(".like-count");
        var likeCount = parseInt(likeCountElement.textContent);
        likeCountElement.textContent = likeCount + 1;
        userLiked = true;
        localStorage.setItem("userLiked", "true");
        // Disable all like buttons
        likeButtons.forEach(function (btn) {
          btn.disabled = true;
        });
        // Disable all dislike buttons
        dislikeButtons.forEach(function (btn) {
          btn.disabled = true;
        });
      }
    });
  });

  // Event listener for dislike buttons
  dislikeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("Dislike button clicked");
      if (!userDisliked) {
        var dislikeCountElement =
          button.parentElement.querySelector(".dislike-count");
        var dislikeCount = parseInt(dislikeCountElement.textContent);
        dislikeCountElement.textContent = dislikeCount + 1;
        userDisliked = true;
        localStorage.setItem("userDisliked", "true");
        // Disable all dislike buttons
        dislikeButtons.forEach(function (btn) {
          btn.disabled = true;
        });
        // Disable all like buttons
        likeButtons.forEach(function (btn) {
          btn.disabled = true;
        });
      }
    });
  });

  // Add event listener to comment symbol
  commentSymbol.forEach(function (symbol) {
    symbol.addEventListener("click", function () {
      console.log("Comment button clicked");
      var commentForm = symbol
        .closest(".response")
        .querySelector(".comment-form");
      if (
        commentForm.style.display === "none" ||
        commentForm.style.display === ""
      ) {
        commentForm.style.display = "block";
      } else {
        commentForm.style.display = "none";
      }
    });
  });
});
