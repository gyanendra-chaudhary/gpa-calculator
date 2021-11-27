import React from 'react'

import Home from './Home'
import AgeCalculator from '../templates/AgeCalculator'
import CurrencyConverter from '../templates/CurrencyConverter'
import CvGenerator from '../templates/CvGenerator'
import GpaCalculator from '../templates/GpaCalculator'
import MemeCreator from '../templates/MemeCreator'
import NepaliConverter from '../templates/NepaliConverter'
import PercentageConverter from '../templates/PercentageConverter'


function Main({template}) {
    var temp;
   switch (template) {
       case "Home":
           temp=<Home />
           break;
        case "AgeCalculator":
            temp = <AgeCalculator />
            break;
        case "CurrencyConverter":
            temp = <CurrencyConverter />
            break;
        case "CvGenerator":
            temp = <CvGenerator />
            break;
        case "GpaCalculator":
            temp = <GpaCalculator />
            break;
        case "MemeCreator":
            temp = <MemeCreator />
            break;
        case "NepaliConverter":
            temp = <NepaliConverter />
            break;
        case "PercentageConverter":
            temp = <PercentageConverter />
            break;
        default:
            break;
    }
   
    return (
        <div className="p-4">            
            {
               temp
            }
        </div>
    )
}

export default Main
