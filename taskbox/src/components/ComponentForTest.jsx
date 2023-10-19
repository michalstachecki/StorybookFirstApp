import { useState } from "react";

export default function ComponentForTest() {
    const [isTextDisplayed, changeIsTextDisplayed] = useState(false);
    const onClick = () => {
        changeIsTextDisplayed(true);
    }

    return (<>
        <button role="button" name="TestButton" onClick={onClick}>Click for test</button>
        <br />
        {isTextDisplayed && <label>Text Displayed</label>}
    </>)
}