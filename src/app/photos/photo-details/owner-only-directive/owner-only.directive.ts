import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
  selector: '[mfOwnerOnly]'
})
export class OwnerOnlyDirective implements OnInit {

  @Input()
  OwnerId: string;

  constructor(private userService: UserService, private renderer : Renderer2, private elementRef : ElementRef<HTMLElement>) { }
  ngOnInit(): void {
      this.userService.getUser().subscribe(user => {
        if ( !user || user.id != this.OwnerId)
          this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
      })
  }

}
