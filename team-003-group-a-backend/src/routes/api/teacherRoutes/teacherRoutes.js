import express from 'express';

const teacherRouter = express.Router();

// all routes for requests which a teacher would make
teacherRouter
// Get the profiles of all schools for a teacher
  .get('/profile/schoolprofiles', (req, res) => {
    res.status(200).json({
      message: 'Fetch all registered schools',
    });
  })
// Get the profiles of all teachers for a teacher
  .get('/profile/teacherprofiles', (req, res) => {
    res.status(200).json({
      message: 'Fetch all registered teachers',
    });
  })
// Get the profile for a particular user; be it school or parent
  .get('/users/profile/:profileId', (req, res) => {
    res.status(200).json({
      message: 'Fetch specific user profile',
    });
  })
// Get all vacancies posted by schools for a teacher 
    .get('/vacancy/:schoolVacancies', (req, res) => {
        res.status(200).json({
          message: 'Fetch all vacancies from schools',
        });
  })
//Get all vacancies posted by parents for a teacher
    .get('/vacancy/:parentVacancies', (req, res) => {
            res.status(200).json({
              message: 'Fetch all vacancies from schools',
            });
  })
// Get a specific vacancy posted by a parent or school for a teacher
    .get('/users/vacancies/:vacancyId', (req, res) => {
           res.status(200).json({
             message: 'Fetch specific vacancy',
            });
    })

// Submit an application to a job vacancy
    .put('/users/vacancies/:vacancyId', (req, res) => {
           res.status(200).json({
              message: 'Submit an application to a job vacancy',
            });
     })


  export default router;
