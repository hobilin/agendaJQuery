var idContact = 0;

$(document).ready(function() {

  $('#addModal').click(function() {
    $("#modal1").show();
  });

  $('#close').click(function() {
    $("#modal1").hide();
  });

  $('#addContact').click(function() {

    var name = $("#icon_prefix").val();
    var number = $("#icon_telephone").val();

    if ($("#icon_prefix").val() == '' && $("#icon_telephone").val() == '') {
      alert("Debes ingresar los datos");
    } else {
      $('#contacts').append("<div class='container'>" +
        "<div id='idContact' class='col s12 m7'>" +
        "<div class='card horizontal'>" +
        "<div class='card-stacked'>" +
        "<div class='card-content'>" +
        "<h4>" + name + "</h4>" +
        "<p>" + number + "</p>" +
        "<a class='waves-effect waves-light btn right' id='deleteContact'><i class='material-icons'>delete</i></a>" +
        "</div></div></div></div></div>");

      $("#modal1").hide();
      $("#icon_prefix").val("");
      $("#icon_telephone").val("");

      $(document).on('click', '#deleteContact', function() {
        $(this).parent().remove();
      });
    }

    $('#icon_search').keyup(function() {
      var contacto = $(this).val();
      $('.card-content').hide();

      $('.card-content').each(function() {
        var search = $(this).text();
        if (search.indexOf(contacto) != -1) {
          $(this).show();
        }
      });
    });
  });
});
