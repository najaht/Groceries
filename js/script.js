function totalprice(unit, amount){
  return unit * amount
}



$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();

    const product = $("#product").val();
    const unit = parseInt($("#unit").val());
    const amount = parseInt($("#amount").val());
    const seller = $("#seller").val();
    const total = totalprice(unit, amount);

    $("#display").append(
      "<tr>" + "<td>" + product + "</td>"+ "<td>" + unit +  "</td>" + "<td>" + amount + "</td>" + "<td>" + seller + "</td>" +
      "<td>" + total + 
      "</tr>" 
    )

    $("#product").val(" ")
    $("#amount").val(" ")
    $("#unit").val(" ")
    $("#seller").val(" ")
  })



})