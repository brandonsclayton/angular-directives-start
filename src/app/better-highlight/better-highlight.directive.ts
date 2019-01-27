import { 
    Directive,
    Renderer2,
    OnInit,
    ElementRef,
    HostListener,
    HostBinding, 
    Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    // this.backgroundColor = 'blue';
    // this.renderer.setStyle(
    //     this.elementRef.nativeElement,
    //     'background-color',
    //     'blue');
  }

  @HostListener('mouseleave') mouseExit(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    // this.backgroundColor = 'transparent';
    // this.renderer.setStyle(
    //     this.elementRef.nativeElement,
    //     'background-color',
    //     'transparent');
  }

}
