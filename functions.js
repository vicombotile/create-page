function createElem(element, value) {
    let txt = $("<"+element+">"+"</"+element+">").html(value);
    $("body").append(txt)
}
function editElement(elementSelector, value) {
    $(elementSelector).html = value;
}
function createDetailedElement(element, className, id, value) {
    let txt = $("<"+element+" class="+"'"+className+"' "+"id="+"'"+id+"' "+">"+"</"+element+">").html(value);
    $("body").append(txt)
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
