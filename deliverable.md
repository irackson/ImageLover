## Image Lover

The Goal in this lab should be to create an app where users can track their favorite images, Image Lover. Follow the same pattern as the UserGoals app in today's lesson.

## Setup

-   generate a project using the EJS/Express/Mongo Supreme template `npx degit AlexMercedCoder/ejs-express-supreme#main imagelover`

-   cd into the `imagelover` folder

-   install dependencies `npm install`

-   rename template.env into .env and add your mongodb url to the MONGODB_URL variable

## Steps

-   Create an image schema with one property `url: String` for the images url

-   Create your user schema with an array of images as a property as an embedded relationship

-   Create your signup get and post routes

-   create your login get and post routes

-   create your logout route

-   create a get route to /images where the user will land after logging in displaying their images with a form to add more

## Hungry For More

-   Add the ability to update and delete images
-   Use Bulma to give your application an aesthetic responsive design
-   Use the EJS partials to have a consistent header and footer
