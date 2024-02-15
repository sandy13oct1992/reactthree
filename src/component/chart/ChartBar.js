import react from 'react';

const ChartBar = (props) => {
 let barFillHight = '0';

 if(props.max >0) {
    barFillHight=Math.round((props.value/props.maxValue) *100) + '%';
 }
 
 return (
    
 )
}

export default ChartBar;