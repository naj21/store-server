const AWS = require('aws-sdk');

AWS.config.update({
	acesssKeyId: '',
	secreteKeyId: '',
	region: 'US East(N. Virginia)'
});

const ses = new AWS.SES({apiVersion: '2010-12-01'});
const params = {
	Destination: {
		ToAddresses: ['jesax013@gmail.com']
	},
	ConfigurationSetName: 'Feedback',
	Message: {
		Body: {
			Html: {
				Charset: 'UTF-8',
				Data: '<html><body><h1>Hello Jessica</h1></body></html>'
			},
			Text: {
				Charset: 'UTF-8',
				Data: 'Hello Jessica Sample description'
			}
		},
		Subject: {
			Charset: 'UTF-8',
			Data: 'Order Confirmation'
		}
	},
	Source: 'jesax013@yahoo.com'
}

const sendEmail = ses.sendEmail(params).promise();

sendEmail
	.then(data => {
		console.log('Email submitted to SES', data);
	})
	.catch(error => {
		console.log(error)
	});