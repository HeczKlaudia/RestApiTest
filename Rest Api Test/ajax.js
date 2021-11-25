class MyAjax {
  constructor() {}

  getAdat(apiVegpont, tomb, myCallback) {
    tomb.splice(0, tomb.length);
    $.ajax({
      url: apiVegpont,
      type: "GET",
      success: function (result) {
        result.forEach((value) => {
          tomb.push(value);
        });
        myCallback(tomb);
      },
    });
  }

  postAdat(apiVegpont, adat) {
    $.ajax({
      url: apiVegpont,
      type: "POST",
      data: adat,
      success: function (result) {
        console.log(result);
      },
    });
  }

  deleteAdat(apiVegpont, id) {
    $.ajax({
      url: apiVegpont + "/" + id,
      type: "DELETE",
      success: function (result) {
        console.log(result);
      },
    });
  }

  putAdat(apiVegpont, adat, id) {
    $.ajax({
      url: apiVegpont + "/" + id,
      type: "PUT",
      data: adat,
      success: function (result) {
        console.log(result);
      },
    });
  }
}
