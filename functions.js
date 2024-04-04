function createElem(element, value) {
    let txt = document.createElement(element)
    txt.innerHTML = value;
    $("body").append(txt)
}
function createDetailedElement(element, className, id, value) {
    let txt = document.createElement((element + "." + className + "#" + id), value)
    txt.innerHTML = value;
}
function editElement(elementSelector, value) {
    $(elementSelector).html = value;
}
function deleteElement(elementSelector) {
    $(elementSelector).html = null;
}
function attributes(elementSelector, attribute, value) {
    document.querySelector(elementSelector).attribute = value;
}
function changeCSS(elementSelector, property, value) {
    $(elementSelector).css(property, value);
}
