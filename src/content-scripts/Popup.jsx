import React, {useState, useEffect} from 'react'

const Popup = () => {
    const [currentTab, setCurrentTab] = useState({})

    useEffect(() => {
        chrome.runtime.sendMessage({ type: "POPUP_INIT" }, async tab => {
            const t = await tab;
            console.log(t)
            setCurrentTab(t)
        });
    }, [])
    
    return <div className="overlay">
        <div className="popup">
            <div className="bg-red-200 text-green-900">
                <img src={currentTab.favIconUrl} />
                <h4>{currentTab.title}</h4>
            </div>
        </div>
    </div>
}

export default Popup