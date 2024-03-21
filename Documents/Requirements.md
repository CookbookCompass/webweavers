# REQUIREMENTS

## NON-FUNCTIONAL REQUIREMENTS
   
   1. Image embedding
      1. Show thumbnails when searching for dishes
      2. Ensure that the used thumbnails correspond to a full-sized image
      3. Image captioning is also required
   2. Auto-logout
      1. Used to ensure security of the account on all devices
      2. An internal timer will be used to measure the length of user interactability
      3. If no user interaction is detected after one hour the website will logout the user

## FUNCTIONAL REQUIREMENTS

   1. User Authentication
        1. Users should be able to register for a new account.
        2. Registered users should be able to login securely.
        3. Passwords should be stored securely and encrypted.
        4. Error message should appear on entering an email in incorrect format.
        5. Error message should appear on entering incorrect password.
        6. User should not be able to login without entering both email and password.
   2. Home Page
        1. Home Page should display a header with title.
        2. Featured recipes should show appealing recipes.
        3. Search button should allow users to navigate to search page.
        4. Clicking the Login button should redirect to the login page.
        5. Clicking the Signup button should redirect to the registration page.
   3. Search Results Page
        1. Search bar should allow users to search recipes.
        2. Users should be able to view a gird/list of recipes based on search
        3. Recipe cards should be displayed showing the relevant information.
        4. If user enters an incorrect search query, the 'No Results Found' message should be displayed.
        5. The search query should run on tapping the 'Magnifying glass' icon.
   5.  Registration:
        1. Should include a form with fields for necessary user information.
        2. Proper authentication should be done.
        3. Error handling should inform users about any login or registration issues.
        4. Error message should appear on entering an email in incorrect format.
        5. Error message should appear on entering a password that is too short.
        6. User should not be able to submit the registration form without entering valid details for all required fields.
        7. 
   6. Recipe Information Page
        1. Should display a dish image on the recipe information page.
        2. Should display ingredients list for each recipe.
        3. Should provide a list of step-by-step instructions for recipe.
        4. Should have video of recipe if available.
   7. Agile Methodology Integration
        1. Incorporate Agile methodologies for iterative development.
        2. Implement features in iterations, allowing for continuous feedback and improvement.
        3. Use a version control system for collaboration, enabling branching and code management.
   8. Responsiveness
        1. Ensure the website is responsive, providing a seamless experience across all devices.
   
        
## TECHNICAL REQUIREMNETS

   1. Frontend:
      1. Programming Languages: Use HTML, CSS, JavaScript (ES6+).
      2. Version Control: Utilize Git for version control, with a code repository hosted on GitHub.
   2. Database & data:
      1. Database System: An appropriate database system - MySQL for storing user information, and other relevant data.
      2. Data Sources: Identify and integrate data sources, which may include APIs for recipe data and user authentication.
      3. Data Models: Define database schema and data models to organize and store information efficiently.
   3. Backend:
      1. User authentication by checking the data from database, integrating with Java script.
   4. Deployment and Infrastructure:
      1. Web Hosting: Local System Hosting
