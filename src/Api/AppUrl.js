const BASEURL = "https://mean.stagingsdei.com:452"

 

export default {

    REGISTRATION: BASEURL + '/mentor/register',
     OTP:         BASEURL + '/auth/otpverify',
     LOGIN:       BASEURL + '/auth/login',
     FORGOT:      BASEURL + '/auth/forgot-password?email='
    }