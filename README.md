# Full Stack Microblogging Social Media Web Application

•	A full stack microblogging social media web application, which mirrors Twitter's functionality.

•	Users can sign up, log in or log out securely. On the Homepage, users can create dynamic and multimedia-rich posts, browse posts by other users, repost and like these posts and also reply to them.

•	Users can view their own profile, update profile details, view their own posts, reposts, liked posts and followers/following counts.

•	A user can view the post and all its details including replies by clicking on a post. A user can visit profiles of other users, follow/unfollow them, and view all of their posts and liked posts.



## Tech-stack (Frameworks, libraries, dependencies)
### Backend
* `Spring Boot 3.1.6` - Open-source Java-based framework  [Spring Boot Website](https://spring.io/projects/spring-boot)
* `Spring Security` - Java-based framework providing comprehensive authentication, authorization, and secure access control
* `JWT` - (JSON Web Token) is a compact, URL-safe means of representing claims between two parties [jwt dependencies](https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt)
* `MySQL` - Open-source relational database management system (RDBMS) that uses structured query language (SQL) for managing and manipulating data. [MySQL Website](https://www.mysql.com/)
* `Spring Web`, `Spring Data JPA`, `Lombok`, `Jackson`

###Frontend
* `React.js` - Library for web and native user interfaces to build user interfaces out of individual pieces called components written in JavaScript. [Website](https://react.dev/)
* `MUI` - Material-UI, a React UI framework that provides pre-designed components  [website](https://mui.com/)
* `Tailwind CSS` - Utility-first CSS framework [website](https://tailwindcss.com/)
* `redux`, `react-redux` - Managing state
* `formik` -  Handling form
* `axios` - Making HTTP request from browser
* `Cloudinary` - Cloud storage of images, videos [website](https://cloudinary.com/)


### Running the project 
* Install Eclipse or Spring Tool Suite, Spring Initializr can be used to create a starter project with required dependencies for Backend. This project uses Maven, Java 17, Spring Boot 3.1.6
* Install MySQL community server, configure the root and password and make changes in the backend's application.properties file.
* Install Visual Studio Code, and install the required dependencies (react, redux, axios, etc) from the terminal. More information about dependencies can be found in the frontend folder's package.json file.
* Create a cloudinary account, configure the database and make changes in the uploadToCloudinary.js file.
* Start the backend server by running it as Spring Boot App.
* 'npm start' can be used to view the react project in the browser.

## Outputs

* Signup / Login page
![pic0](output_images/pic0.png)
-------------------------------
* Create Account
![pic1](output_images/pic1.png)
-------------------------------
* Login
![pic2](output_images/pic2.png)

* Home
![pic3](output_images/pic3.png)

* User's posts on Home
![pic4](output_images/pic4.png)

* Reply, Repost and Like a user's post on Home
![pic5](output_images/pic5.png)

* Reply to a post
![pic6](output_images/pic6.png)

* View a post by a user and all its replies
![pic7](output_images/pic7.png)

* Profile page, view your details, followers and followings counts
![pic8](output_images/pic8.png)

* View your own posts, reposts and liked posts
![pic9](output_images/pic9.png)
![pic9_1](output_images/pic9_1.png)

* Edit Profile
![pic10](output_images/pic10.png)

* View profiles of other users, follow/unfollow them, view their posts, reposts and liked posts
![pic11](output_images/pic11.png)

* Delete your post
![pic12](output_images/pic12.png)

* Logout
![pic13](output_images/pic13.png)

* Get Verified (only frontend)
![pic14](output_images/pic14.png)
