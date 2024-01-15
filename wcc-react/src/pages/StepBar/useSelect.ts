import React, { Fragment, useEffect, useId } from "react";

const useSelect = () => {
  useEffect(() => {
    const test = useId();
  }, []);
};
export default useSelect;