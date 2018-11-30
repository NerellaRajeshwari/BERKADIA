import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GalleryService {
    constructor(private http: HttpClient) { }
    giveImageData() {
        const imagesURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=aa0456e75f0edfa414c490da77f7ef48&language=en-US&page=1';
        const res = this.http.get(imagesURL);
        return res;
    }

    getDetails(movieId) {
        const link = `https://api.themoviedb.org/3/tv/${movieId}?api_key=aa0456e75f0edfa414c490da77f7ef48&language=en-US`;
        const res = this.http.get(link);
        return res;
    }
    getReviews(movieId){
        const link1=`https://api.themoviedb.org/3/tv/${movieId}/reviews?api_key=aa0456e75f0edfa414c490da77f7ef48&language=en-US&page=1`;
        const res1= this.http.get(link1);
       return res1;
    }
    getSimilarMovies(movieId){
        const link2= `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=aa0456e75f0edfa414c490da77f7ef48&language=en-US&page=1`;
        const res2= this.http.get(link2);
        return res2;
    
    }
}
