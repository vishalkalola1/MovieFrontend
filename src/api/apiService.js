
const baseURL = "http://localhost:8080/apiman-gateway/ezshare";
const APIKEY = "apikey=0429b102-d063-4094-bcf7-5bf0149d5974";
const version = "1.0";
const token = "access_token="

export const buildURL = (url) => {
  return `${baseURL}/${url}/${version}?${APIKEY}&${token}${localStorage.getItem("secretkey")}`
};

export const buildURLParam = (url) => {
  return `${baseURL}/${url}/${version}?${APIKEY}`
};

export const registerUser = async (dict) => {
  const request = new Request(buildURL('createuser'), {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(dict)
  });

  let data = await fetch(request)
  return data
};

export const authenticateLogin = async (dict) => {
  const request = new Request(buildURL('authenticateUser'), {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(dict)
  });
  let data = await fetch(request)
  return data
};

export const homeApi = async (dict) => {
  const request = new Request(`${buildURL('homeapi')}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": `bearer ${localStorage.getItem("secretkey")}`
    },
    body: JSON.stringify(dict)
  });
  let data = await fetch(request)
  return data
};

export const searchMovie = async (name) => {
  const request = new Request(`${buildURL('searchMovie')}&name=${name}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `bearer ${localStorage.getItem("secretkey")}`
    }
  });
  let data = await fetch(request)
  return data
};

export const detailsMovie = async (id) => {
  const request = new Request(`${buildURL('detailsMovie')}&id=${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `bearer ${localStorage.getItem("secretkey")}`
    }
  });
  let data = await fetch(request)
  return data
};



export const removeData = async () => {
  localStorage.removeItem("islogin")
  localStorage.removeItem("logindata")
}