function createElem(element, value) {
    let txt = document.createElement(element)
    txt.innerHTML = value;
    $("body").append(txt)
}
function createDetailedElement(element, classNamed, idd, value) {
    let txt = document.createElement(element)
    txt.innerHTML = value;
    txt.className = classNamed;
    txt.id = idd;
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
