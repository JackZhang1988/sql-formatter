/* eslint-disable no-console */
require('babel-register')({
    presets: ['env']
});

const sqlFormatter = require('./src/sqlFormatter.js');
// const specialWordChars = [':', '/', '\\-', '\\.'];

// const regx = new RegExp(`^([\\w${specialWordChars.join("")}]+)`);

// console.log(regx);

// const result = sqlFormatter.default.format(`add jar viewfs:///home/system/hive/resources/reco/jars/reco_udf-1.0-SNAPSHOT.jar;`, {
//     specialWordChars,
//     uppercase: true,
// });
// console.log(result);

// const result2 = sqlFormatter.default.format(`SELECT
// *
// FROM
// ac_db_binlog; 
// DELETE jar viewfs:///home/system/hive/resources/abtest/kuaishou-abtest-udf-latest.jar; `, {
//     specialWordChars,
//     uppercase: true,
// });
// console.log(result2);

// console.log('变量最大化测试');

// const modeResult = sqlFormatter.default.format(`select * from xxx; 
//     set hive.mode.tttt.select;
//     set mode.tttt;
//     select * from ttt mode = 111;
// `, {
//     uppercase: true,
// });

// console.log(modeResult);
console.log('模板变量');

const modeResult = sqlFormatter.default.format(`
    <#assign sqlStr='if(a>b, 1,0)'>
    select * from \${db}; 
    set hive.mode.tttt.select;
    set mode.tttt;
    select * from ttt mode = 111;
    where d.p_hourmin >= '2000'
`, {
    specialWordChars: [':', '/', '\\-', '\\.', '${.*}', '<#.*>', '>=', '<='],
    uppercase: true,
});

console.log(modeResult);

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
