import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  ngOnInit() {
    $(document).ready(function() {
      $('#spinner').fadeOut(1000,function () {
        $('body').css('overflow','auto')
      })
    })
  }
}
