/**
 * @author      Nhatcoder2k3
 * @version     1.0.0
 * @homeurl     https://github.com/nhatcoder2k3/ginbot-cli 
 * @facebook    https://www.facebook.com/vuminhnhat10092003
 */
 const chalk = require('chalk');
 
 module.exports = (data,options) => {
   switch(options){
     //lỗi
     case "error":
       console.log(chalk.bold.hex("#5C1414").bold("[ERROR] »") + data);
     break;
      
     //cảnh báo
     case "warning":
       console.log(chalk.bold.hex("#E6A845").bold("[WARNING] »") + data);
     break;
     
     //thành công
     case "success":
       
     break;
     
     //mặc định
     default:
     break;
   }
 }
 module.exports.loader = (data) => {
   
 }