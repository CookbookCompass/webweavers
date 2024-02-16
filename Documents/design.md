
COOKBOOK COMPASS DESIGN DOCUMENT

1. Purpose

   The purpose of this document is to provide comprehensive technical specifications and architecture details for the development of the     
   dynamic recipe website. It will serve as the blueprint while developing the website.

2. Scope
   
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

3. Architecture

   * Frontend Tech Stack

   
   * Backend Tech Stack

  
   * Database

   
   * Storage

   
   * Version Control & Hosting

   
   * 3rd Party Integrations

4. Interfaces
  
   * External Interfaces

   * Internal Interfaces

   * User Interfaces

   * Admin Interface

5. Information Architecture
   
   My SQL Database tables

  1. Table Name : Users
     Columns
       - id
       - first_name
       - last_name
       - email
       - password
  2. Table Name : Recipes
     Columns:
       - id
       - name
       - ingredients
       - instructions
       - video_url
       - image
  3. Favorites
     Columns:
       - user_id
       - recipe_id

6. Use Cases

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

   
   
