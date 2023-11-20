//
// class Sorter {
//     constructor(public collection:number[] | string[]) {
//     }
//     sort(){
//         const {length}=this.collection
//
//         for (let i=0;i<length;i++)
//         {
//             for (let j=0;j<length-i-1;j++)
//             {
//               if(this.collection[j]>this.collection[j+1])
//               {
//                   const leftHand=this.collection[j];
//                   this.collection[j]=this.collection[j+1]
//                   this.collection[j+1]=leftHand
//               }
//             }
//         }
//
//     }
// }
// const sorter=new Sorter([10,5,6,-5,4,9,0])
// sorter.sort()
// console.log(sorter.collection)