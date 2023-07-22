// import React from 'react'
import "./problempg.css"

export default function Problempg() {
    return (
        <div className='problempg'>
            <div className="lhs">
                <div className='problemId'>
                    <h3 className="problemName">Problem Name</h3>
                    <spam className="problemCat">Array</spam>
                    <spam className="problemCat">Binary Search</spam>
                </div>
                <div className='statement'>
                    <h4 className="problemHead">Problem statement</h4>
                    <p className="problemStatement">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aperiam, odio esse harum recusandae voluptas neque et quos commodi repellat ratione, illum voluptatibus ut deleniti mollitia fuga natus qui fugit.
                    </p>

                </div>
                <div className='example'>
                    <h4 className="problemhead">Example </h4>
                    <p className="problemExample">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur totam neque, mollitia molestias quas ab culpa voluptatibus accusamus excepturi repudiandae iure, minus quia esse. Numquam odit eaque id delectus explicabo?
                    </p>

                </div>
            </div>
            <div className="rhs">
                <div className='codeInput'>
                    <form>
                        <textarea
                            className="codeInput"
                            placeholder="Type your code here..."
                            type="text"
                            // autoFocus={true}
                        />
                        <button className="codeSubmit" type="submit">
                            Submit
                        </button>
                    </form>
                    
                </div>
                <div className='output'>
                    <div className="op">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur sint possimus excepturi deleniti nobis?
                    </div>
                </div>
            </div>

        </div>
    )
}
