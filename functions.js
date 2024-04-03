function createElem(element, value) {
    document.createElement(element).innerHTML = value;
}
function createDetailedElement(element, className, id, value) {
    document.createElement(element + "." + className + "#" + id) = value;
}
function editElement(elementSelector, value) {
    $(elementSelector).value = value;
}
function deleteElement(elementSelector) {
    $(elementSelector).value = null;
}
function attributes(elementSelector, attribute, value) {
    document.querySelector(elementSelector).attribute = value;
}
function changeCSS(elementSelector, property, value) {
    $(elementSelector).css(property, value);
}
function animate(elementSelector, animationType, value, speed, afterFunc) {
    $(elementSelector).animate({animationType: value},speed,afterFunc)
}