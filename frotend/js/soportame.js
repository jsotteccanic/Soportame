var authorizationToken = '';
$.ajax({
  type: "get",
  url: "http://localhost:80/colaborador/listarColaboradores",
  // processData: false,
  beforeSend: function (xhr) {
    xhr.setRequestHeader("Authorization", "");
  },
  success: function (msg) {
    console.log(msg);
  }
});