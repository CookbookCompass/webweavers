REQUIREMENTS

1. NON-FUNCTIONAL REQUIREMENTS
   
   * Image embedding
      * Show thumbnails when searching for dishes
      * Ensure that the used thumbnails correspond to a full-sized image
      * Image captioning is also required
   * Auto-logout
      * Used to ensure security of the account on all devices
      * An internal timer will be used to measure the length of user interactability
      * If no user interaction is detected after one hour the website will logout the user
2. FUNCTIONAL REQUIREMENTS

   * User Authentication
        * Users should be able to register for a new account.
        * Registered users should be able to login securely.
        * Passwords should be stored securely and encrypted.
   * Home Page
        * Home Page should display a header with title.
        * Featured recipes should show appealing recipes.
        * Search bar should allow users to search for recipes.
        * Categories section should provide filters for recipe types.
        * Login/Signup button should redirect to respective pages.
   * Search Results Page
        * Users should be able to view a gird/list of recipes based on search
        * Advanced filter section should allow users to refine search results.
        * Recipe cards should be displayed showing the relevant information.
   *  Registration & Login Page
        * Should include a form with fields for necessary user information.
        * Proper authentication should be done.
        * Error handling should inform users about any login or registration issues.
   * Recipe Information Page
        * Should display a dish image on the recipe information page.
        * Should display ingredients list for each recipe.
        * Should provide a list of step-by-step instructions for recipe.
        * Should have video of recipe if available.
        * Include a favorite button for registered users to save recipes.
   * Profile Page
        * Display user information on the profile page.
        * List the user's favorite recipes.
        * Provide settings options for users to customize their profiles.
        * Include a logout option for users to securely logout.
   * Agile Methodology Integration
        * Incorporate Agile methodologies for iterative development.
        * Implement features in iterations, allowing for continuous feedback and improvement.
        * Use a version control system for collaboration, enabling branching and code management.
   * Responsiveness
        * Ensure the website is responsive, providing a seamless experience across all devices.
   
        
3. TECHNICAL REQUIREMNETS

   * Frontend:
      * Programming Languages: Use HTML, CSS, JavaScript (ES6+), and potentially a back-end language (Node.js) if required.
      * Front-end Framework: Use a front-end framework such as React for efficient component-based development.
      * Version Control: Utilize Git for version control, with a code repository hosted on GitHub.
   * Database & data:
      * Database System: An appropriate database system - MySQL for storing recipe data, user information, and other relevant data.
      * Data Sources: Identify and integrate data sources, which may include APIs for recipe data and user authentication.
      * Data Models: Define database schema and data models to organize and store information efficiently.
   * Backend:
      * Back-end Framework: If a back-end is needed for user authentication or other server-side functionality, select an appropriate back-end framework like express.js.
      * Authentication: Implement secure user authentication using libraries or frameworks like Firebase Authentication.
   * Deployment and Infrastructure:
      * Web Hosting: Choose a reliable web hosting provider (e.g., AWS, Heroku, Netlify, Vercel) for hosting both front-end and back-end components.
      * Domain Name: Register a domain name for the website and configure DNS settings to point to the hosting environment.
