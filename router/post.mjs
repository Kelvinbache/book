class ResponseMethod {
  response() {
    return function (req, res, next) {
      const { name, description } = req.body;
      res.json({ name: name, description: description });
    };
  }
}

const methodPost = new ResponseMethod();

export { methodPost };
