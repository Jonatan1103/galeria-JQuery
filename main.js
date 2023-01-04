$(document).ready(function() {
  $('header button').click(function() {
    $('form').slideDown()
  })

  $('#botao-cancelar').click(function() {
    $('form').slideUp()
  })

  $('form').on('submit', function(event) {
    event.preventDefault()

    const urlNovaImagem = $('#url-imagem').val()
    console.log(urlNovaImagem);
    const novoItem = $('<li style="display: none"></li>')
    $(`<img src="${urlNovaImagem}" >`).appendTo(novoItem)
    $(
      `<div class="overlay-imagem-link">
        <a href="${urlNovaImagem}" target="_blank">
          ver imagem em tamanho real
        </a>
      </div>`
    ).appendTo(novoItem)

    $(novoItem).appendTo('ul')
    $(novoItem).fadeIn(500)
    $('#url-imagem').val('')
  })
})