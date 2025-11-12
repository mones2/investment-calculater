export default function UserInput({onChangeInput,userInput}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={userInput.initialInvestment} required onChange={(event) => onChangeInput('initialInvestment',event.target.value)} />
                </p>
                <p>
                    <label>Annula Investment</label>
                    <input type="number" value={userInput.annulaInvestment} required onChange={(event) => onChangeInput('annulaInvestment',event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={userInput.expectedReturn} required onChange={(event) => onChangeInput('expectedReturn',event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={userInput.duration} required onChange={(event) => onChangeInput('duration',event.target.value)} />
                </p>
            </div>

        </section>
    );
}