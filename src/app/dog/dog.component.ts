import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  text = 'But the dog wants to play!';
  imagePath = 'assets/images/excited_dog.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
