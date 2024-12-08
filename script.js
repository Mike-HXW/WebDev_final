document.addEventListener("DOMContentLoaded", function () {
    const wordContainer = document.getElementById("wordContainer");
    const closeIcon = document.getElementById("closeIcon");
    const nextLevel = document.getElementById("nextLevel");
    const FrontpageInstruction = document.getElementById("FrontpageInstruction");
    const IndexAd = document.getElementById("IndexAd");

    

    // Hide the word container when the cross icon is clicked
    closeIcon.addEventListener("click", function () {
        wordContainer.style.display = "none"; // Hide the word container
        FrontpageInstruction.style.display = "none";
        startMessage.style.display = "block"; // Show the second word container
    });

    IndexAd.addEventListener("click", function () {
        window.location.href = "end.html";
    });

    // Redirect to content.html when the second word container is clicked
    nextLevel.addEventListener("click", function () {
        window.location.href = "content.html";
    });
});
//sessionStorage.setItem("variable1", "Hello");