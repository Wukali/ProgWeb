$(document).ready(function() {
    $(document).on('mouseenter', '.tarefas-dia', function() {
      if (!$(this).hasClass('editing')) {
        $(this).addClass('editing');
        var diaSemana = $(this).data('dia-semana');
        var input = $('<input>', { type: 'text', class: 'tarefa-input' });
        $(this).append(input);
        input.focus();
      }
    });
  
    $(document).on('keyup', '.tarefa-input', function(event) {
      if (event.keyCode === 13) {
        var tarefaTexto = $(this).val().trim();
        if (tarefaTexto !== '') {
          var diaSemana = $(this).closest('.tarefas-dia').data('dia-semana');
          var tarefa = $('<div>', { class: 'tarefa' }).text(tarefaTexto);
          $(this).closest('.tarefas-dia').append(tarefa);
          $(this).val('').focus();
        }
      }
    });
  
    $(document).on('mouseleave', '.tarefas-dia', function() {
      if ($(this).hasClass('editing')) {
        $(this).removeClass('editing');
        $(this).find('.tarefa-input').remove();
      }
    });
  
    $('#delete-zone').droppable({
      accept: '.tarefa',
      drop: function(event, ui) {
        ui.draggable.remove();
      }
    });
  
    $('.tarefas-dia').sortable({
      connectWith: '.tarefas-dia',
      placeholder: 'tarefa-placeholder',
      start: function(event, ui) {
        ui.item.addClass('dragging');
      },
      stop: function(event, ui) {
        ui.item.removeClass('dragging');
      }
    });
  });
  