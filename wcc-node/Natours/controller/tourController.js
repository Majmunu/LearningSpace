const { readFileSync, writeFile } = require('fs');

const tours = JSON.parse(
  readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`),
);
exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours: tours,
    },
  });
};
exports.getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Not Find',
    });
  }
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tour,
    },
  });
};
exports.addTour = (req, res) => {
  console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  console.log(newId);
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    },
  );
};
exports.updateTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Not Find',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Update',
    },
  });
};
exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Not Find',
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
