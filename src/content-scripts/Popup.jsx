import React from 'react'

const Popup = () => {
    return <div className="overlay">
        <div className="popup">
            <div className="bg-red-200 text-green-900">
                <h2>This is the popup.</h2>
                <p>If it has red bg, tailwind works.</p>
            </div>
        </div>
    </div>
}

export default Popup