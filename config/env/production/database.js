const parse = require('pg-connection-string').parse;
const config = parse('postgres://pgiswjcixwpvax:3d8178f6c768ac06db50e1c61459f10fad7a7b5785f1f2d91c9287c575e8319c@ec2-52-23-45-36.compute-1.amazonaws.com:5432/d64195ubq1mord');

module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'postgres',
                host: config.host,
                port: config.port,
                database: config.database,
                username: config.user,
                password: config.password,
                ssl: {
                    rejectUnauthorized: false,
                },
            },
            options: {
                ssl: false,
            },
        },
    },
});
