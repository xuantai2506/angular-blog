import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.css']
})

export class ControlMessagesComponent implements OnInit {

  constructor() { }
  @Input() control!: FormControl | undefined
  ngOnInit(): void {
  }

}
