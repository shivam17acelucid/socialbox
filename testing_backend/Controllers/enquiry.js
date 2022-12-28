const Enquiry = require('../Models/enquiry');

exports.submitQuery = (req, res, next) => {
    let { firstName, lastName, phone, email, message } = req.body;
    const enquiry = new Enquiry({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message
    })
    enquiry.save()
        .then((data) => {
            res.status(200).json(data)
        })
}