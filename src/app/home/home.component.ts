import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  API_ENDPOINT = 'http://localhost:8000/api';
  movies: Movie[];
  constructor(private moviesService: MoviesService, private httpClient: HttpClient) {
      httpClient.get(this.API_ENDPOINT + '/movies' ).subscribe((data: Movie[])=>{
        console.log(data); 
        this.movies = data;
      }); 

   }
  ngOnInit() {
  }

}
