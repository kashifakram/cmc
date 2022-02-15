import React from 'react'

export default function () {
    const handleChange = () => { };
    return (
        <form>
            Please select your country: &nbsp;
            <select value="aud" onChange={handleChange}>
                <option value="aud">Australia</option>
                <option value="gbp">UK</option>
                <option value="usd">USA</option>
            </select>
        </form>
    )
}
