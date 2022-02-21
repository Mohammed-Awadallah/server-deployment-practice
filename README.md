# server-deployment-practice

## Notes:
So today we learned about TDD we learned that the main branch is something that can only pushed into if your specific tests have been passed so that the deployed server wont be affected so the best practice would be to work on a dev branch and push to it and then push to the main hence why we deployed 2 branches in heroku so the process will be as follows: 

 1. create your repo and add a workflow 
 2. create a dev branch
 3. create your tests using supertest and jest packages 
 4. initiate your server and start working according to the tests u have written
 5. once the tests have passed deploy the dev to heroku with checking the wait for ci to pass before deploy 
 6. if heroku deploys without any problem then u can merge the div with the main and then deploy the main checking the same thing
*we also learned that each function lets say of a server should be separate instead of putting them all in 1 js file which is best practice for example (having the routes in 1 js file)*

### Links : 

 - dev Heroku app : [click here](https://mohammedawad-server-deploy-dev.herokuapp.com/)
 - prod Heroku app :[click here](https://mohammedawa-server-deploy-prod.herokuapp.com/)
 - link to this readme :[click here](https://github.com/Mohammed-Awadallah/server-deployment-practice/blob/dev/README.md)