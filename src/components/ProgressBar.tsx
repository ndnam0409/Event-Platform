import React from 'react'

const ProgressBar = ({step}) => {
  return (
    <div className="w-full bg-gradient-to-r ">	
        <div className="flex pb-3 ">
            <div className="flex-1">
            </div>
    
            <div className="flex-1">
                <div className="w-10 h-10 bg-blue-400 mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-white text-center w-full"><i className="fa fa-check w-full fill-current white"></i></span>
                </div>
            </div>
    
    
            <div className="w-1/6 align-center items-center align-middle content-center flex">
                <div className="w-full bg-blue-400 rounded items-center align-middle align-center flex-1">
                     <div className=" bg-blue-300 text-xs leading-none py-1 text-center text-grey-darkest rounded " ></div>
                </div>
            </div>
        
            
            <div className="flex-1">
                <div className="w-10 h-10 bg-blue-400 mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-white text-center w-full"><i className="fa fa-check w-full fill-current white"></i></span>
                </div>
            </div>
        
            <div className="w-1/6 align-center items-center align-middle content-center flex">
                <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
                     <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded " ></div>
                </div>
            </div>
        
            <div className="flex-1">
                <div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-grey-darker text-center w-full">3</span>
                </div>
            </div>
        
        
            <div className="w-1/6 align-center items-center align-middle content-center flex">
                <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
                     <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded " ></div>
                </div>
            </div>
    
    
            <div className="flex-1">
                <div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
                    <span className="text-grey-darker text-center w-full">4</span>
                </div>
            </div>
        
        
            <div className="flex-1">
            </div>		
        </div>
        
        <div className="flex text-xs content-center text-center">
            <div className="w-1/4">
                Event Information
            </div>
            
            <div className="w-1/4">
                Ticket
            </div>
            
            <div className="w-1/4">
                Policy
            </div>
            
            <div className="w-1/4">
                Confirm
            </div>			
        </div>
    </div>
  )
}

export default ProgressBar