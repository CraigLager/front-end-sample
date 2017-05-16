# Front End Basic Template

## Running this template
You need a webserver in any sort of flavour. There are no dependencies on any server side languages, the whole sample is essentially a static site. The [chrome web server](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) is excellent.

## What you should be editing
Any files within `/views` and `/css` can be freely edited. Feel free to add new files as needed.

## What you probably shouldn't be editing
Any other files, including `index.html`. That said, if you really need to or want to - go ahead, but please document why.

## Build tools
Use of SASS, LESS, and any other build tools you want are permitted. However, what is sent back to us should be considered production ready and not need any processes running to work.

## Angular
This project uses angular, however you won't need to dig into any JS files to make it work. Samples are included in the views for rendering data. If you know more advanced angular techniques, feel free to show off, but it is not required.

For reference, here are explanations for the few bits of angular syntax already included, which should be everything you need:

### ng-controller
Defines which variables are available to the markup inside this element. The javascript console will output things from different controller files, which match up to these controller declarations. For example

`category > Object {id: 1, title: "For Him", content: "Same content for category 1", productIds: Array(5)} > categorycontroller.js`

is the category controller outputting that it has a category object available, so this is possible:

```
<div ng-controller="categoryController">
	{{category.Id}}
</div>
```

### {{}}
Outputs an angular variable onto the page. Samples are included for what variables are available. Check the javascript console for more information on available data.

### ng-repeat
Repeats an element for an array of objects. For example

```
x = [1,2,3]
```
```
<li class="list" ng-repeat="num in x">{{num}}</li>
```

would ouput

```
<li class="list">1</li>
<li class="list">2</li>
<li class="list">3</li>

```