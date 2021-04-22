import React from "react";
import { classNameBootstrap } from "../constants";

export const Loader = () => (
    <div className={classNameBootstrap.spinner} role="status"></div>
);
