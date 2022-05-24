const simpleRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
$(document).ready(() => {
    $('#header-form').on('submit', (e) => {
        e.preventDefault();
        submitHandler('#header-mail', '#error-msg');
    });
    $('#newsletter-form').on('submit', (e) => {
        e.preventDefault();
        submitHandler('#newsletter-email', '#error-msg-2');
    });
})

const submitHandler = (mail, error) => {
    const headerMail = $(mail).val();
    if(simpleRegex.test(headerMail)){
        $(mail).css({"border": "1px solid black"});
        $(error).hide();
        return;
    }
    $(mail).css({"border": "1px solid red"});
    $(error).show();
}