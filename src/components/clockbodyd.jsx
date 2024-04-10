function Value(){
    let time = new Date();
    return <p>Current Date Is {time.toLocaleDateString()} And Current Time Is {time.toLocaleTimeString()}</p>
}
export default Value;