import request from 'request'
import oauth from 'oauth-1.0a'
import hmac from 'create-hmac'

/* Does this need to even be in Vue format? Would probably be better to execute this just as a straight JS file since it's nothing more than a function */

export const callHxApi = {
	methods: {
		callApi (requestData, apiParameters) {
			// A number of items here must be generated from the Healthx API Management tools in your organization. 
			// Consumer key, consumer secret, token key, token secret, and the instanceid are all derived from the application
			const auth = oauth({
				consumer: {
					key: 'fpNBtqeIVQsmfqLHsN6XeKlAP',
					secret: 'DPPyyqi2RyfCXrNYyXgG0/HGRk8Jt5b+YCObIgRIL/bGCYGt'
				},
				signature_method: 'HMAC-SHA1',
				hash_function(base_string, key) {
					return hmac('sha1', Buffer.from(key)).update(base_string).digest('base64');
				}
			}),
			token = {
				key: 'qhuyo03iljg',
				secret: 'n3qqbz91zRMmEnwzuMisv0KaN1E='
			},
			headers = {
				'content-type': 'application/json',
				'Access-Control-Request-Method': 'POST',
				'Access-Control-Request-Headers': 'instanceid',
				'instanceid': 'C793C1F2-BF69-478C-8F21-F3AAC1D2CDF5',
				'Authorization': auth.toHeader(auth.authorize(requestData, token)).Authorization
			}

			if (apiParameters) {
				return new Promise(resolve => {
					request({
						url: requestData.url,
						method: requestData.method,
						body: JSON.stringify(apiParameters),
						headers: headers
					}, function(error, response, body) {
						if (!error) {
							resolve(body)
						}
					})
				})
			} else {
				return new Promise(resolve => {
					request({
						url: requestData.url,
						method: requestData.method,
						headers: headers
					}, function(error, response, body) {
						if (!error) {
							resolve(body)
						}
					})
				})
			}
		}
	}
}