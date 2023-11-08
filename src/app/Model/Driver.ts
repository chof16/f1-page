import { Constructor } from "./Constructor"
import { Circuit } from "./Circuit";
import { Race } from "./DriverQualyFying";
import { SeasonTable } from "./Season";
import { StandingsTable } from "./Standings";
import { Status } from "./Status";

export interface Data {
    MRData: MRData;
}


export interface MRData {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    DriverTable?: DriverTable;
    RaceTable?: RaceTable;
    SeasonTable?: SeasonTable;
    StandingsTable?: StandingsTable;
    CircuitTable?: CircuitTable;
    ConstructorTable? : ConstructorTable;
    StatusTable? : StatusTable;
}

export interface CircuitTable {
    Circuits: Circuit[] 
}

export interface StatusTable {
    Status: Status[] 
}

export interface ConstructorTable {
    Constructors: Constructor[] 
}

export interface RaceTable {
    driverId: string;
    Races: Race[];
}

export interface DriverTable {
    Drivers: Driver[];
}

export interface Driver {
    driverId: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: Date;
    nationality: string;
    permanentNumber?: string;
    code?: string;
}