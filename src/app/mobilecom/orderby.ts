import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name:"orderpipe"})
export class OrderPipe implements PipeTransform{
    transform(arr:any[],name:string,order:boolean){
        if(name==undefined){
            return arr;
        }
         let result:any[]; 
        if(order){
          result =this.ascending(arr,name);
          }
          else{
              result=arr;
          }
          return result;
    }
    ascending(arr:any[],name:string){
        arr.sort((a:any,b:any)=>{
            if(a[name]>b[name]){
                return 1;
            }
            return -1;
        });
        return arr;
    }
}

