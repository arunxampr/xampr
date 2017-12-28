import Moment from 'moment';

export const formatDateTime = (time) => {
  if (time) {

    let today = Moment().format('DD-MM-YYYY');
    let recordedDateTime = Moment(time, 'DD-MM-YYYY^hh:mm a').format('DD-MM-YYYY hh:mm A');
    let date = Moment(recordedDateTime, 'DD-MM-YYYY hh:mm A').format('DD-MM-YYYY');

    if (today === date) {
      // same date
      return Moment(recordedDateTime, 'DD-MM-YYYY hh:mm A').format('hh:mm A');
    } else if ( Moment(date, 'DD-MM-YYYY hh:mm A').format('YYYY') === Moment(today, 'DD-MM-YYYY').format('YYYY') ) {
      // same year but different date
      return Moment(date, 'DD-MM-YYYY hh:mm A').format('MMM DD');
    } else {
      // different year
      return Moment(date, 'DD-MM-YYYY hh:mm A').format('MMM DD, YYYY');
    }

  }
  return time;
}
