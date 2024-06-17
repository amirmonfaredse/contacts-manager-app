const Spinner = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                    margin: "auto",
                    background: "none",
                    display: "block",
                    shapeRendering: 'auto',
                    width: 100,
                }}
                width="210px" height="210px" viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#bd93f9" strokeWidth="4" r="25"
                    strokeDasharray="117.80972450961724 41.269908169872416">
                    <animateTransform attributeName="transform" type="rotate"
                        repeatCount="indefinite" dur="1.36986301369863s"
                        values="0 50 50;360 50 50"
                        keyTimes="0;1"></animateTransform>
                </circle>
            </svg>
        </>
    )

}
export default Spinner;