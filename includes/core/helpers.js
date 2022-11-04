_ValidateConfig = (conf) => {
	return (typeof conf === 'object' && conf !== null && conf.hasOwnProperty('DEBUG') && typeof conf.DEBUG === 'string') ? true : false;
}

module.exports = {
    validateConfig: _ValidateConfig
}