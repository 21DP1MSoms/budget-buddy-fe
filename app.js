document.getElementById('fetch-data').addEventListener('click', function() {
    axios.post('http://your-laravel-backend/api/example')
        .then(function(response) {
            document.getElementById('response').innerText = JSON.stringify(response.data);
        })
        .catch(function(error) {
            console.error('There was an error!', error);
        });
});
