#My Process
I began this project by reading through the requirements a couple of times to make sure I understood what I needed to do. 

###Starting
I decided to start by adding a console log to the index.js page to make sure it was connected and working.  I tried to create a separate CSS page but found I was unable to as I got an error when I added the link tab.  I asked a fellow classmate and one of my instructors but they were not able to help me attach the page.  

###Landing Page
I created the radio buttons for sitting and boarding before starting on the javascript by creating an ajax call to pull the json data to the front. Once I could see the object in a console.log, I focused into each piece of data to make sure I could get to the desired information. 

###Looping through Data
For this piece, I created a for-loop and focused into each piece of data _ starting with the first name.  I found that I could simply use the text-transform, capitialize attribute to capitalize the first letter and then appended the field in the html to the content id. Next, I worked on the last name by slicing the last name string after the first letter and adding a . before adding it to the first name.  I then moved onto the pet name. 

###Back to the form
I worked on the form using the radio buttons to route to the boarding and sitting json data depending on which button was selected.  I noticed in the url that it was static/search.json/?service and then the search parameters, so I made the "get" of the form static/search.json?, named both parameters "service," and set the values to "boarding" or "sitting" respectively.  I then set my href for just the .json data since I realized that I would need to give both radio buttons the same name so as to ensure that only one button could be selected at a time.   

###Back to Looping through data
As I finally jumped into what I believed to be the most complex aspect of this project, I started by going back to the ajax call and working on the description field.  To do this, I first checked if the description string length was less than the max 48 characters.  If this was true, I simply appended it to the html.  If the string was longer, I cut the string at 48 then created another for loop to loop backwards through the cut string looking for a space.  When a space was found, I cut the string and added the elipses before appending it in the html.  I realized early-on that the loop I created did not stop cutting at the first space, so I added a counter requirement to the loop that counted each loop to ensure that it only cut at the first space.  My next step was to work on adding a hyperlink to each title.  I started by console logging the title, then took out the spaces and added dashes.  I found that one of the titles had a space at the beginning, so I trimmed the string and eliminated the apostrophe.  As I began to wrap up, I created a counter to simulate an id for each posting.  Finally, I added the newly formatted title to the title tag as a hyperlink.  

###Stying
After finishing the code, I did one final test to make sure everything was working as expected, which also included making sure I looked back through the code to see if it was easily readable and as simplified as possible. Lastly, I added some CSS to make it a little more presentable, knowing that I did not want to do too much since I was working in the html file.  If I could have managed to attach a separate CSS page, I would have not only added my CSS into that file but I likely also would have added more robust styling to the project.


# PetList Test
> These are a few modules of the 'Search Page' on our site.  
To view how the search page acts go to https://dogvacay.com/browse
We will be pseudo implementing some of the modules.

Write your JavaScript code in Vanilla JavaScript.  
You can write it in ES5 or ES6.
The 'Test' files are to make sure the project works.
You should spend only a few hours on this. i.e. no more then 4 hours.

## Goals
We are trying to get a sense of your day to day skills, and ability to write production ready code.
Treat this as a small project in which you would do for an actual job.

We are going to be examining how you approach the problem and solve it.
How you go about organizing your code.
When creating your code, realize that this code will have to be maintained by other members of your team.

The endpoints below will return the same data. We just want you to interact with the endpoint.
i.e. the data you get back from search.json will be the same as search.json?service=boarding or search.json?service=sitting

## Endpoints you will need:
```
  http://localhost:3000
  http://localhost:3000/static/search.json
  http://localhost:3000/static/search.json?service=boarding
  http://localhost:3000/static/search.json?service=sitting
```
## User Stories

__GIVEN__: A user comes to a search page  
__WHEN__: The user views the page  
__THEN__: They will see the results from the search.json above with the following fields:   

* Title
* Url
* First Name with Last Initial
* Pet Name
* Description


These are the rules for each field:
* Url
 * dashes for spaces
 * Only alpha numeric characters, underscore and dashes
 * no double dashses
 * i.e:
    * one two three => one-two-three
    * one two  three => one-two-three
    * one--two-three => one-two-three
* First Name with Last Initial
  * Capitalize the first character of the first name and last name
  * i.e.
    * seth broomer => Seth B.
* Description
  * At 48 characters and above we want to show ellipses
  * If the 48th character is in the middle of a word then we want to not show that word.
  * ie:
    * word1 description1 word2 description2 word3 description3 word4 description4 => word1 description1 word2 description2 word3...    

Use http://localhost:3000/static/search.json API  

__GIVEN__: A user comes to a search page  
__WHEN__: The user clicks on the boarding filter  
__THEN__: Then they will see the results from the search.json  with the service=boarding specified.  
Use http://localhost:3000/static/search.json?service=boarding API  

__GIVEN__: A user comes to a search page  
__WHEN__: The user clicks on the sitting filter  
__THEN__: Then they will see the results from the search.json  with the service=sitting specified.  
Use http://localhost:3000/static/search.json?service=sitting API  


### Example page
![](./example/example.png)

## Installing

You will need [Node](https://nodejs.org/en/) installed on your machine. Once installed in your terminal, `cd` to the project directory and run `npm install`.

Once your dependencies are installed, you can run the command `npm run dev`. And you are ready to start coding.

## Help
Do whatever you feel you need to get this done or finished.
(Feel free to google if you need to!) But if you have any questions about the test itself or what
you need to do feel free to email Seth Broomer <seth@dogvacay.com>.

## Submission
Feel free to create a github repository and send us the link (encouraged!) or if you're more comfortable,
feel free to just send us a zip file with your code their.
