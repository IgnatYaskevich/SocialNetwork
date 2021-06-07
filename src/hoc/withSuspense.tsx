import React, {ComponentType} from "react";
import {LinearProgress} from "@material-ui/core";

export function withSuspense<T>(Component: ComponentType<T>) {
    return (props: any) => {
        return <React.Suspense fallback={<div><LinearProgress/></div>}><Component {...props}/></React.Suspense>
    }
}