const cookie = getCookie("Tanki-sport-season4");
// if (cookie) {
//   const obj = JSON.parse(cookie);
//   const login = obj.login;
//   const choice = obj.choice;
//   removeButtonAuth(login);
//   if (choice !== 'null') {
//     $(":radio[value=" + choice + "]").prop('checked', true);
//     $("input[type=radio]").attr('disabled', true);
//     console.log(choice, 1231)
//   } else {
//
//   }
// } else {
//   var buttonClick = document.getElementsByClassName('block_prize');
//   for (i = 0; i < buttonClick.length; i++)
//     buttonClick[i].onclick = function () {
//       toggleModal()
//     };
//   $("input[type=radio]").attr('disabled', true);
//   $("input[type=radio]").prop('checked', false);
// }

const err = {
  ru: 'Не удалось авторизоваться. Попробуй ещё раз или с другого браузера.',
  en: 'Unable to authorize. Try again or use another browser. ',
  de: 'Die Autorisierung ist fehlgeschlagen. Versuche es erneut oder benutze einen anderen Browser.',
  pl: 'Nieudana próba autoryzacji. Spróbuj ponownie lub użyj innej przeglądarki.',
}


const modal = document.getElementById("modal-aut");
const contentWrapper = document.getElementById("modal-content-wrapper");
if (modal) {
  const close = modal.querySelector('.close');
  close.addEventListener('click', function (e) {
    grecaptcha.reset();
    modal.classList.remove('open')
    e.preventDefault();
  });
  modal.addEventListener('click', function () {
    grecaptcha.reset();
    modal.classList.remove('open')
  });
  contentWrapper.addEventListener('click', function (e) {
    e.stopPropagation()
  });
}


function toggleModal() {
  const modal = document.getElementById("modal-aut");
  modal.classList.toggle('open');
  $('iframe').css('border', '');
  $('iframe').css("borderRadius", "");
  $('#login-auth').css('border', '');
  $('#password-auth').css('border', '');
  $('#message-auth').remove();
}

const modal2 = document.getElementById("modal-aut2");
const contentWrapper2 = document.getElementById("modal-content-wrapper2");
if (modal2) {
  const close = modal2.querySelector('.close');
  close.addEventListener('click', function (e) {
    grecaptcha.reset();
    modal2.classList.remove('open')
    e.preventDefault();
  });
  modal2.addEventListener('click', function () {
    grecaptcha.reset();
    modal2.classList.remove('open')
  });
  contentWrapper2.addEventListener('click', function (e) {
    e.stopPropagation()
  });
}

function toggleModal2() {
  $.ajax({
    method: "POST",
    url: url,
    data: 'login=' + $('#login-auth').val() + '&check=true',
  }).done(function (resp) {


    const modal = document.getElementById("modal-aut");
    modal.classList.toggle('open');
    const modal2 = document.getElementById("modal-aut2");
    modal2.classList.toggle('open');
    $('iframe').css('border', '');
    $('iframe').css("borderRadius", "");
    $('#login-auth').css('border', '');
    $('#password-auth').css('border', '');
    $('#message-auth').remove();
  });
}

function onClickAuth(form_auth) {
  const host = window.location.hostname;
  const url = "https://tankionline.com/pages/tanki-sport-season4/include/login.php";
  let data_info = '';
  if (form_auth === 'form_auth') {
    data_info = $('#modal-content-wrapper').serialize()
  } else {
    data_info = $('#modal-content-wrapper2').serialize() + '&login=' + $('#login-auth').val() + '&password=' +  $('#password-auth').val()
  }

  $.ajax({
    method: "POST",
    url: url,
    data: data_info,
  }).done(function (resp) {
    resp =JSON.parse(resp);
    if (!grecaptcha.getResponse()) {
      $('iframe').css('border', '1px solid red');
      $('iframe').css("borderRadius", "4px");
    } else if (resp.status && resp.status === 'ok') {
      toggleModal();
      setCookie("Tanki-sport-season4", JSON.stringify(resp), 60);
      removeButtonAuth(resp.login);

      if (new URLSearchParams(window.location.search).get('page') === 'vote') {
        document.getElementById('form_username').value = resp.login;
        document.getElementById('form_hash').value = resp.hash;
      }
      document.getElementById("modal-aut2").classList.toggle('open');
      $('#container-header').removeClass('d-none');
      $('#container-header').addClass('d-flex');
      $('#user_clan').removeClass('d-none');
      $('#user_clan').addClass('d-flex');
      var header_id = $('#header'),
        header_id_children = header_id.children();

      header_id_children[0].classList.add = 'col-6';
      header_id_children[0].classList.remove = 'col-4 order-0';
      header_id_children[1].classList.add = 'col-6';
      header_id_children[1].classList.remove = 'col-4 order-sm-1 order-2';
      header_id_children[2].classList.add = 'ml-sm-0 ml-md-auto';
      header_id_children[2].classList.remove = 'order-sm-2 order-3';
      header_id_children[3].classList.remove = 'order-sm-3 order-4';
      header_id_children[4].classList.add = 'col-auto mr-auto mr-sm-0 px-0';
      header_id_children[4].classList.remove = 'col-sm-auto col-4 order-sm-4 order-1 mb-4 mb-sm-0 text-center';


      var voting_act = $("#voting_act"), iputs_radio = $("input[type=radio]");

      voting_act.children('button').remove();
      $('#login_or_logout').addClass('d-none')

      if (resp.choice) {
        iputs_radio.attr('checked', false);
        console.log(iputs_radio[0].value);
        if (iputs_radio[0].value === resp.choice) {
          iputs_radio[0].checked = true;
          iputs_radio[1].disabled = true;
        } else if (iputs_radio[1].value === resp.choice){
          iputs_radio[1].checked = true;
          iputs_radio[0].disabled = true;
        }
        voting_act.append('<span class="text-green">Голос засчитан!</span>');
      } else {
        voting_act.append('<button class="btn btn-success text-uppercase font-weight-bold px-4" id="voting_button">Подтвердить</button>');
      }
      // $("input[type=radio]").attr('disabled', false);
      // if (resp.data.choice !== 'null') {
      //   $(":radio[value=" + resp.data.choice + "]").prop('checked', true);
      //   $("input[type=radio]").attr('disabled', true);
      // } else {
      //   $("input[type=radio]").attr('disabled', false);
      //   $("input[type=radio]").prop('checked', false);
      // }
    } else if (resp.status && resp.status === 'ADD_TWO_FA') {
      document.getElementById("modal-aut").classList.toggle('open');
      document.getElementById("modal-aut2").classList.toggle('open');
    } else  {
      console.log(resp)
      grecaptcha.reset();
      $('#login-auth').css('border', '1px solid red');
      $('#password-auth').css('border', '1px solid red');
      $("<p id='message-auth' style='    margin: 5px 0 -15px 0;\n" +
        "    color: #ff9d9d;\n" +
        "    font-size: 16px;'>" + err[LANG] + "</p>").insertBefore(".button_green_auth");
    }
  });
}

function removeButtonAuth(user) {
  $("#aut").remove();
  $("#modal-aut").remove();
  $("#container-header").append("<span id='username'>" + user + "</span><span onclick='exit()' class='cursor-pointer vote_link_info font-weight-bold'>Выйти</span>");
  $('#user_clan').append('<img src="assets/images/clan_none.png" alt="clan_none" class="mw-100">');
}

function exit() {
  eraseCookieFromAllPaths("Tanki-sport-season4");
  window.location.reload();
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookieFromAllPaths(name) {
  var pathBits = location.pathname.split('/');
  var pathCurrent = ' path=';
  document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';
  for (var i = 0; i < pathBits.length; i++) {
    pathCurrent += ((pathCurrent.substr(-1) != '/') ? '/' : '') + pathBits[i];
    document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';';
  }
}
