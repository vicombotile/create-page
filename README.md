# Commands

Please use these commands to edit the page in the console:

createElem(element, value)
createDetailedElement(element, class, id, value)
editElement(elementSelector, value)
deleteElement(elementSelector)

attributes(elementSelector, attribute, value)  
changeCSS(elementSelector, property, value)

# Elements

Use these elements in the createElem() and createDetailedElem()functions.

paragraph: A normal paragraph.
bigHeader: A large header.
smallHeader: A small header.
bold: A bold paragraph.
input: An input, edit in the document
image: An image, edit the source with the src attribute.
button: A button.
link: A link to a website

Please put any custom text in quotes.

# Functions 

Coming soon! ;)

# Attributes

These are attributes to use in the attributes() function.

clicked: The function that will occur when a button is clicked.
value: The text inside an input.
source: The source of an image.
wwwSource: The source of a website on the web.
width: The width of an element.
height: The height of an element.

# Images

Image sources to use in image elements. Please enclose in quotes.

apple.png
rocket.png
food.png
person.png
flag.png
number.png
continent.png
pencil.png
game.png

# Warnings

Please do not use the editElement() function to edit an input element, instead use the value attribute to change it's value.

Also, use quotes to add custom text, like "Hello, World!" or "Header".

Next, do not mismatch attributes & elements, it will cause unexpected things to occur