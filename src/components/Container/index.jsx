import React from "react"
import styles from "./Container.module.css"
export default function Container() {
    return (
        <div className={styles.container}>
            <section className="firstpicture">
                <div className="border border-secondary border-1 rounded overflow-hidden">
                    <a href="/">
                        <img
                            className="w-100"
                            src="images/R.png"
                            alt="Pom Pom cushion 45x45 cm"
                        />
                    </a>
                    
                </div>
            </section>
            <section className="secondpicture">
                <div className="border border-secondary border-1 rounded overflow-hidden">
                    <a href="/">
                        <img className="w-100"  src="images/R.png" alt="Rustic mug" />
                    </a>
                </div>
            </section>
            <section className="thirdpicture">
                <div className="border border-secondary border-1 rounded overflow-hidden">
                    <a href="/">
                        <img
                            className="w-100"
                            src="images/R.png"
                            alt="Triplets easter rabbit 3-pack"
                        />
                    </a>
                </div>
            </section>
            <section className="fourthpicture">
                <div className="border border-secondary border-1 rounded overflow-hidden">
                    <a href="/">
                        <img
                            className="w-100"
                            src="images/R.png"
                            alt="Silvia lamp white"
                        />
                    </a>
                           </div>
            </section>
            <section className="fifthpicture">
                <div className="border border-secondary border-1 rounded overflow-hidden">
                    <a href="/">
                        <img
                            className="w-100"
                            src="images/R.png"
                            alt="High Dot stool leather"
                        />
                    </a>
                            </div>
            </section>
            <section className="sixthpicture">
                <div className="border border-secondary border-1 rounded overflow-hidden">
                    <a href="/">
                        <img
                            className="w-100"
                            src="images/R.png"
                            alt="Satake Kuro chopper"
                        />
                    </a>
                  
                </div>
            </section>
        </div>
    );
}
