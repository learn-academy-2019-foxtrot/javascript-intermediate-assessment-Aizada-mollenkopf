# ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What are the HTTP verbs? Which CRUD action corresponds to each verb?

  Your answer: HTTP verbs are:POST,GET,PUT/PATCH,DELETE.

  Researched answer:The HTTP verbs comprise a major portion of our “uniform interface” constraint and provide us the action counterpart to the noun-based resource. The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations, respectively. There are a number of other verbs, too, but are utilized less frequently. Of those less-frequent methods, OPTIONS and HEAD are used more often than others.
GET-READ
POST-CREATE
PUT/PATCH-UPDATE
DELETE-DELETE


2. Why would you use object destructuring?

  Your answer:It allows us to extract properties from an object or items from an array, multiple at a time

  Researched answer: The destructuring assignment is really just a special way of assigning variables in Javascript. What's great about the destructuring assignment is that it allows you to take something like an array or an object and unpack their values into individual variables. This is probably the most immediately useful type of destructuring. When destructuring an object you are essentially taking the properties of an object and breaking them out into individual, recallable variables.



3. Why is testing important?

  Your answer: Testing is very important in coding, because any misstake  may cause critical situations.
  Researched answer: Code testing is important because it helps you find bugs easily. ... When we write our code - we always should test it and make sure it works as we intended .


4. What is the difference between a class and an object?

  Your answer: Classes and objects from the essential part of Object-oriented programming, where a class can be considered as a construct which encapsulates a group of variables and methods; whereas, an object acts as member or instance of that class.

  Researched answer: A class is a template for objects. A class defines object properties including a valid range of values, and a default value. A class also describes object behavior. An object is a member or an "instance" of a class. An object has a state in which all of its properties have values that you either explicitly define or that are defined by default settings.


5. What did you learn during the group project this week? Please include any additional feedback you may have.

  Whiteboard first,take breaks



### HTML/CSS Review questions: First, try to answer each question on your own then Google the answer to further your knowledge.

1. How do you link a CSS file to your HTML page?

  Your answer: <link rel="stylesheet" type="text/css" href="stylesheet.css" media="screen"/>

  Researched answer: To link CSS to an HTML file, we use the <link> tag that you put in the HTML’s <head> section. The link will look like this:
                    <link rel="stylesheet" type="text/css" href="stylesheet.css" media="screen"/>

2. What is the difference between a div and a span?

  Your answer: In short <div> is a block tag, while <span> is an inline tag.
  <div id="scissors">
   <p> <span class="paper"></span></p>
</div>

  Researched answer: The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.


3. What is a CSS class? When should you use an id instead of a class?

  Your answer:ID used once
         Class can be reused

  Researched answer: The class selector uses the HTML class attribute, and is defined with a "." id is used when we have to apply CSS property to one attribute only. class is used when we have to use CSS property in many locations within the same page or different.


4. Name 4 semantic HTML tags.

  Your answer: <var>,<footer>,<main>,<blockquote>,<main>,<video>

  Researched answer:<var>,<footer>,<main>,<blockquote>,<main>,<video>


5. What are three options for creating responsive design?

  Your answer: Media queries,Fluid grids,Flexible images. 

  Researched answer:Media queries,Fluid grids,Flexible images.
  Media queries let you design different layouts for different media types like screen, print, TV, handheld devices etc. 
  “Fluid grid” is a term used to describe a layout that is coded in relative proportions of the various elements, rather than with fixed pixel values.
  Images are deemed flexible when the image renders in native size, as long as the HTML container supports it, but when the browser window shrinks, the image scales to fit it.
  


### STRETCH: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

  Your answer:Responsive desighn development, HTML, CSS, and JavaScript, IOS and Android, React Native,Android-java,IOS-Swift maybe objective C

  Researched answer:Front-end web development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.
 Front-End Dev Skills:
 Basic to advanced HTML, CSS, DOM, JavaScript, HTTP/URL, and browser skills are assumed for any type of front-end developer.


2. What is block scope in JavaScript?

  Your answer: Block scope is everything between{}

  Researched answer:A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.
function foo(){
    if(true){
        var fruit1 = 'apple';        //exist in function scope
        const fruit2 = 'banana';     //exist in block scope
        let fruit3 = 'strawberry';   //exist in block scope

    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

foo();
//result:
//apple
//error: fruit2 is not defined
//error: fruit3 is not defined

3. How would you explain the idea of "inheritance" in object oriented programming? 

  Your answer: Child classes can make use of methods on parents

  Researched answer:In object-oriented programming, inheritance is the mechanism of basing an object or class upon another object (prototype-based inheritance) or class (class-based inheritance), retaining similar implementation. Also defined as deriving new classes (sub classes) from existing ones (super class or base class) and forming them into a hierarchy of classes. 
