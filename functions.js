function createElem(element, value) {
    let txt = $("<"+element+">"+"</"+element+">").html(value);
    $("body").append(txt)
}
function editElement(elementSelector, value) {    
    $(elementSelector).html(value)
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
const SVG = {
    stroke: " stroke=black stroke-width=6",
    Root: (width, height) => {
        let SVG = $("<svg baseProfile='full' width="+width+" height="+height+" xmlns='http://www.w3.org/2000/svg'></svg>")
        $('body').append(SVG)
    },
    Circle: (xpos, ypos, radius) => {
        let circle = $('<circle x='+xpos+' y='+ypos+' radius='+radius+this.stroke+'/>')
        $('svg').append(circle)
    },
    Rect: (xpos, ypos, width, height) => {
        let rect = $('<rect x='+xpos+' y='+ypos+' width='+width+' height='+height+this.stroke+'/>')
        $('svg').append(rect)
    },
    Ellipse: (xpos, ypos, x_radius, y_radius) => {
        let ellipse = $('<ellispe x='+xpos+' y='+ypos+' rx='+x_radius+' ry='+y_radius+this.stroke+'/>')
        $('svg').append(ellipse)
    },
    
}



const paragraph = "p";
const bigHeader = "h1"
const smallHeader = "h3"
const bold = "b"
const input = "input"
const image = "img"
const button = "button"
const link = "a"
const clicked = "onclick"
const value = "value"
const source = "src"
const wwwSource = "href"
const width = "width"
const height = "height"
