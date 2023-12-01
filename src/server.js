import {app} from './app.js';

app.listen(process.env.POR || 5000, ()=>{
  console.log('listening on port', process.env.POR || 5000);
});
