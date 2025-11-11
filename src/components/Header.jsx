import logo from '../assets/investment-calculator-logo.png'
export default function Headers (){
    return (
        <header id='header'>
            <img  src={logo} alt="logo showing a bag with money" />
            <h1>investment calculater</h1>
        </header>
    );
}