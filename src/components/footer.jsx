
export default function Footer() {

    const currentYear=new Date().getFullYear();
    return (
        <footer>
    <p> &copy; Vinay Andelimath {currentYear} </p>
 </footer>
    );
}

