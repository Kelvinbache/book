class ResponseMethod {
  response() {
    return function (req, res, next) {
      res.send("hello word");
    };
  }
}

const methodGet = new ResponseMethod();

export { methodGet };
