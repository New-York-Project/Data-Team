// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/news/v3/content/nyt/News/.json";
url += '?' + $.param({
  'api-key': "0d1cf3d7d4e34adeb5c67d9bf12f61b9"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});