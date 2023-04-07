import { useState } from "react";
import Header from "./Components/Header";

function App() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <main>
                <section>
                    <div className="text-center mt-20">
                        <p className="text-grey">Ciao!</p>
                        <h1 className="text-white font-bold text-4xl">
                            Portfolio
                        </h1>
                    </div>
                    <div className="mt-4 mb-20 flex justify-center">
                        <img
                            src="/dev.png"
                            alt="char"
                            className="w-1/3 rounded-full"
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
