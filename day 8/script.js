function clonediv(currdiv) {
    var copy = currdiv.cloneNode(true);
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    copy.style.backgroundColor = randomColor;
    copy.textContent = "new version";
    document.body.append(copy);
}
var screen = document.getElementById("result");
function enternumber(val) {
    if (!screen) screen = document.getElementById("result");
    screen.value += val;
}
function clear() {
    screen.value = "";
}
function calculate() {
    try {
        screen.value = eval(screen.value);

    }
    catch (error) {
        screen.value = "there ia an error";
    }
}

function changeFont(fontName) {
    var para = document.getElementById("text-para");
    if (para) para.style.fontFamily = fontName;
}

function changeColor(colorName) {
    var para = document.getElementById("text-para");
    if (para) para.style.color = colorName;
}

function transformPage() {
    var originalImg = document.getElementById("teddy-img");
    var navList = document.getElementById("nav");
    var navigationDiv = document.getElementById("navigation");

    if (navList) {
        navList.style.listStylePosition = "inside";
        navList.style.textAlign = "left";
    }

    if (navigationDiv) {
        navigationDiv.style.display = "inline-block";
        navigationDiv.style.marginLeft = "20px";
    }

    if (originalImg) {
        originalImg.style.float = "right";
        originalImg.style.marginRight = "50px";

        var teddyCopy = originalImg.cloneNode(true);
        teddyCopy.classList.add("bottom-left-img");
        teddyCopy.style.float = "none";
        document.body.append(teddyCopy);
    }
}