function pwd_hash(pwd) {
	return require('crypto').createHash('sha256').update(pwd).digest('base64')
}