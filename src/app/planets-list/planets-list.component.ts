import {Component, OnInit} from '@angular/core';
import {PlanetsService} from "./planets.service";
import {isType} from "@angular/core/src/type";

@Component({
    selector: 'app-planets-list',
    templateUrl: './planets-list.component.html',
    styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
    planetsArray: string[] = [];
    planetsList: string[] = [];
    planetsPage: number = 2;
    pageNumber: number = 1;
    countOnPage: string = '5';

    constructor(private planetsService: PlanetsService) {
    }

    searchPlanets($event, recursion) {
        if(!recursion || $event == '') {
            this.planetsPage = 2;
            this.planetsList = [];
            this.planetsArray = [];
        }
        this.planetsService.exportPlanets(`planets/?search=${$event}`).subscribe(
            search => {

                //Pushing array
                for(let i in search['results']){
                    this.planetsArray.push(search['results'][i]);
                }

                // Runing recursion
                if(search['next'] != null){
                    this.searchPlanets(`${$event}&page=${this.planetsPage}`, true);
                    this.planetsPage++;
                } else {
                    this.outputListBySize(this.countOnPage);
                }
            });
    }

    getPlanets(link, recursion) {
        if(!recursion) {
            this.planetsPage = 2;
            this.planetsList = [];
            this.planetsArray = [];
        }

        // Run function Get Planets From Api
        this.planetsService.exportPlanets(link).subscribe(
            (data) => {

                //Pushing array
                for(let i in data['results']){
                    this.planetsArray.push(data['results'][i]);
                }

                // Runing recursion
                if(data['next'] != null){
                    this.getPlanets(`planets/?page=${this.planetsPage}`, true);
                    this.planetsPage++;
                } else {
                    this.outputListBySize(this.countOnPage);
                    // this.planetsList = this.planetsArray;
                }
            }
        );
    }

    outputListBySize(count) {
        // this.pageNumber;
        // this.countOnPage;
        console.log(count);
        this.planetsList = this.planetsArray.slice(0, count);
    }

    ngOnInit() {
        this.getPlanets('planets', false);
    }

}
