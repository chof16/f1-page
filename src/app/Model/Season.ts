export interface SeasonTable {
    driverId:        string;
    driverStandings: string;
    Seasons:         Season[];
}

export interface Season {
    season: string;
    url:    string;
}