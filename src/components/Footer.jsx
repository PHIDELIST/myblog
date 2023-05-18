import "./footer.css"
function Footer() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return (
        <footer>
             <p>delphi blogs pot &copy;{date} </p>
        </footer>
    )
}

export default Footer