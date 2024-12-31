//  otp

document.addEventListener('DOMContentLoaded', function () {
    const sendOtpButton = document.getElementById('sendOtpBtn');

    const phoneInput = document.getElementById('phoneInput');

    sendOtpButton.addEventListener('click', function () {
       
        const phoneNumber = phoneInput.value.trim();
        if (phoneNumber === '') {
            alert('Please enter mobile number');
            phoneInput.focus();
            return;
        }

        const otp = generateOTP();
        alert(`Your OTP is:${otp}`);
    });
    phoneInput.addEventListener('input', function () {
        sendOtpButton.disabled = phoneInput.value.trim() === '';
    });

    function generateOTP() {
        const digits = '0123456789';
        let otp = '';

        for (let i = 0; i < 6; i++) {
            otp += digits[Math.floor(Math.random() * 10)];


        }
        return otp;
    }
});


// cross function

document.addEventListener('DOMContentLoaded',function(){
    const crossElement = document.querySelector(".cross");
    crossElement.addEventListener('click',function(){
        window.location.href="../index.html";
    });
});