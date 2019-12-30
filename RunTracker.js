class RunTracker{
constructor(name,email){

this.name=name
this.email=email
this.date=[]
this.time=[]
this.distance=[]


}

addRun(date,time,distance){

this.date.push(date)
this.time.push(time)
this.distance.push(distance)

}

totalDistance(){
   let total = 0
for(let i=0 ; i < this.distance.length ; i++){
    total+= this.distance[i]

}
return total


}
longestDistance(){
    let total = 0
    for(let i=0 ; i < this.distance.length ; i++){
        if (this.distance[i] > total){ total= this.distance[i]}
    
    }
    return total


}

averageSpeed(){
    // speed = totalDist / totalTime
    let totalD = 0
    for(let i=0 ; i < this.distance.length ; i++){
        totalD+= this.distance[i]
    }
    let totalT = 0
    for(let i=0 ; i < this.time.length ; i++){
        totalT+= this.time[i]
    }
    return totalD/totalT

}
}
runner = new  RunTracker("Salman", "Salman@salman.com");
runner.addRun("2017-01-01", 10, 30)
runner.addRun("2017-01-02", 5, 20)
console.log(runner.totalDistance())
console.log(runner.longestDistance())
console.log(runner.averageSpeed())
