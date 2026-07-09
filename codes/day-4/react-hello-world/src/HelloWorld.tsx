import { createElement } from "react"

export function HelloWorld() {

    //code

    //data
    const message = 'Welcome to React JS'

    //event handlers
    const headerhoverhandler = function () {
        window.alert('hello...')
    }


    // -------------------------
    //template

    //element
    //const header = document.createElement('h2')

    // binding data
    // header.innerText = message

    //event handler attachment
    //header.addEventListener('mouseover', headerhoverhandler)
    //header.onmouseover = headerhoverhandler

    // header.id = 'mainHeader'

    //style attributes
    // header.style.backgroundColor = 'burlywood'
    // header.style.fontFamily = 'Consolas'
    // header.style.color = 'black'
    // header.style.borderStyle = 'solid'
    // header.style.borderRadius = '5px'
    // header.style.borderWidth = '1px'
    // header.style.borderColor = 'burlywood'
    // header.style.textAlign = "center"

    //using React API
    const header = createElement(
        'h2',
        {
            id: 'mainHeader',
            onMouseOver: headerhoverhandler,
            style: {
                backgroundColor: 'burlywood',
                borderColor: 'burlywood',
                borderRadius: '5px',
                borderStyle: 'solid',
                borderWidth: '1px',
                color: 'black',
                fontFamily: 'Consolas',
                textAlign: 'center'
            }
        },
        message
    )
    return header; //returning an React element
}