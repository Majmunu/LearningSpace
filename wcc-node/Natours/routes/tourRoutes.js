const express = require('express');
const tourController = require('../controller/tourController');

const router = express.Router();
// app.use('/api/v1/tours', router);

router.param('id', (req, res, next, val) => {
  console.log('Tour id is', val);
  next();
});
router.route('/').get(tourController.getAllTours).post(tourController.addTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
