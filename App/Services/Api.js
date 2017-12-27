// a library to wrap and simplify api calls
import apisauce from 'apisauce'

const beta2xampr = 'http://beta2xampr.azurewebsites.net/api/';
const prod = 'http://xamprrelease02.cloudapp.net/api/';

// our "constructor"
const create = (baseURL = beta2xampr) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
      'token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ4YW1wciIsInVuaXF1ZV9uYW1lIjoiOTk1MjAwODA3MyIsInVzZXJJZCI6Ijk5NTIwMDgwNzMiLCJkZXZpY2VJZCI6IjM1ODk4MjA3OTE2NTMwMSIsInRpbWUiOiIxMi8yNy8yMDE3IDc6Mzg6NDAgQU0iLCJleHAiOjE1MTQ0NDY3MjAsIm5iZiI6MTUxNDM2MDMyMH0.uAALNeFhH4CUjHLJ_A3_nODY5FUpwwCpbNM5iFs9PWE'
    },
    // 10 second timeout...
    timeout: 10000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  //const getRoot = () => api.get('')
  const getXwall = (lastReadTimeInTics, DeviceType, VersionNumber ) => api.get('ActivityParticipation/GetXWallActivities'
  ,  {
    lastReadTimeInTics: lastReadTimeInTics,
    deviceType: DeviceType,
    versionNumber: VersionNumber
  })
  //const getUser = (username) => api.get('search/users', {q: username})

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    getXwall
  }
}

// let's return back our create method as the default.
export default {
  create
}
