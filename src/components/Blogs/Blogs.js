import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <section>
            <div className="accordion container blogs" id="accordionExample">
                <h2 >ALL BLOGS</h2>
                <hr />
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How React Works?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            React creates its own DOM which is called ReactDOM/ Virtual DOM. When a change occures in the UI, React creates another new Virtual DOM and compares the changes to its previously created virual DOM using the Diff algorithm. After detecting changes, react changes the specific one in its virtual DOM. Then react executes the Virtual DOM to RealDOM and then we can see the updated UI.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Difference between props and state.
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h4>Props</h4>
                            <ol>
                                <li>The Data is passed from one component to another. </li>
                                <li>It is Immutable (cannot be modified). </li>
                                <li>Props can be used with state and functional components.</li>
                                <li>Stateless component can have Props. Props are read-only.</li>
                                <li>Props make components reusable.</li>
                            </ol>
                            <h4>State</h4>
                            <ol>
                                <li>The Data is passed within the component only.</li>
                                <li>It is Mutable ( can be modified).</li>
                                <li>State can be used only with the state components/class component (Before 16.0).</li>
                                <li>Stateless components cannot have State.</li>
                                <li>State is both read and write.</li>
                                <li>State cannot make components reusable.</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Write the use of the useEffect hook without the data loading process using the API.
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            When we need to perform side effects in a functional component, we can use the helpful useEffect hook. The useEffect hook takes two arguments, a function and a list of dependencies. If the function or the dependencies change, the function is called.
                            Besides loading data from API, the useEffect hook allows us to handle side effects such as logging, making asynchronous calls, or setting values on local storage.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;