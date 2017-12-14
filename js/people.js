
$(function(){
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  const id = getParameterByName('id') ? getParameterByName('id') : -1;

  var url = `https://27akxeqtd3.execute-api.eu-west-1.amazonaws.com/Dev/people/${id}`;
  fetch(
    url,
    {
      method:'GET'
    }
  )
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    const  response = JSON.parse(data.body);
    let responseStr = '';
    if (response.error){
      responseStr = response.error;
    } else {
      const fname = response.fName;
      const lname = response.lName;
      responseStr = `${fname} ${lname}`;
    }

    $('#person').html(responseStr);
  })
});
