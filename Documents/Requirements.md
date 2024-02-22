##REQUIREMENTS

1. NON-FUNCTIONAL REQUIREMENTS
   
   1. Image embedding
      1. Show thumbnails when searching for dishes
      2. Ensure that the used thumbnails correspond to a full-sized image
      3. Image captioning is also required
   2. Auto-logout
      1. Used to ensure security of the account on all devices
      2. An internal timer will be used to measure the length of user interactability
      3. If no user interaction is detected after one hour the website will logout the user

2. FUNCTIONAL REQUIREMENTS

   1. User Authentication
        1. Users should be able to register for a new account.
        2. Registered users should be able to login securely.
        3. Passwords should be stored securely and encrypted.
   2. Home Page
        1. Home Page should display a header with title.
        2. Featured recipes should show appealing recipes.
        3. Search bar should allow users to search for recipes.
        4. Categories section should provide filters for recipe types.
        5. Login/Signup button should redirect to respective pages.
   3. Search Results Page
        1. Users should be able to view a gird/list of recipes based on search
        2. Advanced filter section should allow users to refine search results.
        3. Recipe cards should be displayed showing the relevant information.
   4.  Registration & Login Page
        1. Should include a form with fields for necessary user information.
        2. Proper authentication should be done.
        3. Error handling should inform users about any login or registration issues.
   5. Recipe Information Page
        1. Should display a dish image on the recipe information page.
        2. Should display ingredients list for each recipe.
        3. Should provide a list of step-by-step instructions for recipe.
        4. Should have video of recipe if available.
        5. Include a favorite button for registered users to save recipes.
   6. Profile Page
        1. Display user information on the profile page.
        2. List the user's favorite recipes.
        3. Provide settings options for users to customize their profiles.
        4. Include a logout option for users to securely logout.
   7. Agile Methodology Integration
        1. Incorporate Agile methodologies for iterative development.
        2. Implement features in iterations, allowing for continuous feedback and improvement.
        3. Use a version control system for collaboration, enabling branching and code management.
   8. Responsiveness
        1. Ensure the website is responsive, providing a seamless experience across all devices.
   
        
3. TECHNICAL REQUIREMNETS

   1. Frontend:
      1. Programming Languages: Use HTML, CSS, JavaScript (ES6+), and potentially a back-end language (Node.js) if required.
      2. Front-end Framework: Use a front-end framework such as React for efficient component-based development.
      3. Version Control: Utilize Git for version control, with a code repository hosted on GitHub.
   2. Database & data:
      1. Database System: An appropriate database system - MySQL for storing recipe data, user information, and other relevant data.
      2. Data Sources: Identify and integrate data sources, which may include APIs for recipe data and user authentication.
      3. Data Models: Define database schema and data models to organize and store information efficiently.
   3. Backend:
      1. Back-end Framework: If a back-end is needed for user authentication or other server-side functionality, select an appropriate back-end framework like express.js.
      2. Authentication: Implement secure user authentication using libraries or frameworks like Firebase Authentication.
   4. Deployment and Infrastructure:
      1. Web Hosting: Choose a reliable web hosting provider (e.g., AWS, Heroku, Netlify, Vercel) for hosting both front-end and back-end components.
      2. Domain Name: Register a domain name for the website and configure DNS settings to point to the hosting environment.
