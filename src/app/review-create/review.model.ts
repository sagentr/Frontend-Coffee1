// import { createReviewForm } from './review-create.component'

export class Review {
    public id: number;
    public datePicker:  string;
    public nameOfBusiness: string;
    public beverageName: string[];
    public atmosphere: string[];
    public overallRating: number;
    public summary: string;

    constructor (id: number, datePicker: string, nameOfBusiness: string, beverageName: string[], atmosphere: string[], overallRating: number, summary: string) {
     this.id = id;
     this.datePicker =  datePicker;
     this.nameOfBusiness = nameOfBusiness;
     this.beverageName = beverageName;
     this.atmosphere = atmosphere;
     this.overallRating = overallRating;
     this.summary = summary;
    }
}
