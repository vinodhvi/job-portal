import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext()

 

export const AppContextProvider = (props) => {

// state for search

const [searchFilter, setSearchFilter] = useState({
    title :"",
    location:""
})

const [isSearch, setIsSearch] = useState(false)
const [showFilter, setShowFilter] = useState(false)
const [jobs, setJobs] = useState([])
// popup state
const [showRecruiterLogin , setShowRecruiterLogin] = useState(false)

    //    function to fetch job data
const fetchJobs = async () => {
       setJobs(jobsData) 
}
useEffect(() => {
    fetchJobs(fetchJobs)
}, [])


    const value ={
        searchFilter,setSearchFilter,isSearch, setIsSearch,
        jobs, setJobs, showFilter, setShowFilter,
        showRecruiterLogin, setShowRecruiterLogin



    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}