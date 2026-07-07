var para = document.createElement('p')
para.innerText = "this has been generated dynamically"

var hr = document.createElement('hr')

// document.body.appendChild(hr)
// document.body.appendChild(para)
document.body.append(hr, para)