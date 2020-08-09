import moment from 'moment';

export const addFormValues = ( goDate, backDate ) => {
  const formData = {
    goDate: moment(goDate).format('YYYY-MM-DD'),
    backDate: moment(backDate).format('YYYY-MM-DD'),
  }
  return({
    type: 'SET_FORM_VALUES',
    data: formData
  })
}