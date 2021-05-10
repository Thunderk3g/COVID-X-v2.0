// $(function drop(){
//   $('.dropdown.item')
//   .dropdown();

// });

$('.menu-button').on('click', function () {
  $('.v-menu').toggleClass('hide');
  $('.v-menu').toggleClass('show');
});

$(function () {
  $('.one-half.left').on('mouseenter', function () {
    $('.container').addClass('left-is-hovered');
  }).mouseleave(function () {
    $('.container').removeClass('left-is-hovered');
  });

  $('.one-half.right').on('mouseenter', function () {
    $('.container').addClass('right-is-hovered');
  }).mouseleave(function () {
    $('.container').removeClass('right-is-hovered');
  });

  $('.dropdown.item')
    .dropdown();

  $('.menu .item')
    .tab();

  $('.ui.sidebar').sidebar({
    context: $('.ui.pushable.segment'),
    transition: 'overlay',
  }).sidebar('attach events', '#mobile_item');

  $('.plus')
    .on('click', function () {
      $('.search.item, .primary > .item:not(:last-of-type)')
        .hide();
      $('.slide > .item')
        .addClass('open');
      $('.slide .remove')
        .addClass('spin');
    });
  $('.remove')
    .on('click', function () {
      $(this)
        .removeClass('spin');
      $('.search.item, .primary > .item:not(:last-of-type)')
        .show();
      $('.slide > .item')
        .removeClass('open');
    });

  //   if($( window ).width() < 780){
  //     $(function(){
  //     $('.pushable.segment').addClass('display');
  //   });
  // };

  //Validate Full name
  $('#namecheck').hide();
  let nameError = true;
  $('#fullname').keyup(function () {
    validateName();
  });

  function validateName() {
    let nameValue = $('#fullname').val();
    if (nameValue.length == '') {
      $('#namecheck').show();
      nameError = false;
      return false;
    } else if ((nameValue.length < 3) ||
      (nameValue.length > 10)) {
      $('#namecheck').show();
      $('#namecheck').html("**length of username must be between 3 and 10");
      nameError = false;
      return false;
    } else {
      $('#namecheck').hide();
    }
  }
  //Address
  $('#addresscheck').hide();
  let addError = true;
  $('#address').keyup(function () {
    validateAddress();
  });

  function validateAddress() {
    let addressValue = $('#address').val();
    if (addressValue.length == '') {
      $('#addresscheck').show();
      addError = false;
      return false;
    } else {
      $('#addresscheck').hide();
    }
  }


  // Validate Contact
  $('#contactcheck').hide();
  let contactError = true;
  $('#contact').keyup(function () {
    validateContact();
  });

  function validateContact() {
    let contactValue = $('#contact').val();
    if (contactValue.length == '') {
      $('#contactcheck').show();
      contactError = false;
      return false;
    } else if (contactValue.length != 10) {
      $('#contactcheck').show();
      $('#contactcheck').html("**Enter a valid 10 digit contact number");
      contactError = false;
      return false;
    } else {
      $('#contactcheck').hide();
    }
  }

  // Validate selection
  $('#volunteererr').hide();
  let volunteerError = true;
  $('#volunteerFor').keyup(function () {
    validateVolunteer();
  });

  function validateVolunteer() {
    let volValue = $('#volunteerFor').val();
    if (volValue.length == '') {
      $('#volunteererr').show();
      volunteerError = false;
      return false;
    } else {
      $('#volunteererr').hide();
    }
  }



  // Validate Email
  $('#emailcheck').hide();
  let emailError = true;
  $('#email').keyup(function () {
    validateEmail();
  });

  function validateEmail() {
    const email = $('#email').val();
    let regex =
      /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (regex.test(email) == false) {
      $('#emailcheck').show();
      emailError = true;
      return false;

    } else {
      $('#emailcheck').hide();
      emailError = false;
    }
  }
});




///dump

// $('.needhelp').form({
//   fields: {
//     firstname: {
//       identifier: 'firstname',
//       rules: [{
//         type: 'empty',
//         prompt: 'Please enter your First name'
//       }]
//     },
//     lastname: {
//       identifier: 'lastname',
//       rules: [{
//         type: 'empty',
//         prompt: 'Please enter your Last name'
//       }]
//     },
//     address: {
//       identifier: 'address',
//       rules: [{
//         type: 'minLength[3]',
//         prompt: 'Please enter a valid address.'
//       }]
//     },
//     urgency: {
//       identifier: 'urgency',
//       rules: [{
//         type: 'empty',
//         prompt: 'Please specify your urgency.'
//       }]
//     },
//     gender: {
//       identifier: 'gender',
//       rules: [{
//         type: 'empty',
//         prompt: 'Please select a gender'
//       }]
//     },
//     email: {
//       identifier: 'email',
//       rules: [{
//         type: 'email',
//         prompt: 'Please enter a vaid Email address.'
//       }]
//     },
//     requestfor: {
//       identifier: 'requestfor',
//       rules: [{
//         type: 'empty',
//         prompt: 'Please select a request'
//       }]
//     },
//     ph_no: {
//       identifier: 'ph_no',
//       rules: [{
//           type: 'empty',
//           prompt: 'Please enter a password'
//         },
//         {
//           type: 'minLength[10]',
//           prompt: 'Please enter a a valid 10-digit Ph-number'
//         }
//       ]
//     }
//   }
// });


// $('.contribute').form({
//   fields: {
//     fullname: {
//       identifier: 'fullname',
//       rules: [{
//         type: 'empty',
//         prompt: 'Please enter your Full name'
//       }]
//     },
//     address: {
//       identifier: 'address',
//       rules: [{
//         type: 'minLength[3]',
//         prompt: 'Please enter a valid address.'
//       }]
//     },
//     email: {
//       identifier: 'email',
//       rules: [{
//         type: 'email',
//         prompt: 'Please enter a vaid Email address.'
//       }]
//     },
//     ph_no: {
//       identifier: 'contact',
//       rules: [{
//           type: 'empty',
//           prompt: 'Please enter your contact number.'
//         },
//         {
//           type: 'minLength[10]',
//           prompt: 'Please enter a a valid 10-digit mobile number'
//         }
//       ]
//     },
//     volunteerfor: {
//       identifier: 'volunteerfor',
//       rules: [{
//         type: 'empty',
//         prompt: 'Please select what you want to volunteer for.'
//       }]
//     },
//   }
// });

// $('.contribute').form({
//   fields: {
//     username: {
//       identifier: 'username',
//       rules: [{
//         type: 'empty',
//         prompt: 'Username is required'
//       }]
//     },
//     address: {
//       identifier: 'password',
//       rules: [{
//         type: 'empty',
//         prompt: 'Password is required'
//       }]
//     },
//   }
// });
