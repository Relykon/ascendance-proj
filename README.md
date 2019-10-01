Next steps:

1. During SignUp: Create a control(?) for is a user signs up as a NP, or Volunteer then render something diff for each
    - if a volunteer, choose between individual or group
        - multiple types of group options
2. Conditionally render Home Page depending on user Roles
    - if Role = Nonprofit (render):
        - navigation options:
            - project create form
            - View Open Projects
        - content on page:
            - General info about your Nonprofit(?)
                - another card that has a button for edit profile info
                    - CREATE EDIT PROFILE Component
            - upcoming projects (ProjectPreview component)
                - click for edit / delete options
    - if Role = Volunteer (render):
        - a card listing some info about you including interests(?)
            - add/edit interests
            - edit profile info
                - CREATE EDIT PROFILE component
        - some volunteering options near you, or pertinent to you somehow?
        - search filter
            - events within x amount of miles
            - event types
            - time commitment
3. map projects in Project component

Talking Points:
1. Users can sign up/login, and their info saves and there is a password change and password forget feature that works as one would expect.

2. We now have three types of Roles that can be assigned upon signing up
    - Nonprofit
    - Volunteer
    - Admin
3. Depending on the role you assign for yourself, you'll have different profile info to fill out, and we have those forms in their basic versions saving to our database.

4. Nonprofits have a section where they can create a project, which is saving to the DB
    - they can view all created projects on another page, and Nadia has made  them editable and deletable

5. We have a component that is a project preview panel, that will be used conditionally depending on the role of the user. 
    - nps will see maybe one or two of their projects that are closest to starting on their main page where they can click to edit/delete
    - volunteers i was thinking would have a section either on their main page where they can preview a few 

