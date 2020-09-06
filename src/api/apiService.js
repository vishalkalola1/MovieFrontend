
const baseURL = "http://localhost:8080/apiman-gateway/ezshare";
const APIKEY = "apikey=0429b102-d063-4094-bcf7-5bf0149d5974";
const version = "1.0";
const token = "access_token="

export const buildURL = (url) => {
  return `${baseURL}/${url}/${version}?${APIKEY}&${token}${localStorage.getItem("secretkey")}`
};

export const registerUser = async (dict) => {
  const request = new Request(buildURL('createuser'), {
    method: "POST",
    headers:{
      "content-type": "application/json"
    }, 
    body: JSON.stringify(dict)
  });
  
  let data = await fetch(request)
  let json = data.json()
  if (data.status == 200) {
    return json
  } else if (data.status == 401) {
    alert("User already exist..")
  } else {
    alert("Please try again...")
  }
};

export const authenticateLogin = async (dict) => {
  const request = new Request(buildURL('authenticateUser'), {
    method: "POST",
    headers:{
      "content-type": "application/json"
    },
    body: JSON.stringify(dict)
  });
  let data = await fetch(request)
  let json = data.json()
  if (data.status == 200) {
    return json
  } else if (data.status == 401) {
    alert("Wrong Credentials")
  } else {
    alert("Please try again...")
  }
};