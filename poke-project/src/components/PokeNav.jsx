function PokeNav ({next, prev}) {
    return (
        <>
        <div className="navigation">
            <button onClick={prev}>Back</button>
            <button onClick={next}>Next</button>
        </div>
        </>
    )
}

export default PokeNav
