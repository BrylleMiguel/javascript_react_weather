import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount((i) => (i += 1))}>increment</button>
        </div>
    );
}

export default App;
