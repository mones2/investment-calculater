import { useState } from "react";
export default function UserInput() {
    const [userInput,setUserInput] = useState({
        initialInvestment:10000,
        annulaInvestment:1200,
        expectedReturn:6,
        duration:10,
    })
    function handleChange(inputIdentifier,newValue){
       setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier] : newValue
        }
       });
    }
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={userInput.initialInvestment} required onChange={(event) => handleChange('initialInvestment',event.target.value)} />
                </p>
                <p>
                    <label>Annula Investment</label>
                    <input type="number" value={userInput.annulaInvestment} required onChange={(event) => handleChange('annulaInvestment',event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={userInput.expectedReturn} required onChange={(event) => handleChange('expectedReturn',event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={userInput.duration} required onChange={(event) => handleChange('duration',event.target.value)} />
                </p>
            </div>

        </section>
    );
}