/**
 * @author      Nhatcoder2k3
 * @version     1.0.0
 * @homeurl     https://www.facebook.com/vuminhnhat10092003
 */
 global.Core = require('./core');
 const Console = require('./core/Console.js');
 const Logo = require('./core/Logo.js');
 Logo();
 (async () => {
   global.ginbotDir = await pkgDir(proccess.cwd());
   const notFound = true;
   
   for(const name in global.Core) {
    const {keywords, params, fn} = global.Core[name];
    const method = argv._[0];
    try {
      if(keywords.includes(method)) {
        await fn(argv);
        notFound = false;
      } else {
        
      }
    } catch(e) {
      
    }
   }
 });