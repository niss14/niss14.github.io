import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';

platformBrowser().bootstrapModule(AppModule, {
  
})
  .catch(err => console.error(err));

/*
  Ojala funcione
*/

let nodo1 = document.getElementById("id1");
console.log(nodo1?.innerText);
/**
 * commenta ahhh
 */
//Text Correction
//Text add