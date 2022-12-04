import * as yup from 'yup';

// Create validation schema
export const createTracSchema = yup.object().shape({
  kmTotal: yup
    .number()
    .positive()
    .integer()
    .min(1, 'km greater than 1')
    .max(150, 'km less than 150')
    .required('km required'),
  maxSpeed: yup
    .number()
    .positive()
    .integer()
    .min(10, 'max speed greater than 10')
    .max(60, 'max speed less than 60')
    .required('max speed required'),
  averSpeed: yup
    .number()
    .positive()
    .integer()
    .min(10, 'average speed greater than 10')
    .max(60, 'average speed less than 60')
    .required('average speed required'),

  rideHours: yup
    .number()
    .positive()
    .integer()
    .min(0, 'ride time greater 0')
    .max(6, 'ride time max 6')
    .required(),
  rideMin: yup
    .number()
    .positive()
    .integer()
    .min(0)
    .max(60)
    .required('requiered'),

  //rideTime: yup.time().min(09).max(19).required(),
});
