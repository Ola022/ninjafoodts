import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ninjafoodts';
  showMenu = true

  toggle(){
    const burger = document.querySelector('#burger')
    const menu = document.querySelector('#menu')

    if(menu?.classList.contains('hidden')){
      menu.classList.remove('hidden')
    }
    else{
      menu?.classList.add('hidden')
    }
  }

  switchTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
  }
  
}
