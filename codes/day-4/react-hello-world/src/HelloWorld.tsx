export function HelloWorld() {

    const headerContent = 'Welcome to React JS'
    const paraContent = 'this is how components are nested'
    const headerhoverhandler = function () {
        window.alert('hello...')
    }
    const styles = {
        backgroundColor: 'burlywood',
        borderColor: 'burlywood',
        borderRadius: '5px',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'black',
        fontFamily: 'consolas'
    }

    return (
        <div>
            <h2 id="mainHeader"
                style={styles}
                onMouseOver={headerhoverhandler}
            >
                {headerContent}
            </h2>
            <br />
            <span>
                {paraContent}
            </span>
        </div>
    )
}