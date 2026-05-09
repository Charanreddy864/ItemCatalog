import React, {useState, useEffect} from 'react'
import Catalog from './catalog'
import Filters from './filters'
import data from '../data.json'

export default function HomePage(){
      const [filter,setFilter]=useState('All')
  const [categories,setCategories]=useState([])

  useEffect(()=>{

    console.log(filter)

  },[filter])

  useEffect(()=>{

    const uniqueCategories = ['All'];
  data.forEach(item => {
    if (!uniqueCategories.includes(item.category)) {
      uniqueCategories.push(item.category);
    }
  });
  setCategories(uniqueCategories);

  },[])

    return(
        <div>
                  <Filters setFilter={ setFilter } filter={filter} categories={ categories }/>
                  <Catalog data={data} filter={filter}/>
        </div>
    )

}