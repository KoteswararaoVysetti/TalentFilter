"use client";
import React, { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../ui/Loader/Loader";

const LoaderContext = createContext<any>(null);

export const LoaderProvider = (props: any) => {
  const [isAnythingLoading, setIsAnythingLoading] = useState<boolean>(false);

  const setLoadingState = (loading: boolean) => {
    setIsAnythingLoading(loading);
  };
  return (
    <LoaderContext.Provider value={{ isAnythingLoading, setLoadingState }}>
      <Loader isLoading={isAnythingLoading} />
      {props?.children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  return useContext(LoaderContext);
};
