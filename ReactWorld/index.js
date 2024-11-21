const parent = document.getElementById("root")
const root = ReactDOM.createRoot(parent)
const h2 = React.createElement("h2",{style:{color:'red'}},"Welcome to ReactJS")
root.render(h2)