document.addEventListener("DOMContentLoaded", function () {
    const currentPage = document.body.getAttribute("data-page");

    const BacktoIndex = document.createElement('div');
    BacktoIndex.textContent = 'Click to start again';

    BacktoIndex.style.position = 'absolute';
    BacktoIndex.style.top = '10px'; 
    BacktoIndex.style.right = '10px'; 
    BacktoIndex.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    BacktoIndex.style.padding = '4px';
    BacktoIndex.style.borderRadius = '4px'; 
    BacktoIndex.style.fontSize = '12px'; 
    BacktoIndex.style.zIndex = '1000';
    BacktoIndex.style.cursor = "pointer"; 
    BacktoIndex.style.opacity = "0.5";

    document.body.appendChild(BacktoIndex);

    BacktoIndex.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    if (currentPage === "index"){
        var wordContainer = document.getElementById("wordContainer");
        const closeIcon = document.getElementById("closeIcon");
        const nextLevel = document.getElementById("nextLevel");
        const FrontpageInstruction = document.getElementById("FrontpageInstruction");
        const IndexAd = document.getElementById("IndexAd");
        const Text = document.getElementById("Text");
    
    closeIcon.addEventListener("click", function () {
        wordContainer.style.display = "none"; 
        FrontpageInstruction.style.display = "none";
        nextLevel.style.display = "block"; 
    });

    IndexAd.addEventListener("click", function () {
        window.location.href = "end.html";
    });

    Text.addEventListener("click", function () {
        window.location.href = "end.html";
    });

    nextLevel.addEventListener("click", function () {
        window.location.href = "level1.html";
    });
    }

    if (currentPage === "level1")
    {
        var wordContainer1 = document.getElementById("wordContainer1");
        var wordContainer2 = document.getElementById("wordContainer2");
        var contentContainer1 = document.getElementById("contentContainer1");
        var contentContainer2 = document.getElementById("contentContainer2");
        var text1 = document.getElementById("Text1");
        var text2 = document.getElementById("Text2");
        var text3 = document.getElementById("Text3");
        var closeIcon1 = document.getElementById("closeIcon1");
        var closeIcon2 = document.getElementById("closeIcon2");
        var closeIcon3 = document.getElementById("closeIcon3");
        var nextLevel = document.getElementById("nextLevel");
        var FrontpageInstruction = document.getElementById("FrontpageInstruction");
        var IndexAd = document.getElementById("IndexAd");
        
        wordContainer1.style.backgroundColor = "LightGray";
        wordContainer2.style.backgroundColor = "LightGray";
        wordContainer3.style.backgroundColor = "LightGray";

    function checkContainers() {
        if (wordContainer1.style.display == "none" &&
            wordContainer2.style.display == "none" &&
            contentContainer2.style.display == "none") {
            nextLevel.style.display = "block";
        }

    }
    closeIcon1.addEventListener("click", function () {
        wordContainer1.style.display = "none";
        checkContainers();
    });

    closeIcon2.addEventListener("click", function () {
        wordContainer2.style.display = "none";
        checkContainers();
    });

    closeIcon3.addEventListener("click", function () {
        contentContainer2.style.display = "none";
        checkContainers();
    });

    text1.addEventListener("click", function () {
        window.location.href = "end.html";
    });

    text2.addEventListener("click", function () {
        window.location.href = "end.html";
    });

    text3.addEventListener("click", function () {
        window.location.href = "end.html";
    });

    IndexAd.addEventListener("click",function(){
        window.location.href = "end.html";
    });

    nextLevel.addEventListener("click", function () {
        window.location.href = "level2.html";
    });
    }

    if (currentPage === "level2")
    {
        var wordContainer = document.getElementById("wordContainer");
        var text1 = document.getElementById("Text1");
        var IndexAd = document.getElementById("IndexAd");
        var closeIcon1 = document.getElementById("closeIcon1");
        var nextLevel = document.getElementById("nextLevel");
        const timerElement = document.getElementById("timer");

        
        wordContainer.style.backgroundColor = "DeepPink";


        IndexAd.addEventListener("click",function(){
            window.location.href = "end.html";
        });

        text1.addEventListener("click", function () {
            window.location.href = "end.html";
        });
        
        closeIcon1.addEventListener("click", function () {
            if (timerElement.textContent == "0"){
            wordContainer.style.display = "none";
            nextLevel.style.display = "block";
            }
        });

        nextLevel.addEventListener("click", function () {
        window.location.href = "level3.html";
        });



        let timerValue = 10;
        const countdown = setInterval(() => {
            timerValue--;

            timerElement.textContent = timerValue;
            timerElement.style.opacity = 0.2;

        if (timerValue <= 0) {
            clearInterval(countdown);
            timerElement.textContent = "0"; 
            timerElement.style.display = "none";
            }
        }, 1000); 

    }

        if (currentPage === "level3") {
        var contentContainer = document.getElementById("contentContainer");
        var wordContainer = document.getElementById("wordContainer");
        var text1 = document.getElementById("Text1");
        var IndexAd = document.getElementById("IndexAd");
        var closeIcon1 = document.getElementById("closeIcon1");
        var nextLevel = document.getElementById("nextLevel");
        const timerElement = document.getElementById("timer");
        let PopoutExist = false;
        let isCountingDown = true;
        
        let timerValue = 15;

        timerElement.style.display = "none";

        const countdown = setInterval(() => {
            if (isCountingDown && timerValue > 0) {
                timerValue--;
                timerElement.textContent = timerValue;

                if (timerValue <= 0) {
                    clearInterval(countdown);
                    timerElement.textContent = "0";
                    timerElement.style.display = "none"; 
                }
            }
        }, 1000);

        wordContainer.style.backgroundColor = "DeepBlue";
        timerElement.style.color = "white";
        timerElement.style.opacity = "0.2";

        closeIcon1.addEventListener("click", function () {
            if (timerValue <= 0) {
                wordContainer.remove();
                nextLevel.style.display = "block";
            } else {
                timerElement.style.display = "none";
                isCountingDown = false;
                BacktoIndex.style.display = "none";

                const PopoutBox = document.createElement('content-container');
                PopoutExist = true;
                PopoutBox.className = 'contentContainer';

                PopoutBox.style.position = 'fixed';
                PopoutBox.style.top = '0';
                PopoutBox.style.left = '0';
                PopoutBox.style.width = '100%';
                PopoutBox.style.height = '100%';
                PopoutBox.style.fontSize = '30px';
                PopoutBox.style.backgroundColor = 'darkgrey';
                PopoutBox.style.color = 'white';
                PopoutBox.style.display = 'flex';
                PopoutBox.style.alignItems = 'center';
                PopoutBox.style.justifyContent = 'center';
                PopoutBox.style.zIndex = '3';

                document.body.appendChild(PopoutBox);

                const PopoutText = document.createElement('word-container');
                const Textpopped = document.createElement('h2');
                Textpopped.innerHTML = "Download our app from App Store!<br>Click here to fast download";

                PopoutText.appendChild(Textpopped);
                PopoutText.className = 'wordContainer';
                PopoutText.style.zIndex = '5';
                PopoutBox.appendChild(PopoutText);

                const closePopout = document.createElement('img');
                closePopout.src = 'whitecross.png';
                closePopout.className = 'close-icon';
                closePopout.style.cursor = 'pointer';
                PopoutBox.appendChild(closePopout);

                closePopout.addEventListener('click', function () {
                    PopoutBox.remove();
                    PopoutExist = false;
                    BacktoIndex.style.display = "block";
                    isCountingDown = true;
                    timerElement.style.display = "block";
                });

                PopoutText.addEventListener('click', function () {
                    window.location.href = "end.html";
                });
            }
        });

        IndexAd.addEventListener("click", function () {
            window.location.href = "end.html";
        });

        text1.addEventListener("click", function () {
            window.location.href = "end.html";
        });

        nextLevel.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }


    if (currentPage === "end")
    {
        var wordContainer = document.getElementById("wordContainer");

    wordContainer.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    }
});

