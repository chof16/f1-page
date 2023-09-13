import { Constructor } from "./Constructor";
import { Driver } from "./Driver";

export interface StandingsTable {
    season: string;
    StandingsLists: StandingsList[];
}

export interface StandingsList {
    season: string;
    round: string;
    DriverStandings?: DriverStanding[];
    ConstructorStandings?: ConstructorStanding[];
}

export interface ConstructorStanding {
    position:     string;
    positionText: string;
    points:       string;
    wins:         string;
    Constructor:  Constructor;
}

export interface DriverStanding {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: Driver;
    Constructors: Constructor[];
}