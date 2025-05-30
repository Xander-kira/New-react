import React from "react";
import { useState } from "react";

function FormPage(){
    return(
        <div className="forms">
            <h1>React Forms</h1>

            <form>
                <div className="row">
                    <div className="control">
                    <label htmlFor="email"  className="label">Email</label>
                     <input id="email" type="email" name="email" placeholder="you@example.com" required  className="iput"/>
    
                    </div>

                    <div className="control">
                        <label htmlFor="password" className="label">Password</label>
                        <input id="password" type="password" name="password" placeholder="password" required  className="iput"/>


                    </div>
<div className="togs">
    <button className="tons">Log In</button>
    <button className="tons">Reset</button>

</div>
                </div>

            </form>

        </div>
    )

}
export default FormPage;