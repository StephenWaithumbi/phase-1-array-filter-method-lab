function findMatching(driversList, driverName){
    return driversList.filter(driver => driver.toLowerCase() === driverName.toLowerCase());
}

function fuzzyMatch(drivers, name){
    return drivers.filter(driver => driver.startsWith(name))
}

function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name)
}