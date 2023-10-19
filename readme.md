
Instructions
- install dependencies
  npm install

- start the project
  npm run dev
  npm run watch
  => running on localhost:8080

Description of the application
- It shows the to-do list with course names and tasks. 
- When you add a course name, the name is added to the drop-down list below.
- When you submit the course name and a task in the second form, the list of tasks are displayed below the form.
- Tasks in the list can be deleted using the button on the right.

API
- Endpoints 
  - GET '/api/courses'
    get an array of all courses
  - GET '/api/courses/:_id'
    get a course based on its ID
  - POST '/api/courses'
    create a new course
  - GET '/api/tasks'
    get an array of all tasks
  - GET '/api/courses/:_id'
    get a task based on its ID
  - POST '/api/tasks'
    create a new task
  - DELETE '/api/tasks/:_id'
    delete a task base on its ID

- Response format: JSON

- Expected POST body format: JSON

- Examples on how to use each endpoint
  
  to get all courses or tasks
  - GET '/api/courses'
  - GET '/api/tasks'

  to get a course or task based on ID
    e.g.  GET '/api/courses/624fbe0e022a68909eae66f3'
          GET '/api/tasks/624fbecfc0bac2510aa8374a'

  to create a new course or task
  - POST '/api/courses'
  - POST '/api/tasks'

  to delete a task based on its ID
    e.g.  DELETE '/api/tasks/624fbecfc0bac2510aa8374a'
