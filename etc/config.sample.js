var config = {
  channels : [],
  server   : '',
  botName  : '',
  match    : '#term',
  getLink  : {
    from  : '',
    to    : '',
    regex : /(\d+)/g
  },
  db : {
    user : '',
    pass : '',
    host : 'localhost',
    port : 27017,
    name : '',
  },
  getUrl : {
    url   : '',
    regex : /@search@/
  },
  // auth: {
  //   url      : '',
  //   formData : {
  //     username: '',
  //     password: ''
  //   }
  // }
};

module.exports = config;