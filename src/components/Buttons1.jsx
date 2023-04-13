
export default function Buttons1 (props) {
    
    const {buttonsData} = props;
   
    

    return ( 
        <>
        {buttonsData.map(x=>{
            return(<button key={x.key} value={x.value} name={x.name}>{x.name}</button>)
        })}
        
        </>
   
    )
}