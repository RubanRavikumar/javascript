function generateRectangle(colour = ""){
    const div = document.createElement("div");
    div.setAttribute("class","rectangle");
    div.setAttribute("style",`background:${colour}`);
    return div;
}

document.body.appendChild(generateRectangle("red"));
document.body.appendChild(generateRectangle("green"));