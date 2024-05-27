import { Component, OnInit } from '@angular/core';
import { ReviewService } from '@app/_services';
import { Review } from '@app/_models';

@Component({
    selector: 'app-review-list',
    templateUrl: './review-list.component.html'
})
export class ReviewListComponent implements OnInit {
    reviews: Review[] = [];

    constructor(private reviewService: ReviewService) { }

    ngOnInit() {
        this.reviewService.getAll().subscribe(reviews => this.reviews = reviews);
    }

    editReview(id: string) {
        // Add your edit logic here
    }

    deleteReview(id: string) {
        this.reviewService.delete(id).subscribe(() => {
            this.reviews = this.reviews.filter(x => x.id !== id);
        });
    }

    addReview() {
        // Add your add logic here
    }
}
