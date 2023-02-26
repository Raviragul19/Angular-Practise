import { Observable } from "rxjs";

export function start(): Promise<any> {
    return new Promise((resolve : any, reject) => {
        console.log("intilizer is executed");        
        resolve();
    });
    }
export function end(){
    return new Observable((res)=>{
        console.log("second intilizer is executed");
        res.next("ravi")
        
    }).subscribe()
 }

export default {start,end};