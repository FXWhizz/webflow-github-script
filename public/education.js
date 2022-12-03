(() => {
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // env-ns:env
  var LOCAL_GRAPHQL = "http://localhost:5000/graphql";
  var ENVIROMENT = "DEVELOPMENT";
  var URL_GRAPHQL = "";

  // src/scripts/education.js
  function Education(name) {
    return __async(this, null, function* () {
      console.log(`Serving from ${name}`);
      let api = ENVIROMENT === "DEVELOPMENT" ? LOCAL_GRAPHQL : URL_GRAPHQL;
    });
  }
})();
