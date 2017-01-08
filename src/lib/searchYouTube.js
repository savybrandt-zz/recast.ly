var searchYouTube = (options, callback) => {
  console.log('options', options);
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {part: 'snippet', type: 'video', key: options.key, q: options.query, maxResults: options.max},
    contentType: 'application/json',
    success: function (data) {
      console.log('success: received: ', data);
      callback(data.items);
    },
    error: function (data) {
      console.error('failed to receive: ', data);
    }
  });
};

window.searchYouTube = searchYouTube;
