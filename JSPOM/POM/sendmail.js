var nodemailer = require('nodemailer')
var transport = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:"pavankumar.nagaraj.ad@gmail.com",
        pass:"Bangalore@123"
    }
});

var mailOptions = {
    from:"pavankumar.nagaraj.ad@gmail.com",
    to:"sanjaynaikm@gmail.com, lokaraghavareddy@gmail.com",
    subject:"test email",
    text:"test body",
    // attachments:[{
    //     "path":"path of the file"
    // }]
};

transport.sendMail(mailOptions, function(err, data){
    if(err){
        console.log(err)
    }
})