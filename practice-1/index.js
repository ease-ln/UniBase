    const input_short_title = ({id, type, title, rules, errorMsg}) => {
        return `
        <div class="input-container ShortTitle">
            <div class="ShortTitle">
                <p class="input-title"> <span class="star">✱</span> ${title}</p>
                <input id="${id}" type="${type}" class="input" ${rules}>
                <p class="form__error">${errorMsg}</p>
            </div>
        </div>
        `
    }

    const input_long_title = ({id, title, iconUrl, rules, errorMsg}) => {
        return `
        <div class="input-container longTitle">
            <div  class="longTitle">
                <p class="input-title"> ${title}</p>
                <input id="${id}" type="text" class="input" ${rules}>
                <p class="form__error">${errorMsg}</p>

            </div>

            <div class="icon-containter">
                <img src="${iconUrl}" class="icon"></imp> 
            </div>
        </div>
        `
    }

    const input_long_icon = ({id, iconUrl, rules, errorMsg}) => {
        return `
        <div class="input-container longTitle">
            <div  class="longTitle">
                <input id="${id}" type="text" class="input input-withoutTitle" ${rules}>
                <p class="form__error form_error_long">${errorMsg}</p>            

            </div>    
            <div class="icon-containter">
                <img src="${iconUrl}" class="icon"></imp> 
            </div>
        </div>

        `
    }

    const create_fields = () => {
        document.getElementsByClassName('fields')[0].innerHTML += (input_short_title({id: 'company-name', type: 'text', title: 'Название организации', rules: '', errorMsg: ''}))
        document.getElementsByClassName('fields')[0].innerHTML += (input_short_title({id: 'phone', type: 'tel', title: 'Телефон', rules: 'pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7}$" minlength="18" maxlength="18"', errorMsg: 'Это поле должно содержать телефон в формате +7 (123) 456-78-90'}))
        document.getElementsByClassName('fields')[0].innerHTML += (input_short_title({id: 'email', type: 'email', title: 'E-mail', rules: '', errorMsg: 'Это поле должно содержать E-Mail в формате example@site.com'}))

        document.getElementsByClassName('fields')[1].innerHTML += (input_long_title({id: 'course', title: '<span class="star">✱</span> Направление', iconUrl: './img/Vector.svg'}))

        document.getElementsByClassName('fields')[1].innerHTML += (input_long_icon({id: 'global' , iconUrl: './img/global 1.svg', rules: 'pattern="([A-Za-z0-9_]{1,48})[\.]([A-Za-z0-9_]{1,15})"', errorMsg: 'Это поле должно содержать сайт в формате example.ru'}))
        document.getElementsByClassName('fields')[1].innerHTML += (input_long_icon({id: 'vk', iconUrl: './img/vk 1.svg', rules: 'pattern="vk.([A-Za-z0-9_]{1,3})/([A-Za-z0-9_]{1,64})"', errorMsg: 'Это поле должно содержать сайт в формате vk.com/shans'}))
        document.getElementsByClassName('fields')[1].innerHTML += (input_long_icon({id: 'ok', iconUrl: './img/odnoklassniki 3.svg', rules: 'pattern="ok.([A-Za-z0-9_]{1,3})/([A-Za-z0-9_]{1,64})"', errorMsg: 'Это поле должно содержать сайт в формате vk.com/shans'}))
        document.getElementsByClassName('fields')[1].innerHTML += (input_long_icon({id: 'f', iconUrl: './img/Icon.svg', rules: 'pattern="facebook.([A-Za-z0-9_]{1,3})/([A-Za-z0-9_]{1,64})"', errorMsg: 'Это поле должно содержать сайт в формате vk.com/shans'}))
        document.getElementsByClassName('fields')[1].innerHTML += (input_long_icon({id: 'inst', iconUrl: './img/Instagram_Color_icon-icons.com_71811 1.svg', rules: 'pattern="instagram.([A-Za-z0-9_]{1,3})/([A-Za-z0-9_]{1,64})"', errorMsg: 'Это поле должно содержать сайт в формате vk.com/shans'}))
        document.getElementsByClassName('fields')[1].innerHTML += (input_long_icon({id: 'youtube', iconUrl: './img/youtube 2.svg', rules: 'pattern="youtube.([A-Za-z0-9_]{1,3})/([A-Za-z0-9_]{1,64})"', errorMsg: 'Это поле должно содержать сайт в формате vk.com/shans'}))

        document.getElementsByClassName('fields')[1].innerHTML += (input_long_title({id: 'leader', title: 'Руководитель', iconUrl: '', rules: '^[а-яА-ЯёЁa-zA-Z]+ [а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+$', errorMsg: 'Введите ФИО'}))
    }

    create_fields();
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // send btn
    const checkErrors = () => {
        const errors = document.querySelectorAll('input');
        let valid = !Array.from(errors).some(el => el.validationMessage != '')
        let valid2 = !Array.from(errors).some(el => el.value == '')

        if(valid && valid2) {
            document.getElementById('pop-up-form-accepted').style.display = 'block';

            console.log({
                'compamy_name' : document.getElementById('company-name').value,
                'logo' : document.getElementById('logo').src,
                'phone' : document.getElementById('phone').value,
                'email' : document.getElementById('email').value,
                'course' : document.getElementById('course').value,
                'vk' : document.getElementById('vk').value,
                'ok' : document.getElementById('ok').value,
                'f' : document.getElementById('f').value,
                'inst' : document.getElementById('inst').value,
                'youtube' : document.getElementById('youtube').value,
                'leader' : document.getElementById('leader').value,
            })
        }
    }

    document.getElementById('send-form-btn').addEventListener("click", checkErrors)

    // cancel btn
    const closeWindow = () => {
        document.getElementById('pop-up-form').style.display = 'none';
        document.getElementById('pop-up-form-accepted').style.display = 'none';
    }

    document.getElementById('cancel').addEventListener("click", closeWindow);
    window.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.bg') && !target.closest('.window')){
            closeWindow();
        }
    })

    // open btn
    const openWindow = () => {
        document.getElementById('pop-up-form').style.display = 'block';

    }

    document.getElementById('open-pop-up-btn').addEventListener('click', openWindow)

    // load logo
    const imgLoadHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function(ev2) {
            document.getElementById('logo').src = ev2.target.result;
        };

        const imgURL = reader.readAsDataURL(file);
    }

    document.getElementById('file').addEventListener('change', imgLoadHandler)

    // delete logo
    document.getElementById('logo-close-icon').addEventListener('click', () => {
        document.getElementById('logo').src = './img/Ellipse 44.svg';
    })
