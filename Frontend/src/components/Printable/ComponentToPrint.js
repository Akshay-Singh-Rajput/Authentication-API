import React from "react";
// component to be printed
export const ComponentToPrint = React.forwardRef((props, ref) => {

    return (
        <div ref={ ref }>
            <h2 style={ { color: "green" } }>Attendance</h2>
            <table>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Aakash Kumar</td>
                        <td>tech.aku@gmail.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Akshay Kumar</td>
                        <td>akshay@gmail.com</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Undefined</td>
                        <td>No Email</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

});