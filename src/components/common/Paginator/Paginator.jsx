import React, { useState } from 'react';
import s from './Paginator.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { userAPI } from '../../../api/api';
import cn from 'classnames';
let Paginator = ({totalUserCount, pageSize, currentPage, onPageClick, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;
    
    return <div>
        {portionNumber > 1 && 
            <button onClick={() => {setPortionNumber(portionNumber-1)}}>PREV </button> }

        {pages
            .filter(p=> p>=leftPortionPageNumber && p<=rightPortionNumber)
            .map(p => {
                return <span className={cn({
                    [s.selectedPage]: currentPage === p
                }, s.pageNumber)}
                    key = {p}
                onClick={(e) => {onPageClick(p) }}>{p}</span> 
                
                    
                    //className={currentPage === p && s.selectedPage}>{p}</span>
            })}
        
        {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
            
        </div>
        
}
export default Paginator;