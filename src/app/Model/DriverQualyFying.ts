import { Circuit } from "./Circuit";
import { Constructor } from "./Constructor";
import { Driver } from "./Driver";
import { Result } from "./DriverResult";

export interface Race {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: Date;
    QualifyingResults?: QualifyingResult[];
    Results?: Result[];
    time?: string;
}

export interface QualifyingResult {
    number: string;
    position: string;
    Driver: Driver;
    Constructor: Constructor;
    Q1: string;
    Q2?: string;
    Q3?: string;
}