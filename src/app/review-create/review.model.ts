// import { createReviewForm } from './review-create.component'

export class Review {
    public id: number;
    public dateOfVisit:  string;
    public nameOfBusiness: string;
    public beverageName: string[];
    public atmosphere: string[];
    public overallRating: string[];
    public summary: string;

    constructor (id: number, dateOfVisit: string, nameOfBusiness: string, beverageName: string[], atmosphere: string[], overallRating: string[], summary: string) {
     this.id = id;
     this.dateOfVisit =  dateOfVisit;
     this.nameOfBusiness = nameOfBusiness;
     this.beverageName = beverageName;
     this.atmosphere = atmosphere;
     this.overallRating = overallRating;
     this.summary = summary;
    }
}
