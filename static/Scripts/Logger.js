const { transports, format } = require('winston');
const winston=require('winston');
const winstonMongodb=require('winston-mongodb');
const dotenv=require('dotenv');
dotenv.config();

const logConfiguration={
    transports:[
        new winston.transports.Console({
            level:'error',
            filename:'logs/logger.log',
            format:format.combine(
                format.timestamp(),
                format.json())
        }),
        new winston.transports.File({
            level:'info',
            filename:'logs/logger.log',
            format:format.combine(
                format.timestamp(),
                format.json())
        }),
        new winstonMongodb.MongoDB({
            level:'error',
            db:process.env.DB_CONNECTION,
            options:{
                useUnifiedTopology:true
            },
            collection:'server_logs',
            format:format.combine(
                format.timestamp(),
                format.json())
        })
            
    ]
};
const logger=winston.createLogger(logConfiguration);

format:winston.format.combine(
    winston.format.timestamp({
        format:'MMM-DD-YYYY HH:mm:ss:sss'
    }),

    winston.format.printf(info=>`${info.level}:${[info.timestamp]}:${info.message}`),
);
module.exports=logger;
