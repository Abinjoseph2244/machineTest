import React, { useEffect, useState } from 'react'
import './Pages.css'
function Pages() {
    // const [change, setChange] = useState(false)
    const [selected, setSelected] = useState(0)
    // useEffect(() => {
    //     setChange(!change)
    // }, [selected])
    return (
        <div className='d-flex'>
            <div className='pageIndicator' onClick={e => {
                let selectedPageNo = (selected - 1) % 5
                if (selectedPageNo < 0) selectedPageNo *= -1
                setSelected(selectedPageNo)
                console.log(selectedPageNo);
            }
            }><i class="fa fa-solid fa-chevron-left"></i></div>
            {
                Array(1, 2, "..", 9, 10)
                    .map((elem, i) =>
                        i == selected ?
                            <div className='pageIndicator pageSelected'>{elem}</div>
                            :
                            <div className='pageIndicator'>{elem}</div>
                    )
            }
            <div className='pageIndicator' onClick={e => {
                setSelected((selected + 1) % 5)
            }}><i class="fa fa-solid fa-chevron-right"></i></div>
        </div>
    )
}

export default Pages