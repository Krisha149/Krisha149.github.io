Demo:--

![demo](https://github.com/user-attachments/assets/5645fb35-5232-411c-8738-790e56cc6ede)



##Table of Contents:

1) About The Project
2) Built With
3) Getting Started
   ->Prerequisites
   ->Installation

   
***About The Project:***
The motivation behind this project was to create a sophisticated application which requires in-depth planning to execute. This is without a doubt the most ambitious project I've done so far.
When I set out to build this app I only had basic knowledge of React, and learning by doing proved to be the best way to pick up React fast.

***Built With:***
django
react
django-rest-framework
djangorestframework-simplejwt
Material UI

-->Implementation details:
This project utilizes a django backend and a React frontend.

The django backend is implemented as a REST API using django-rest-framework. The react frontend uses react-router-dom for routing. Additionally, I heavily used material-ui for React components and design inspiration.

Authentication is achieved using JWT.

All forms have error highlighting with relevant messages,

Error highlighting

This is achieved by response from the API, not checked manually using JavaScript.

***Getting Started:***
To get a local copy up and running follow these steps.

   -->Prerequisites:
      npm
      npm install npm@latest -g
      pip
      python -m pip install --upgrade pip
      
  -->Installation
     Clone the repo
     git clone https://github.com/Krisha149/Recipe-Book-
     Install NPM packages
     cd react/homemakerapi
     npm install
     Install pip packages
     cd django
     pip install -r requirements.txt
     
  -->Start
     **Backend**
     cd django
     python manage.py migrate
     python manage.py runserver
     **Frontend**
     cd react/homemakerapi
     npm start
