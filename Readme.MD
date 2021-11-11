# Glass Lewis Code Challenge 2021

# Introduction

# Question 1 - Requirements (Answer)
## Description:
- As a user I want to reach out the http://www.glasslewis.com website, so I can use the website functionalities
- As a user I want to see the login button on the top right of the page, so I can log into the Viewpoint application
- As a user I want to see a smooth drop-down effect after hovering on the Login button, so I can decide which system do I want to log in
- As a user I want to arrive to the Viewpoint login page after clicking on the Login button, so I can log into the application
- As a user I want to log into the Viewpoint with the right credentials, so I can use the application
- As a user I want to get feedback in the case of wrong credentials, so I can identify why I can't log in

### Additional scenarios for the login page
- As a user I want to reset my password, so I can log into the application if I forgot my password
- As a user I want to see the 'Sign in with SSO' option on the Viewpoint login page, so I can log into the application with my SSO credentials

## Acceptance criteria:
### Functional
- The http://www.glasslewis.com website is available
- I can see the login button on the top right of the page
- I can hover over the login button and the login options appears
- On the Viewpoint login page I can log into the application with the right credentials
- On the Viewpoint login page I get back informative error message about why I can't log in
  - If the fields are empty: 'The fields USERNAME and PASSWORD are required.'
  - If the credentials are wrong: 'The fields USERNAME and PASSWORD are required.'
- On the Viewpoint login page I can reset my password with the 'Forgot your password?' button
- On the Viewpoint login page I can navigate forward with clicking on the 'Sign in with SSO' if I want to use SSO credentials for login

### Non-Functional
- The website loads within 5 second
- I can see a transition effect after hover over on the login button on the top right of the page
- I hover over the login button for Viewpoint and the button changes color from blue to orange
- On the Viewpoint login page I can see the "GlassLewis Viewpoint" picture
- The login functionality on the Viewpoint page is aligned in the middle
- The 'Sign in' button is blue
- The 'Forgot your password?' button is grey
- The 'The fields USERNAME and PASSWORD are required.' message text color is white and the background color of the text is black
- The 'Invalid username or password' message text color is white and the background color of the text is black

# Question 2 - Automation (Answer)

## Technology uses
- Cypress
- JavaScript
- Pycharm (IDEA)
- Docker

## How to run the project with different configuration
### How to run the project with Cypress
### How to run the project with headless mode
### How to run the project with Chrome
### How to run the project with Firefox


## Prerequisite:

- Install nodejs and npm from the official website
- Install docker from the official website
  - pull down the latest cypress image
  ```commandline
  docker pull cypress/included:8.7.0  
  ```
- This includes two browsers(Chrome and Firefox) and the most important dependencies
- With terminal go into the project folder and type
  - npm install --save-dev cypress 
    - This will create a sample project
    - I deleted the unused files
This will create my docker image:


## Containerization
For this I am using Docker

- docker-compose.yml
  - In this file we can write configuration about how to want to run our project
  - How to run a project with docker:
    - Go into the project folder
    - "docker compose up"

### How to create docker image file
- With this functionality I can create my own docker image so everybody cna run the same project on each machine 

How to create image with terminal:
- Go into he project folder
- Type the following command:
```commandline
docker build -t cypress-image-ig:1.1.0 .
```

# BUG
I get back 'fe43e6fb-f97b-4fd3-b549-5362a6db1016' error message if the username length is more than 50 character long
- Username:
  - testtesttesttesttesttesttesttesttesttesttesttesttest
- Password:
  - test

Screenshot:
![alt text](cypress/bug/errorMessageBug.png)

- Solution: Set a hardcoded length for Username in the HTML code like this:
```HTML
<input name="Username" type="text" id="username" value="" class="loginCtrl" maxlength="10">
```