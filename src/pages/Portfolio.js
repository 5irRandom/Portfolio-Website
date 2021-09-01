import React from "react";

function Portfolio() {
    return (
        <div class="container content my-5 py-3">
            <div class="row">
            <section>
                <p class="h2 text-center">Portfolio</p>
                <div class="text-center">
                <hr />
                <br />
                    <a class="h4" href="https://github.com/5irRandom/projectTwo">Git Jokes Redux</a>
                    <img src={`${process.env.PUBLIC_URL}/assets/project2preredux.png`} class="img-fluid border mx-auto" alt="Completed Application" />
                    <p>The second project I worked on, soon to be reworked to work with React as well as a general restructuring.</p>
                <br />
                    <a class="h4" href="https://github.com/wrp90/ProductivityApp/">Productivity App</a>
                    <img src={`${process.env.PUBLIC_URL}/assets/project3.png`} class="img-fluid border mx-auto" alt="Completed Application" />
                    <p>The third and latest project I worked on with a group, overall uncompleted but feature rich.</p>
                <br />
                    <a class="h4" href="https://github.com/5irRandom/Project-1">How Does that Song Go?</a>
                    <img src={`${process.env.PUBLIC_URL}/assets/project1.png`} class="img-fluid border mx-auto" alt="Completed Application" />
                    <p>Needs some definite improvements but for a first project I think it came together pretty well.</p>
                </div>
            </section>
            </div>
        </div>
)}

export default Portfolio;