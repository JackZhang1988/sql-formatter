/* eslint-disable no-console */
require('babel-register')({
    presets: ['env']
});

const sqlFormatter = require('./src/sqlFormatter.js');
const specialWordChars = ['://', '-\\S+-'];

const result = sqlFormatter.default.format(`add jar viewfs:///home/system/hive/resources/reco/jars/reco_udf-1.0-SNAPSHOT.jar;`, {
    specialWordChars,
    uppercase: true,
});
console.log(result);

const result2 = sqlFormatter.default.format(`SELECT a#comment, here\nFROM b --comment`, {
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
