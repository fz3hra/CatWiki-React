import React from 'react'

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    shape: {
        display: "flex",
        flexDirection: "row",
        gap: "8px"
    },
}

const Rating = ({value}) => {
    const maxValue = 5;
  return (
    <div style={styles.container}>
        <div style={styles.shape}>
            {
                Array(maxValue).fill().map((_, index) => {
                    return(
                        index < value ? (
                                <span key={index} className='  w-15 h-3 bg-dark-brown rounded-lg' />
                        ) : ( 
                                <span key={index} className=' w-15 h-3 bg-slate-300 rounded-lg' />
                            )                        
                    )
                })
            }
        </div>
    </div>
  )
}

export default Rating