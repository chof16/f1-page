import { Constructor } from "./Constructor";
import { Driver } from "./Driver";

export interface Result {
    number:       string;
    position:     string;
    positionText: string;
    points:       string;
    Driver:       Driver;
    Constructor:  Constructor;
    grid:         string;
    laps:         string;
    status:       string;
    Time?:        ResultTime;
    FastestLap?:  FastestLap;
}

export interface FastestLap {
    rank:         string;
    lap:          string;
    Time:         FastestLapTime;
    AverageSpeed: AverageSpeed;
}

export interface AverageSpeed {
    units: string;
    speed: string;
}

export interface FastestLapTime {
    time: string;
}

export interface ResultTime {
    millis: string;
    time:   string;
}