const parse = require('pg-connection-string').parse;
const config = parse('postgres://rihhmvjwsoydot:597d6633d7f5170cada93f3b0b5a46d2702782ef8db0dc9086c85c722e0e8988@ec2-44-198-146-224.compute-1.amazonaws.com:5432/d7gpe425f209qi');

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
                ssl: true,
            },
        },
    },
});
