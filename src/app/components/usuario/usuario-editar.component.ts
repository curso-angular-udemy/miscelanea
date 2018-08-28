import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styles: []
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log('ruta hija editar');
    this.route.parent.params.subscribe( params => console.log(params));
   }

  ngOnInit() {
  }

}
