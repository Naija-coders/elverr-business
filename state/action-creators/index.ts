import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"

export const depositMoney = (amount: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}
export const getuserfavorite = (favorite: any) => {
    return (dispatch:Dispatch<Action> ) => {
        dispatch({
            type: ActionType.FAVORITE,
            payload:favorite
        })
    
    } 
}
export const getmainservices = (services: any) => {
    return (dispatch:Dispatch<Action> ) => {
        dispatch({
            type: ActionType.USERSERVICE,
            payload:services
        })
    
    } 
}
export const getallservices = (allservices: any) => {
    return (dispatch:Dispatch<Action> ) => {
        dispatch({
            type: ActionType.ALLSERVICE,
            payload:allservices
        })
    
    } 
}
export const storecategory = (category: any) => {
    return (dispatch:Dispatch<Action> ) => {
        dispatch({
            type: ActionType.CATEGORY,
            payload:category
        })
    
    }
}
export const storeservices = (services: any) => {
    return (dispatch:Dispatch<Action> ) => {
        dispatch({
            type: ActionType.SERVICEVIAID,
            payload:services
        })
    
    }
}

export const recommendedServices = (recommendedservices: any) => {
    return (dispatch:Dispatch<Action> ) => {
        dispatch({
            type: ActionType.RECOMMENDED,
            payload:recommendedservices
        })
    
    }
}
export const previewedServices = (previewservice: any) => {
    return (dispatch:Dispatch<Action> ) => {
        dispatch({
            type: ActionType.PREVIEWSERVICE,
            payload:previewservice
        })
    
    }
}


export const mainServices = (mainservices: any) => {
    return (dispatch:Dispatch<Action> ) => {
        dispatch({
            type: ActionType.SERVICE,
            payload:mainservices
        })
    
    }
}
export const withdrawMoney = (amount: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}
export const loggedinuser = (user : any) => {
    console.log("did the user dispatch come here",user)
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.USER,
            payload: user
        })
    }
}

export const setViewed = (view : any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.VIEWED,
            payload: view
        })
    }
}
export const pagenumber = (pagenumber:any)=>{
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.PAGENUMBER,
            payload: pagenumber
        })
    }
}
export const bankrupt = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKRUPT
        })
    }
}
