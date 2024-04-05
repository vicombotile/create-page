function createElem(element, value) {
    let txt = document.createElement(element)
    txt.innerHTML = value;
    $("body").append(txt)
}
function createDetailedElement(element, className, id, value) {
    let txt = document.createElement(element);
    $(element + ":empty").attr('id',id);
    $(element + ":empty").addClass(className);
    $(element + ":empty").html(value);
}
function editElement(elementSelector, value) {
    $(elementSelector).html = value;
}
function deleteElement(elementSelector) {
    $(elementSelector).remove();
}
function attributes(elementSelector, attribute, value) {
    $(elementSelector).attr(attribute,value)
}
function changeCSS(elementSelector, property, value) {
    $(elementSelector).css(property, value);
}
