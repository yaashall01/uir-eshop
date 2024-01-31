import { Component, ElementRef, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/service/app.layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    constructor(public layoutService: LayoutService, public el: ElementRef) { }
}