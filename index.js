var settings = {
  "url": "https://hiring.bajajfinservhealth.in/api/renderMe",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "login": "",
    "avatar_url": "",
    "html_url": "",
    "type": ""
  },
};

$.ajax(settings).done(function (response) {
      console.log(response);
});
