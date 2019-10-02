Next steps:

1. During SignUp: Create a control(?) for is a user signs up as a NP, or Volunteer then render something diff for each
    - if a volunteer, choose between individual or group
        - multiple types of group options
2. ProjectCreation - ProjectForm:
    - assign IDs to project
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


Other To do:

1. in ProjectDetails comp: 
    - onDelete() + editProject() + getProjectDetails() - should this reside in firebase component?
    
