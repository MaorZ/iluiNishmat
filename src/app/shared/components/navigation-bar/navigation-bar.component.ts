import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group
} from '@angular/animations';

export enum NavigationDirection {
  FROM_SIDE_START,
  FROM_SIDE_END,
  FROM_TOP,
  FROM_BOTTOM
}

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  animations: [
    trigger('open', [
      transition(':enter', [
        style({
          'background-color': 'rgba(0,0,0,0)'
        }),
        query('.navigation-bar', style({
          transform: 'translateX({{fromX}}) translateY({{fromY}})'
        })),
        group([
          animate('0.4s'),
          query('.navigation-bar', animate('0.4s', style({
            transform: 'translateX(0%) translateY(0%)'
          }))),
        ])
      ],
      {
        params: { fromX: '100%', fromY: '0%' }
      }),
      transition(':leave', [
        group([
          animate('0.4s', style({
            'background-color': 'rgba(0,0,0,0)'
          })),
          query('.navigation-bar', animate('0.4s', style({
            transform: 'translateX({{fromX}}) translateY({{fromY}})'
          }))),
        ])
      ],
      {
        params: { fromX: '100%', fromY: '0%' }
      }),
    ]),
  ],
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit, OnChanges {

  public justify: string;
  public valign: string;
  public width: string;
  public height: string;
  public openParams: {
    fromX: string;
    fromY: string;
  };

  @Input() direction: NavigationDirection = NavigationDirection.FROM_SIDE_START;
  @Input() title: string;
  @Input() isOpen = false;

  @Output() close: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.calcDirections();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('direction' in changes) {
      this.calcDirections();
    }
  }

  calcDirections(): void {
    switch (this.direction) {
      case NavigationDirection.FROM_TOP:
        this.justify = 'flex-start';
        this.valign = 'flex-start';
        this.width = '100vw';
        this.height = 'auto';
        this.openParams = {
          fromX: '0%',
          fromY: '-100%'
        };
        break;
      case NavigationDirection.FROM_BOTTOM:
        this.justify = 'flex-start';
        this.valign = 'flex-end';
        this.width = '100vw';
        this.height = 'auto';
        this.openParams = {
          fromX: '0%',
          fromY: '100%'
        };
        break;
      case NavigationDirection.FROM_SIDE_END:
        this.justify = 'flex-end';
        this.valign = 'flex-start';
        this.width = '320px';
        this.height = '100vh';
        this.openParams = {
          fromX: '-100%',
          fromY: '0%'
        };
        break;
      case NavigationDirection.FROM_SIDE_START:
      default:
        this.justify = 'flex-start';
        this.valign = 'flex-start';
        this.width = '320px';
        this.height = '100vh';
        this.openParams = {
          fromX: '100%',
          fromY: '0%'
        };
    }
  }
}
