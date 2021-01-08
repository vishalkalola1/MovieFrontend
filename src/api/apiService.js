
const baseURL = "http://localhost:8080/MovieAPI/rest"

export const buildURL = (url) => {
  return `${baseURL}/${url}`
};

export const buildURLParam = (url) => {
  return `${baseURL}/${url}`
};

export const registerUser = async (dict) => {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(dict);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  let data = await fetch(buildURL('user/createUser'), requestOptions)
  return data
};

export const authenticateLogin = async (dict) => {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(dict);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  let data = await fetch(buildURL('user/authenticateUser'),requestOptions)
  return data
};

export const homeApi = async (dict) => {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(dict);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  let data = await fetch(buildURL('MovieService/getTopMovies'), requestOptions)
  return data
};

export const searchMovie = async (name) => {
    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  let data = await fetch(`${buildURL('MovieService/searchMovie')}?name=${name}`, requestOptions)
  return data
};

export const detailsMovie = async (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
  let data = await fetch(`${buildURL('MovieService/details')}?id=${id}`, requestOptions)
  return data
};



export const removeData = async () => {
  localStorage.removeItem("islogin")
  localStorage.removeItem("logindata")
}