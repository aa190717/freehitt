import Api from './api.interceptor';

export const getLiveEvents = () => {
  try {
    return Api.get('/albums/1/photos').then(response => {
      return [
        {
          eventId: 1,
          eventType: 'IPL',
          name: 'CSK Vs MI',
          startTime: '2021-06-01T08:00:00.000+00:00',
          status: 'Draft',
          eventPicture: 'pic1',
          eventDescription: 'Chennai Super kings Vs Mumbai Indians',
          creationDate: null,
          liveDate: null,
          category: null
        },
        {
          eventId: 2,
          eventType: 'IPL',
          name: 'CSK Vs RR',
          startTime: '3921-07-05T08:00:00.000+00:00',
          status: 'Draft',
          eventPicture: 'pic2',
          eventDescription: 'Chennai Super kings Vs Rajasthan Royals',
          creationDate: null,
          liveDate: null,
          category: null
        },
        {
          eventId: 3,
          eventType: 'IPL',
          name: 'DC Vs MI',
          startTime: '3921-07-06T08:00:00.000+00:00',
          status: 'Draft',
          eventPicture: 'pic3',
          eventDescription: 'Delhi Capitals Vs Mumbai Indians',
          creationDate: null,
          liveDate: null,
          category: null
        },
        {
          eventId: 4,
          eventType: 'IPL',
          name: 'PK Vs DC',
          startTime: '3921-07-07T08:00:00.000+00:00',
          status: 'Draft',
          eventPicture: 'pic4',
          eventDescription: 'Punjab Kings Vs Delhi Capitals',
          creationDate: null,
          liveDate: null,
          category: null
        },
        {
          eventId: 5,
          eventType: 'IPL',
          name: 'CSK Vs MI',
          startTime: '3921-07-01T08:00:00.000+00:00',
          status: 'Draft',
          eventPicture: 'pic1',
          eventDescription: 'Chennai Super kings Vs Mumbai Indians',
          creationDate: null,
          liveDate: null,
          category: 'UnVouchered'
        }
      ];
    });
  } catch (error) {
    console.error(error);
  }
};
