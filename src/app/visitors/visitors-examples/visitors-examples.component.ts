import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitors-examples',
  templateUrl: './visitors-examples.component.html',
  styleUrls: ['./visitors-examples.component.scss']
})
export class VisitorsExamplesComponent implements OnInit {

  constructor() { }

  imgs: string[] = [
    "Cadeira.jpg","Sofa1.jpg","Sofa2.jpg","Sofa3.jpg","Sofa4.jpg","Sofa5.jpg","sofa6.jpg"
  ];

  filesImg: string[] = [];

  ngOnInit(): void {
    let path = "../../../assets/img/Anteriores/";
    for (let item of this.imgs) {
      let test = `${path}${item}`;
      this.filesImg.push(test);
      console.log(test);
    }
  }

}
