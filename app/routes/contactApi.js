var Contact = require('../models/contact');
var config = require('../../config');
var nodemailer = require('nodemailer');

module.exports = function (app, express) {

     var contactRouter = express.Router();
     // on routes that end in /contactForm
    // ----------------------------------------------------
    contactRouter.route('/contactForm')

        // send mail of the user (accessed at POST http://localhost:8080/contactForm)
        .post(function (req, res) {

            var contact = new Contact();      // create a new instance of the Contact model
            contact.name = req.body.contactName;
            contact.phone = req.body.contactPhone;
            contact.email = req.body.contactEmail;
            contact.address = req.body.contactAddress;

        var data = req.body;
        // setup e-mail data with the data recieved from the body
        // create reusable transporter object using the default SMTP transport
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth:{
                user: 'pratyush.waykole89@gmail.com',
                pass:'friendsstays'
            }
        });

        var mailOptions = {
            from: data.contactEmail, // sender address
            to: 'pratyush.waykole89@gmail.com', // list of receivers
            subject: 'Message from' + data.contactName, // Subject line
            text: 'Phone No:' + data.contactPhone + '\n' + 'Address:' + data.contactAddress,
            html: '<p>You have recieved a new email regarding car information</p>'
        };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }
            else{
            console.log('Message sent: '  + info.response);
            }
        });

            //save the contact detials in the database also
            contact.save(function (err) {
                if (err) res.send(err);
                // return a message
                res.json(contact);
            });

        });

return contactRouter;
};
