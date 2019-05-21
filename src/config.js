const config = {
    apiURL: 'http://localhost:8000',
    facebookAppId: '634350103696443'
};



switch (process.env.REACT_APP_ENV) {
    case 'test':
        config.apiURL = 'http://localhost:8010';
        break;
    default:
}

export default config;