** Read in other languages: [Russian] (README.md), [Ukrainian] (README.ua.md), [ENGLISH] (README.en.md). **

# Admission criteria

- Created repository `goit-js-hw-07`
- When submitting homework, there are two links: to the source files and the working
  page on GitHub pages
- The task is completed strictly according to the TK
- Each task is executed in a separate file named `task-task_number.js`.
- When visiting the work page (GitHub pages) of the job, there are no errors in the console and
  warnings
- The names of variables and functions are clear, descriptive
- Code formatted with Prettier

## Start files

In the folder [src] (./ src) you will find the starting files of the project with basic markup and
included script files for each task.

## Exercise 1

The HTML contains a list of `ul # categories` categories.

`` '' html

<ul id = "categories">
  <li class = "item">
    <h2> Animals </h2>

    <ul>
      <li> Cat </li>
      <li> Hamster </li>
      <li> Horse </li>
      <li> Parrot </li>
    </ul>

  </li>
  <li class = "item">
    <h2> Products </h2>

    <ul>
      <li> Bread </li>
      <li> Parsley </li>
      <li> Curd </li>
    </ul>

  </li>
  <li class = "item">
    <h2> Technology </h2>

    <ul>
      <li> HTML </li>
      <li> CSS </li>
      <li> JavaScript </li>
      <li> React </li>
      <li> Node </li>
    </ul>

  </li>
</ul>
``,

Write a script that will perform the following operations.

Will count and display to the console the number of categories in `ul # categories`, that is
elements of `li.item`. You get `` 'There are 3 categories in the list.' '

For each `li.item` item in the` ul # categories` list, it will find and output to
console text of the title of the element (h2 tag) and the number of items in the category
(all nested `li` elements).

For example, for the first category you get:

- Category: Animals
- Number of elements: 4

## Task 2

HTML has an empty `ul # ingredients` list.

`` '' html

<ul id = "ingredients"> </ul>
``,

JS has an array of strings.

`` `js const ingredients = [ "Potato", "Mushrooms" "Garlic", "Tomatoes" "Greens", "Seasonings" ]; ``,

Write a script that, for each element of the `ingredients` array, creates
a separate `li`, after which it will insert all` li` in one operation into the list
`ul.ingredients`. Use document.createElement () to create DOM nodes.

## Task 3

Write a script to create a gallery of images from an array of data.

There is a list of `ul # gallery` in the HTML.

`` '' html

<ul id = "gallery"> </ul>
``,

Use an array of `images` objects to create` img` tags nested within `li`.
Use template strings and `insertAdjacentHTML ()` to create your markup.

- All gallery elements should be added to the DOM in one insert operation.
- Add minimal gallery design with flexboxes or grids via
  css classes.

`` `js const images = [ { url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "White and Black Long Fur Cat", }, { url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Orange and White Koi Fish Near Yellow Koi Fish", }, { url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Group of Horses Running", }, ]; ``,

## Task 4

The counter consists of a span and buttons that must increase and decrease
counter value by `1`.

- Create a variable `counterValue` that will hold the current value
  counter.
- Create functions `increment` and` decrement` to increase and decrease the value
  counter
- Add listeners for button clicks, function calls and interface updates

`` '' html

<div id = "counter">
  <button type = "button" data-action = "decrement"> - 1 </button>
  <span id = "value"> 0 </span>
  <button type = "button" data-action = "increment"> + 1 </button>
</div>
``,

## Task 5

Write a script which, when typing in the input `input # name-input` (event
input), substitutes its current value in `span # name-output`. If the input
empty, the string `` stranger '' should be displayed in the span.

`` '' html
<input type = "text" placeholder = "What is your name?" id = "name-input" />

<h1> Hello <span id = "name-output"> stranger </span>! </h1>
``,

## Task 6

Write a script that checks its contents when the focus is lost on an input
by the correct number of characters.

`'' html <input type = "text" id = "validation-input" data-length = "6" placeholder = "Please enter 6 characters" />`,

- How many characters should be in the input, indicated in its attribute
  `data-length`.
- If a suitable amount is entered, the input `border` turns green,
  if wrong, red.

To add styles, use the `valid` and` invalid` CSS classes.

`` `css

# validation-input {

border: 3px solid #bdbdbd;
}

# validation-input.valid {

border-color: # 4caf50;
}

# validation-input.invalid {

border-color: # f44336;
}
``,

## Task 7

Write a script that reacts when the value of `input # font-size-control` changes
(input event) and changes the inline style of `span # text` by updating its
state`font-size`. As a result, when dragging the slider, the size will change.
text.

`'' html <input id = "font-size-control" type = "range" /> <br /> <span id = "text"> Abracadabra! </span>`,

## Task 8 - optional, optional

Write a script to create and clean up a collection of items. User enters
the number of elements in `input` and clicks the` Create` button, after which
the collection is rendered. When you click on the `Clear` button, the collection of items
cleared.

Create a `createBoxes (amount)` function that takes 1 `amount` parameter -
number. The function creates as many divs as specified in amount and adds them
in `div # boxes`.

Each div created:

- Has a random rgb background color
- The dimensions of the very first div are 30px by 30px
- Each subsequent div after the first must be wider and higher than the previous one by
  10px

Create a `destroyBoxes ()` function that cleans up the `div # boxes`.

`` '' html

<div id = "controls">
  <input type = "number" min = "0" max = "100" step = "1" />
  <button type = "button" data-action = "render"> Create </button>
  <button type = "button" data-action = "destroy"> Clear </button>
</div>

<div id = "boxes"> </div>
``,
