import { createContext, useContext, useReducer } from "react";

const EventContext=createContext();

const initialState={
    event:null,
    ticket:null,
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'createEvent':
            return {...state,event:action.payload}
        case 'createTicket':
            return {...state,ticket:action.payload}
        default:
            throw new Error("Unknown action");

    }
}
const FAKE_EVENT={
    eventName:null,
    eventType:null,
    location:null,
    startDate:null,
    endDate:null,
    capacity:null,
    picture:null,
    descriptiton:null,   
}
const FAKE_TICKET={
    area:"Q3",
    inf:[{
        seat:"A",
        number:10,
        price:10
    },
    {
        seat:"B",
        number:5,
        price:5
    }]
}

const EventProvider=({children})=>{
    const[{event,ticket},dispatch]=useReducer(reducer,initialState);

    const createEvent=()=>{
        dispatch({type:"createEvent",payload:FAKE_EVENT});
        return true;
    }
    const createTicket=()=>{
        dispatch({type:"createTicket",payload:FAKE_TICKET});
        return true;
    }
    return(
        <EventContext.Provider value={{event,ticket}}>
            {children}
        </EventContext.Provider>
    )
}

const useEvent=()=>{
    const context=useContext(EventContext);
    if(context===undefined){
        throw new Error("Something wrong")
    }
    return context;
}

export {EventProvider,useEvent};