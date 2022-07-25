const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    customer: ['Elon Musk', 'NASA', 'China'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function AddNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, launch);
}

module.exports = {
    getAllLaunches,
};