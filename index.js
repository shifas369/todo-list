function checkbox() {
    let promise = new Promise(function (resolve, reject) {
      let req = document.getElementById("checkbox");
      req.open("GET", checkbox);
      req.onload = function () {
        if (req.status == 5) {
          resolve(req.response)
          alert("sucessfully completed 5 tasks");
        } else {
          reject("There is an Error!");
        }
      };
      req.send();
    });
    return promise;
  }