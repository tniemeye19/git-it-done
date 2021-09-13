var getUserRepos = function() {
    // format the github api url
    var apiUrl = "https://api.github.com/users" + user + "/repos";

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function() {
            console.log(data);
        });
    });
};

getUserRepos();
