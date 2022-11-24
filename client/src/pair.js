const pair=(array,numberOfChildrenContent)=>{
    const broken_Down=[];
    for(let i=0;i<array.length;i+=numberOfChildrenContent){
        broken_Down.push(array.slice(i,i+numberOfChildrenContent))
        
    }
    return broken_Down
}
export default pair