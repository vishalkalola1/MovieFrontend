export const getToken = async () => {
    var details = {
      client_id: "test-application",
      password: "test",
      grant_type: "password",
      username: "test",
    };
  
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    console.log(formBody);
    const data = await fetch(
      "http://localhost:8080/auth/realms/test-oidc/protocol/openid-connect/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      }
    );
  
    return data.json();
  };
  