# CS590 - Lab 3

## Lab Description:

### Part1: Youtube API

1.  Create an app that allows the user to search for a video based on a topic and load the video.


### Part2: Twitter Friends API

1. Retrieve the friends of a Twitter user using the REST API
2. Visualize the data using the D3.js API

## Technologies Used:
HTML, CSS, Bootstrap, AngularJS, Node.js, D3.js

## Knowledge Gained/Obstacles Overcame
For the Youtube App, I searched against the REST API based on a keyword/subject.
Once I had the return data, I created a list with links that included the video ID.
Using the video ID, I created an iframe element that would load the video.

For the Twitter Friends App, I used Node.js and D3.js.  Node.js was necessary for OAuth
authentication for use with the Twitter API.  I retrieved the data and exported it to a
json file.  D3 would parse the json file and create a tree based on the user searched for.
In this case, I used Gal Gadot.
