/* eslint-disable no-console */
require('babel-register')({
    presets: ['env']
});

const sqlFormatter = require('./src/sqlFormatter.js');
const specialWordChars = [':', '/', '\\-', '\\.'];

const regx = new RegExp(`^([\\w${specialWordChars.join("")}]+)`);

console.log(regx);

const result = sqlFormatter.default.format(`add jar viewfs:///home/system/hive/resources/reco/jars/reco_udf-1.0-SNAPSHOT.jar;`, {
    specialWordChars,
    uppercase: true,
});
console.log(result);

const result2 = sqlFormatter.default.format(`SELECT
*
FROM
ac_db_binlog; 
DELETE jar viewfs:///home/system/hive/resources/abtest/kuaishou-abtest-udf-latest.jar; `, {
    specialWordChars,
    uppercase: true,
});
console.log(result2);

// const uppercaseResult = sqlFormatter.default.format(`select author_id,
// photo_id
// from ks_dw_dim.dw_dim_photo
// where ds <= '{{ ds }}'
// and ds >= "{{ ds-30 }}"
// and author_id > 0
// and photo_id > 0
// group by author_id,
// photo_id`, {
//     specialWordChars: [ '://'],
//     uppercase: true,
// });
// console.log(uppercaseResult);
