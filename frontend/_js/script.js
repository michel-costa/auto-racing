$(function () {

  $('button').button();
  
  $('#nascimento').datepicker();

  $('#enviar').click(function () {

      html = '';
      // método de repetição
      $('input,select,textarea').each(function (i, e) {

          // para selecionar os elementos individualmente
          // pode user a variável e ou o objeto this
          // método trim remove os espaços em branco do início e do fim da string
          value = $(this).val().trim();

          if (value == '') {
              $(this).addClass('ui-state-error');

              // método attr serve para manipular os atributos
              id = $(this).attr('id');
              // seletor por atributo
              // exemplo $('input[type=number]')
              textoDoLabel = $('label[for=' + id + ']').html();

              html += '<h4>O campo [' + textoDoLabel + '] não foi preenchido!</h4>';

          } else {
              $(this).removeClass('ui-state-error');
          }


      });
      
      // somente abre dialog se tiver conteúdo na variável html
      if (html.length > 0) {
          $('#dialog').html(html);

          $('#dialog').dialog({
              resizable: false,
              width: '50%',
              modal: true,
              buttons: {
                  Ok: function() {
                      $(this).dialog('close');
                  },
                  Ajuda: function() {
                      mensagem = '<h4 class="ui-state-highlight">';
                      mensagem += 'Preencha os campos do formulário abaixo que estão vazios.';
                      mensagem += '</h4>';
                      $('#dialog').prepend(mensagem);
                  }
              }
          });
      }

      return;

  });

  $('#telefone').blur(function () {
     
      //telefone = document.getElementById('telefone').value;
      //telefone = $('#telefone').val();
      telefone = $(this).val();
      telefone = parseInt(telefone);
      
      if (isNaN(telefone)) {
          mensagem = '<p class="ui-state-error">O telefone deve conter somente números.</p>';
          $(this).after(mensagem);
      } else {
          $('p.ui-state-error').remove();
      }
      
  });
  
  
  
  
  
  
 
  
  // JAVASCRIPT OBJECT NOTATION JSON
  
  caneta = {
      cor: 'blue',
      marca: 'Bic',
      escrever: function(texto) {
          $('body').prepend('<p style="color:' + this.cor + '">' + texto + '</p>');
      }
  };
  
  caneta['tipo'] = 'esferiográfica';
  
  
  
});