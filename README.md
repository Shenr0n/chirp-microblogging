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
* 

## Outputs

* Signup / Login page

![pic0](https://private-user-images.githubusercontent.com/20452759/287497516-0754d26e-ac12-484c-8505-863f7204428b.png)

* Create Account
![pic1](https://private-user-images.githubusercontent.com/20452759/287497613-de98cf9c-4437-449f-bd29-dfdf860292ff.png)

* Login
![pic2](https://private-user-images.githubusercontent.com/20452759/287497614-adc094aa-4492-45ed-b69f-971aa259e467.png)

* Home
![pic3](https://private-user-images.githubusercontent.com/20452759/287497615-86228920-5e4a-45f6-8a2f-f2fda78ee4fe.png)

* User's posts on Home
![pic4](https://private-user-images.githubusercontent.com/20452759/287497616-07099a44-c792-441e-9456-3dbb5b9359ad.png)

* Reply, Repost and Like a user's post on Home
![pic5](https://private-user-images.githubusercontent.com/20452759/287497618-34320c31-ed7d-4ae1-8f46-0afa26c5baa2.png)

* Reply to a post
![pic6](https://private-user-images.githubusercontent.com/20452759/287497619-0a1e025b-3295-47af-9d2c-ed675a8c99a1.png)

* View a post by a user and all its replies
![pic7](https://private-user-images.githubusercontent.com/20452759/287497620-321e4745-8ef5-404c-852d-2d195aa048df.png)

* Profile page, view your details, followers and followings counts
![pic8](https://private-user-images.githubusercontent.com/20452759/287497621-03adb633-43dc-4fe6-bed2-1b68033d781d.png)

* View your own posts, reposts and liked posts
![pic9](https://private-user-images.githubusercontent.com/20452759/287497622-3351d6f6-7b13-46d0-8fcd-bdb7b7e72a69.png)
![pic9_1](https://private-user-images.githubusercontent.com/20452759/287497623-70aa739a-90de-45a4-b367-d2c6f31357f7.png)

* Edit Profile
![pic10](https://private-user-images.githubusercontent.com/20452759/287497624-936fc05e-7018-4993-8a34-0e05f7f5658e.png)

* View profiles of other users, follow/unfollow them, view their posts, reposts and liked posts
![pic11](https://private-user-images.githubusercontent.com/20452759/287497625-168054a2-9354-41be-bdad-a6b1bb06ae8e.png)

* Delete your post
![pic12](https://private-user-images.githubusercontent.com/20452759/287497627-b6383df6-ae23-441f-a278-297f231558b6.png)

* Logout
![pic13](https://private-user-images.githubusercontent.com/20452759/287497628-ea200778-9d66-4d59-b98a-9e9536b87d15.png)

* Get Verified (only frontend)
![pic14](https://private-user-images.githubusercontent.com/20452759/287497629-59f8ec32-205e-44b1-a77d-b205f075920c.png)