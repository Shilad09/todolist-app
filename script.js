$(document).ready(function() {

  const loadList = () => {
    $.ajax({
    url: 'fetch.php',
    type: 'POST',
    success: function(data){
      if(data == 0){
        $('#alert-msg').fadeIn().removeClass('alert-success').addClass('alert-danger').html('Error! session ended').fadeOut(4000)
      }
      else{
        $('#show-list').html(data)
      }
    }
  })
  }

  
  $('#signup-btn').click(function(){
    $('#modal-box').fadeIn()
  })
  $('#login-btn').click(function(){
    $('#modal-box-2').fadeIn()
  })

  $('#close-btn').click(function(){
    $('#modal-box').fadeOut()
  })
  $('#close-btn-2').click(function(){
    $('#modal-box-2').fadeOut()
  })
  $('#close-btn-3').click(function(){
    $('#modal-box-3').fadeOut()

    $.ajax({
      url: 'logout.php',
      type: 'POST',
      success: function(data){
        if(data){
          $('#alert-msg').fadeIn().removeClass('alert-danger').addClass('alert-success').html('You have been successfully logged out').fadeOut(4000)
        }
      }
    })
  })
  $('#close-btn-4').click(function(){
    $('#modal-box-4').fadeOut()
  })
  $('#close-btn-5').click(function(){
    $('#modal-box-5').fadeOut()
  })

  $('#submit-btn').click(function(event){
    event.preventDefault()
    
    if($('#name').val() == '' || $('#email').val() == '' || $('#password').val() == ''){
      $('#signup-form').trigger('reset')
      $('#alert-msg').fadeIn().removeClass('alert-success').addClass('alert-danger').html('Please fill all the fields').fadeOut(4000)
      }
    else{
      $.ajax({
      url: 'signup.php',
      type: "POST",
      data: $('#signup-form').serialize(),
      success: function(data){
        if(data == 1){
          $('#signup-form').trigger('reset')
          $('#modal-box').fadeOut()
          $('#alert-msg').fadeIn().removeClass('alert-danger').addClass('alert-success').html('Your account has been created successfully, log in now.').fadeOut(4000)
        }
        else if(data == -1){
          $('#signup-form').trigger('reset')
          $('#alert-msg').fadeIn().removeClass('alert-success').addClass('alert-danger').html('Email already exists').fadeOut(4000)
        }
        else{
          $('#signup-form').trigger('reset')
          $('#alert-msg').fadeIn().removeClass('alert-success').addClass('alert-danger').html('Please try again').fadeOut(4000)
        }
      }
    })
    }
  })

  $('#re-submit-btn').click(function(event){
    event.preventDefault()
    
  if($('#re_email').val() == '' || $('#re_password').val() == ''){
    $('#login-form').trigger('reset')
      $('#alert-msg').fadeIn().removeClass('alert-success').addClass('alert-danger').html('Please fill all the fields').fadeOut(4000)
  }
  else{
    $.ajax({
      url: 'login.php',
      type: 'POST',
      data: $('#login-form').serialize(),
      success: function(data){
        if(data != 0){
          $('#login-form').trigger('reset')
          $('#modal-box-2').hide();
          $('#modal-box-3').fadeIn();
          $('#user-details > h1').html(`Hello ${data}`)

          loadList()
        }
        else{
          $('#login-form').trigger('reset')
          $('#alert-msg').fadeIn().removeClass('alert-success').addClass('alert-danger').html('You have no account').fadeOut(4000)
        }
      }
    })
  }
  })

$('#add-btn').click(function(){
  $('#modal-box-4').fadeIn()
})

  $('#t_submit').click(function(event){
  event.preventDefault()
    
    if($('#todo-date').val() == '' || $('#todo-title').val() == '' || $('#todo-desc').val() == ''){
    $('#form-todo').trigger('reset')
    $('#alert-msg').fadeIn().removeClass('alert-success').addClass('alert-danger').html('Fill all  the fields').fadeOut(4000)
  }
  else{
    $.ajax({
      url: 'insert.php',
      type: 'POST',
      data: $('#form-todo').serialize(),
      success: function(data){
        if(data == 1){
          $('#form-todo').trigger('reset')
    $('#alert-msg').fadeIn().removeClass('alert-danger').addClass('alert-success').html('Record has been inserted successfully').fadeOut(4000)

          loadList()
        }
        else if(data == -1){
          $('#form-todo').trigger('reset')
    $('#alert-msg').fadeIn().removeClass('alert-success').addClass('alert-danger').html('Error! session ended').fadeOut(4000)
        }
        else{
          $('#form-todo').trigger('reset')
    $('#alert-msg').fadeIn().removeClass('alert-success').addClass('alert-danger').html('Data has not been inserted, please try again ').fadeOut(4000)
        }
      }
    })
  }
  })

  $(document).on('click', '.records',function(){
    id = $(this).data('id')

    $.ajax({
      url: 'edit.php',
      type: 'POST',
      data: {r_id: id},
      success: function(data){
        if(data == 0){
          $('#alert-msg').fadeIn().removeClass('alert-success').addClass('alert-danger').html('Error! session ended').fadeOut(4000)
        }
        else{
          $('#modal-box-5').fadeIn()
          $('#internal-box-5').html(data)
        }
      }
    })
  })

  $(document).on('click', '#edit-submit', function(){

    $.ajax({
      url: 'edit-submit.php',
      type: 'POST',
      data: $('#form-edit').serialize(),
      success: function(data){
        if(data == 1){
          loadList()
          $('#alert-msg').fadeIn().removeClass('alert-danger').addClass('alert-success').html('Record has been updated successfully').fadeOut(4000)
          
        }
        else if(data == -1){
          $('#alert-msg').fadeIn().removeClass('alert-success').addClass('alert-danger').html('Error! session ended').fadeOut(4000)
        }
        else{
          $('#alert-msg').fadeIn().removeClass('alert-success').addClass('alert-danger').html(data).fadeOut(4000)
        }
      }
    })
  })


  $(document).on('click', '#delete', function(){
    $('#modal-box-6').fadeIn()
    $('#confirm-msg').html(`Do you want to delete <b>${$('#edit-title').val()}</b>?`)
  })

  $('#cancel-btn').click(function(){
    $('#modal-box-6').fadeOut()
  })

  $('#ok-btn').click(function(){

    $.ajax({
      url: 'delete.php',
      type: 'POST',
      success: function(data){
        if(data == 1){
          loadList()
          $('#modal-box-6').fadeOut()
          $('#modal-box-5').fadeOut()
          $('#alert-msg').fadeIn().removeClass('alert-danger').addClass('alert-success').html('Task has been deleted successfully').fadeOut(4000)
        }
        else if(data == -1){
          $('#alert-msg').fadeIn().removeClass('alert-success').addClass('alert-danger').html('Error! session ended').fadeOut(4000)
        }
      }
    })
  })
})