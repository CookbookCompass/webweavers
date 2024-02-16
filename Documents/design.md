# COOKBOOK COMPASS DESIGN DOCUMENT

## Purpose
The purpose of this document is to provide comprehensive technical specifications and architecture details for the development of the dynamic recipe website. It will serve as the blueprint while developing the website.

## Scope
* Website Pages
  * Home Page
  * Search Results Page
  * Registration and Login Page
  * Recipe Information Page
  * Profile Page
* Website Functions
  * View Recipes
  * Search recipes
  * Filter recipe search results
  * View recipe details
  * Play embedded recipe videos (If available)
  * User registration
  * User Login and authentication
  * Save favorite recipes
  * View listed favorite recipes
  * Edit user profile

## Architecture
* Frontend Tech Stack:
   * HTML, CSS, and JavaScript (ES6+): The core technologies for building the website's structure, style, and functionality.
   * React: A JavaScript library for building user interfaces, particularly useful for its efficient updating and rendering of the right components when data changes.

* Backend Tech Stack:
   * Node.js: A runtime environment that allows you to run JavaScript on the server.

* Database:
   * MySQL: A relational database management system for storing user information, recipe details, and other relational data efficiently.

* Storage:
   * Amazon S3 (Simple Storage Service): For storing and retrieving any amount of data at any time, such as images and videos for recipes. This service provides scalability, data availability, security, and performance.

* Version Control & Hosting:
   * Git: For version control, allowing multiple developers to work together and manage changes to the project codebase.
   * GitHub: A hosting service for Git repositories that also provides access control, bug tracking, feature requests, task management, and CI/CD pipelines.

## Interfaces
* User Interfaces
   * Home Page: Features a clean and intuitive design with a search bar, featured recipes, and categories for easy navigation.
   * Search Results Page: Displays recipes in a grid or list view with thumbnails, titles, and brief descriptions. Includes filters for refining search results.
   * Recipe Detail Page: Shows detailed recipe information including ingredients, preparation steps, images, and video tutorials. Offers a "favorite" button for registered users.
   * Registration/Login Page: Simple and secure forms for user registration and login. Includes social login options for convenience.
   * Profile Page: Allows users to view and edit their profile information, manage their favorite recipes, and access customization settings.

* External Interfaces:
   * APIs for Recipe Data: Integration with third-party APIs to fetch recipe data, ingredients, and cooking instructions. This allows for a rich and diverse database of recipes.

## My SQL Database tables

* Table Name: Users
  * Description: Stores information about registered users of the website.
  * Columns:
     * id (INT, Primary Key, Auto-Increment): Unique identifier for each user.
     * first_name (VARCHAR): User's first name.
     * last_name (VARCHAR): User's last name.
     * email (VARCHAR, Unique): User's email address. Used for login and notifications.
     * password (VARCHAR): Hashed password for secure authentication.

* Table Name: Recipes
  * Description: Contains details of recipes available on the website.
  * Columns:
     * id (INT, Primary Key, Auto-Increment): Unique identifier for each recipe.
     * name (VARCHAR): Name of the recipe.
     * ingredients (TEXT): List of ingredients required for the recipe.
     * instructions (TEXT): Step-by-step instructions for preparing the recipe.
     * video_url (VARCHAR, Nullable): URL of a video tutorial for the recipe (optional).
     * image (VARCHAR): URL or path to the recipe's image.

* Table Name: Favorites
  * Description: Manages the relationship between users and their favorite recipes.
  * Columns:
     * user_id (INT, Foreign Key): References id in the Users table. Identifies the user who favorited a recipe.
     * recipe_id (INT, Foreign Key): References id in the Recipes table. Identifies the recipe that was favorited.
  * Note: This table acts as a many-to-many relationship table between Users and Recipes, allowing users to favorite multiple recipes and recipes to be favorited by multiple users.

* Relationships:
  * Users to Favorites: One-to-Many (One user can have many favorite recipes, but each favorite entry belongs to one user).
  * Recipes to Favorites: One-to-Many (One recipe can be favorited by many users, but each favorite entry is associated with one recipe).
  
* Indexes and Constraints:
  * Primary Keys: Used on the id column in each table to uniquely identify rows.
  * Foreign Keys: Used in the Favorites table (user_id and recipe_id) to enforce referential integrity with the Users and Recipes tables.
  * Unique Constraints: Applied to the email column in the Users table to ensure no two users can register with the same email address.


## Use Cases
* Homepage
 * User lands on homepage
 * User views featured recipes
 * User uses search bar to search recipes
 * User clicks on recipe category to browse recipes
* Search
 * User enters keyword in search bar
 * User views list of recipes with matching keywords
 * User applies filters like cuisine, ingredients, etc. to refine search results
 * User clicks on recipe card to view recipe details
* View Recipe Details
 * User views detailed recipe page
 * User reads ingredients, instructions, cooking time
 * User plays embedded recipe video (if available)
 * Logged in user saves recipe to favorites
* Registration & Login
 * Guest user clicks register and fills sign up form
 * Registered user enters credentials and clicks login
 * User successfully logs in to the website
* User Profile
 * Logged in user clicks on profile icon
 * User views and edits their information
 * User views list of their favorited recipes
 * User removes recipes from their favorites
 * User logs out from dropdown menu

   
   
