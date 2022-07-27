import { Button } from "@chakra-ui/react";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";

export default function PrintComponent() {
    const componentRef = useRef();
    return (
        <>
            <div id="print_component">
                {/* button to trigger printing of target component */ }
                <ReactToPrint
                    trigger={ () => <Button>Print this out!</Button> }
                    content={ () => componentRef.current }
                />

                {/* component to be printed */ }
                <div style={ { display: "none" } }>
                    <ComponentToPrint ref={ componentRef } />
                </div>
            </div>
        </>
    );
}

