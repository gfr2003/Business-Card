import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private renderer: Renderer2) {}
  
  public lightTheme = false
  ngOnInit() {
    this.renderer.setAttribute(document.body , 'color-theme', 'dark')

  }
  public onToggleColorTheme(event) {
    const toggleCheck = event.detail.checked
    if(!toggleCheck){
      this.renderer.setAttribute(document.body , 'color-theme', 'dark')
      this.lightTheme = false
    } else {
      this.renderer.setAttribute(document.body , 'color-theme', 'light')
      this.lightTheme = true
    }
  }
}
