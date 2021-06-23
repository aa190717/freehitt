import Api from './api.interceptor';

export const getLiveEvents = () => {
  try {
    return Api.get('/albums/1/photos').then(response => {
      return response;
    });
  } catch (error) {
    console.error(error);
  }
};
